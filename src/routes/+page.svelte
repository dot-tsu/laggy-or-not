<script>
  let games = [
    {
      name: "League of Legends",
      image:
        "https://videogames.si.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1MDM4MTM2MzAzMTY3MjAy/league-of-legends-key-art.jpg",
      available: true,
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
</script>

<main class="bg-richblack/60 min-h-[90vh]">
  <h1 class="font-black text-center">
    <span class="text-8xl">LAGGY</span><span class="font-normal text-4xl block"
      >OR NOT</span
    >
  </h1>

  <section class="m-10 text-xl p-5">
    <h2 class="py-5 text-4">Select a game</h2>
    <div
      class="grid gap-5 [&>article]:relative [&>article]:shadow-xl [&>article>img]:rounded-lg [&>article>img]:h-full [&>article>img]:max-w-full [&>article]:rounded-lg [&>article>h3]:rounded-b-lg [&>article>h3]:absolute [&>article>h3]:bottom-0 [&>article>h3]:p-5 [&>article>h3]:bg-richblack/50 [&>article>h3]:w-full"
    >
      {#each games as { name, image, available }}
        <article
          class={available
            ? "cursor-pointer"
            : "[&>img]:grayscale cursor-not-allowed"}
        >
          <img src={image} alt={name} />
          <h3>{name} {available ? "" : "(Work in progress)"}</h3>
        </article>
      {/each}
    </div>
  </section>
</main>
