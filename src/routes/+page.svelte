<script>
  let games = [
    {
      name: "League of Legends",
      image:
        "https://videogames.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1MDM4MTM2MzAzMTY3MjAy/league-of-legends-key-art.jpg",
      available: true,
      ips: {
        LAS: "151.106.249.1",
        LAN: "138.0.15.100",
        NA: "192.64.170.107"
      },
    },
    {
      name: "Valorant",
      image:
        "https://firstsportz.com/wp-content/uploads/2022/12/Valorant-year-end-1.jpg",
      available: false,
      ips: {
        "MEX/MIA": "192.207.0.1",
        SCL: "151.106.249.1",
        
      }
    },
    {
      name: "Counter-Strike 2",
      image:
        "https://readcbr.com/wp-content/uploads/2023/09/counter-strike-2.jpg",
      available: false,
    },
    {
      name: "Overwatch 2",
      image:
        "https://www.playerone.vg/wp-content/uploads/2021/08/overwatch2-1-e1628508798686.jpg",
      available: false,
    },
  ];

  let selectedGame = games[0];
  let averagePingTime = 0;
  let pinging = false;
  let pingInterval = null;

  async function pingServer() {
    const selectedServer = document.getElementById("server-select").value;

    try {
      const start = performance.now();
      await fetch(selectedServer, { method: "HEAD" });
      const end = performance.now();
      const pingTime = end - start;
      averagePingTime = pingTime.toFixed(0);
    } catch (error) {
      alert(`Ping failed: ${error.message}`);
    }

    if (pinging) {
      pingInterval = setTimeout(pingServer, 1000);
    }
  }

  function startPinging() {
    pinging = true;
    pingServer();
  }

  function stopPinging() {
    pinging = false;
    clearTimeout(pingInterval);
  }
</script>

<main class="bg-richblack/60 min-h-[90vh] p-10">
  <div
  class="pt-5 {averagePingTime > 1
    ? 'opacity-100'
    : 'opacity-0'} transition-opacity"
>
  <h2 class="text-center text-8xl rounded-sm font-bold">
    {averagePingTime}
  </h2>
  <p class="text-center text-lg">ms</p>
</div>
  <section class="text-xl m-5 rounded-md">
    <form id="ping-form">
      <select
        id="server-select"
        name="server"
        class="block my-5 rounded-sm border-2 border-white p-4 bg-richblack/50 w-full"
      >
        <option value="" class="bg-silverlakeblue" selected>Select a server</option>
        {#each Object.keys(selectedGame.ips) as ip}
          <option value={selectedGame.ips[ip]} class="bg-silverlakeblue ">{ip}</option>
        {/each}
      </select>
      <button
        class="w-full bg-richblack/50 rounded-sm p-4 border-2 border-white hover:bg-white hover:text-richblack transition-colors"
        on:click={pinging ? stopPinging : startPinging}
        >{pinging ? "Stop" : "Ping!"}</button
      >
    </form>
   
  </section>
  <section class="text-xl p-3">
    <h2 class="py-5">Select a game</h2>
    <div
      class="grid gap-5 [&>article]:relative [&>article]:shadow-xl [&>article>img]:rounded-lg [&>article>img]:h-full [&>article>img]:max-w-full [&>article]:rounded-lg [&>article>h3]:rounded-b-lg [&>article>h3]:absolute [&>article>h3]:bottom-0 [&>article>h3]:p-5 [&>article>h3]:bg-richblack/50 [&>article>h3]:w-full"
    >
      {#each games as { name, image, available }}
        <article
          class="{available
            ? 'cursor-pointer hover:scale-105 transition-transform'
            : '[&>img]:grayscale cursor-not-allowed'} {selectedGame.name ===
          name
            ? 'border-2 border-x-flame '
            : null}"
        >
          <img src={image} alt={name} />
          <h3>{name} {available ? "" : "(Work in progress)"}</h3>
        </article>
      {/each}
    </div>
  </section>
</main>
