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
  export let projects;
</script>

<svelte:head>
  <title>Javascript: Arrays</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript and jQuery</a></li>
    <li class="is-active"><a href="js/basic-io">Loops</a></li>
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
    {#each projects as project}
      <li>
        <a rel="prefetch" href="js/loops/{project.slug}">{project.title}</a>
      </li>
    {/each}
  </ul>
</section>
