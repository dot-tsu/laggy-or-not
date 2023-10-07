const ping = (() => {
    const requestImage = (url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(url);
        img.src = `${url}?random-no-cache=${Math.floor((1 + Math.random()) * 0x10000).toString(16)}`;
      });
    };
  
    const ping = (url, multiplier) => {
      return new Promise((resolve, reject) => {
        const start = new Date().getTime();
        const response = () => {
          const delta = new Date().getTime() - start;
          delta *= multiplier || 1;
          resolve(delta);
        };
        requestImage(url).then(response).catch(response);
  
        setTimeout(() => reject(new Error('Timeout')), 5000);
      });
    };
  
    return ping;
  })();
  
  export default ping;