<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/if-statements.json`)
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
    <li class="is-active"><a href="js/basic-io">If Statements</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">If Statements</h1>
      <h2 class="subtitle">Get your program to make a decision so that it's not the same every time it runs.</h2>
    </div>
  </div>
</section>
<section class="section">
  <ul>
    {#each projects as project}
      <li>
        <a rel="prefetch" href="js/if-statements/{project.slug}">{project.title}</a>
      </li>
    {/each}
  </ul>
</section>
