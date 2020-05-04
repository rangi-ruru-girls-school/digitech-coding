<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/loops.json`)
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  export let projects

  let cheatCode = []
  let unlock = false

  document.onkeydown = function (e) {
    let charCode


    if (typeof event !== 'undefined') {
      charCode = event.keyCode
    }
    else if (e) {
      charCode = e.which
    }

    if (cheatCode.length > 4) {
      [, ...cheatCode] = cheatCode
    }
    cheatCode = [...cheatCode, String.fromCharCode(charCode)];
    console.log(`Cheat code: ${cheatCode.toString()}`)
    if (cheatCode.toString() === 'I,D,D,Q,D') {
      console.log(`Cheat code accepted!`)
      unlock = true;
    }
  }
</script>

<svelte:head>
  <title>Javascript: Loops</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript and jQuery</a></li>
    <li class="is-active"><a href="js/loops">Loops</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Loops</h1>
      <h2 class="subtitle">Utilise the computer's power to repeat the same task over and over.</h2>
    </div>
  </div>
</section>
<section class="section">
  <ul>
    {#each projects as project, index}
      {#if index != projects.length - 1}
        <li>
          <a rel="prefetch" href="js/loops/{project.slug}">{project.title}</a>
        </li>
      {/if}
    {/each}
    {#if unlock}
      <li>
          <a rel="prefetch" href="js/loops/{projects[projects.length - 1].slug}">
            {projects[projects.length - 1].title}
          </a>
      </li>
    {/if}
  </ul>
</section>
