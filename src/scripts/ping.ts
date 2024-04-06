// Credits to https://github.com/alfg/ping.js
interface PingOptions {
  favicon?: string;
  timeout?: number;
  logError?: boolean;
}

class Ping {
  private opt: PingOptions;
  private favicon: string;
  private timeout: number;
  private logError: boolean;
  private wasSuccess: boolean = false;
  private img!: HTMLImageElement;

  constructor(opt: PingOptions = {}) {
    this.opt = opt;
    this.favicon = this.opt.favicon ?? "/favicon.ico";
    this.timeout = this.opt.timeout ?? 0;
    this.logError = this.opt.logError || false;
  }

  ping(
    source: string,
    callback?: (error: string | null, pongTime: number) => void
  ): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const self = this;
      self.wasSuccess = false;
      self.img = new Image();

      self.img.onload = (event) => {
        self.wasSuccess = true;
        pingCheck.call(self, event);
      };

      self.img.onerror = (event) => {
        self.wasSuccess = false;
        pingCheck.call(self, event);
      };

      let timer: number;
      const start = new Date();

      if (self.timeout) {
        timer = window.setTimeout(() => {
          pingCheck.call(self, null);
        }, self.timeout);
      }

      function pingCheck(this: Ping, e?: Event | string | null) {
        if (timer) {
          clearTimeout(timer);
        }
        const pong = new Date().getTime() - start.getTime();
        if (typeof callback === "function") {
          if (typeof e === "string") {
            if (this.logError) {
              console.error("error loading resource");
            }
            callback(e, pong);
          } else if (!this.wasSuccess) {
            if (this.logError) {
              console.error("error loading resource");
            }
            callback("error", pong);
          } else {
            callback(null, pong);
          }
        } else {
          throw new Error("Callback is not a function.");
        }
      }

      self.img.src = `${source}${self.favicon}?${+new Date()}`; // Trigger image load with cache buster
    });
  }
}

export default Ping;
