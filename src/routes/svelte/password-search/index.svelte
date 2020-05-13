<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`svelte/password-search.json`)
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

  .project-icon {
    font-family: 'Dosis', sans-serif;
    font-size: 3em;
    height: 1em;
    line-height: 1em;
    display: block;
  }

  .project-title {
    display: block;
    margin-top: 10px;
  }
</style>

<svelte:head>
  <title>Svelte: Password Search</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dosis:wght@800&display=swap">
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="svelte">Svelte</a></li>
    <li class="is-active"><a href="svelte/password-search">Password Search</a></li>
  </ul>
</nav>

<Hero title="Password Search" subtitle="See if your password is on the list by using search algorithms." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      <div class="tile is-parent">
          <a class="tile is-child box" href="svelte/password-search/{project.slug}" rel="prefetch">
            <span class="project-icon">{project.icon}</span>
            <span class="project-title">{project.title}</span>
          </a>
      </div>
    {/each}
  </div>
</section>