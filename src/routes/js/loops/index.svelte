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
  import Hero from '../../../components/Hero.svelte'
  import Cheat from '../../../components/Cheat.svelte'

  export let projects

  let showProjects = 4
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
  <title>Javascript: Loops</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript</a></li>
    <li class="is-active"><a href="js/loops">Loops</a></li>
  </ul>
</nav>

<Hero title="Loops" subtitle="Utilise the computer's power to repeat the same task over and over." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      {#if index < showProjects}
        <div class="tile is-parent">
            <a class="tile is-child box" href="js/loops/{project.slug}" rel="prefetch">
              <i class="{project.icon} fa-3x" />
              <span>{project.title}</span>
            </a>
        </div>
      {/if}
    {/each}
  </div>
  <Cheat bind:value={showProjects} />
</section>