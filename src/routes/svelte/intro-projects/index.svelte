<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`svelte/intro-projects.json`)
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
  <title>Svelte: Intro</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="svelte">Svelte</a></li>
    <li class="is-active"><a href="svelte/intro-projects">Intro Projects</a></li>
  </ul>
</nav>

<Hero title="Intro Projects" subtitle="An assortment of projects to introduce Svelte concepts and ways of coding." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      <div class="tile is-parent">
          <a class="tile is-child box" href="svelte/intro-projects/{project.slug}" rel="prefetch">
            <i class="{project.icon} fa-3x" />
            <span>{project.title}</span>
          </a>
      </div>
    {:else}
      <div class="tile is-parent">
        <div class="tile is-child box">
          <span>Loading projects...</span>
        </div>
      </div>
    {/each}
  </div>
</section>