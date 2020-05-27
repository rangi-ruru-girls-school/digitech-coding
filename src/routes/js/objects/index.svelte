<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/objects.json`)
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  // export let projects;
</script>

<svelte:head>
  <title>Javascript: Arrays</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript and jQuery</a></li>
    <li class="is-active"><a href="js/objects">Objects</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Objects</h1>
      <h2 class="subtitle">A flexible data structure to represent anything.</h2>
    </div>
  </div>
</section>

<section class="section">
  <p>Coming soon...</p>
</section>
