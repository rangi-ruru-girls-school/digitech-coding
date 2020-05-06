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
  import Hero from '../../../components/Hero.svelte'

  export let projects
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
    <li><a href="js">JavaScript</a></li>
    <li class="is-active"><a href="js/basic-io">Basic I/O</a></li>
  </ul>
</nav>

<Hero title="Basic Input/Output" subtitle="How to get information from the page and put information on it." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      {#if index != projects.length - 1}
        <div class="tile is-parent">
            <a class="tile is-child box" href="js/basic-io/{project.slug}" rel="prefetch">
              <i class="{project.icon} fa-3x" />
              <span>{project.title}</span>
            </a>
        </div>
      {/if}
    {/each}
  </div>
</section>