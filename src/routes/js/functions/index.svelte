<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/functions.json`)
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
  <title>Javascript: Functions</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript</a></li>
    <li class="is-active"><a href="js/functions">Functions</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Functions</h1>
      <h2 class="subtitle">How to re-use code for fun and profit.</h2>
    </div>
  </div>
</section>

<section class="section">
  <p>Coming soon...</p>
</section>
