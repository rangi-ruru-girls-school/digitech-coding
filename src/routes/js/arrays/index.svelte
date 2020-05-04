<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/arrays.json`)
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
    <li class="is-active"><a href="js/arrays">Arrays</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Arrays</h1>
      <h2 class="subtitle">Probably programming's most versatile data structure.</h2>
    </div>
  </div>
</section>
<section class="section">
  <p>Coming soon...</p>
</section>
