<script>
  let games = [
    {
      name: "League of Legends",
      image:
        "https://videogames.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1MDM4MTM2MzAzMTY3MjAy/league-of-legends-key-art.jpg",
      available: true,
      ips: {
        LAS: "151.106.249.1",
        LAN: "104.160.136.3",
        EUW: "104.160.141.3",
        NA: "104.160.131.3",
      },
    },
    {
      name: "Valorant",
      image:
        "https://firstsportz.com/wp-content/uploads/2022/12/Valorant-year-end-1.jpg",
      available: false,
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

  async function pingServer() {
    const selectedServer = document.getElementById("server-select").value;
    const numPings = 20; 
    let totalPingTime = 0;

    for (let i = 0; i < numPings; i++) {
      try {
        const start = performance.now();
        await fetch(selectedServer, { method: "HEAD" });
        const end = performance.now();
        const pingTime = end - start;
        totalPingTime += pingTime;
      } catch (error) {
        alert(`Ping attempt ${i + 1} failed: ${error.message}`);
      }
    }

    if (totalPingTime > 0) {
      const averagePingTime = totalPingTime / numPings;
      alert(
        `Average Ping: ${averagePingTime.toFixed(0)} ms`
      );
    }
  }
</script>

<main class="bg-richblack/60 min-h-[90vh]">
  <h1 class="text-center">
    <span class="text-8xl font-bold">LAGGY</span><span
      class="font-light text-4xl block"
      >OR <span class="text-8xl font-bold block">NOT</span></span
    >
  </h1>
  <section class="m-10 text-xl p-5">
    <label for="server-select">Select your server</label>

    <form id="ping-form">
      <select
        id="server-select"
        name="server"
        class="block my-5 rounded-sm border-2 border-white p-2 bg-richblack/50 w-full"
      >
        <option value="" disabled selected>Please choose an option</option>
        {#each Object.keys(selectedGame.ips) as ip}
          <option value={selectedGame.ips[ip]}>{ip}</option>
        {/each}
      </select>
      <button
        class="w-full bg-richblack/50 rounded-sm p-2 border-2 border-white hover:bg-white hover:text-richblack transition-colors"
        on:click={pingServer}>Ping!</button
      >
    </form>
  </section>
  <section class="m-10 text-xl p-5">
    <h2 class="py-5 text-4">Select a game</h2>
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
