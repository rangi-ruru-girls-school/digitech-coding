<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/basic-io.json`)
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  export let projects;
</script>

<style>
  a {
    text-align: center;
  }

  span {
    display: block;
    margin-top: 10px;
  }
</style>

<svelte:head>
  <title>Javascript: Basic I/O</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript and jQuery</a></li>
    <li class="is-active"><a href="js/basic-io">Basic I/O</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Basic Input/Output</h1>
      <h2 class="subtitle">How to get information from the page and put information on it.</h2>
    </div>
  </div>
</section>
<section class="section">
<div class="tile is-ancestor">
  {#each projects as project}
    <div class="tile is-parent">
        <a class="tile is-child box" href="js/basic-io/{project.slug}" rel="prefetch">
          <i class="{project.icon} fa-3x" />
          <span>{project.title}</span>
        </a>
    </div>
  {/each}
  </div>
</section>