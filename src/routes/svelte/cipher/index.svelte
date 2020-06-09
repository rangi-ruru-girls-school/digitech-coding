<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`svelte/cipher.json`)
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
  <title>Svelte: Cipher</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dosis:wght@800&display=swap">
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="svelte">Svelte</a></li>
    <li class="is-active"><a href="svelte/cipher">Cipher</a></li>
  </ul>
</nav>

<Hero title="Cipher" subtitle="Send secret messages using encryption." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      <div class="tile is-parent">
        <a class="tile is-child box" href="svelte/cipher/{project.slug}" rel="prefetch">
          <span class="project-icon">{project.icon}</span>
          <span class="project-title">{project.title}</span>
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