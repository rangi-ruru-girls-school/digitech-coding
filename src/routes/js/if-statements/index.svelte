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
  <title>Javascript: If Statements</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript</a></li>
    <li class="is-active"><a href="js/if-statements">If Statements</a></li>
  </ul>
</nav>

<Hero title="If Statements" subtitle="Get your program to make a decision so that it's not the same every time it runs." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      {#if index < showProjects}
        <div class="tile is-parent">
            <a class="tile is-child box" href="js/if-statements/{project.slug}" rel="prefetch">
              <i class="{project.icon} fa-3x" />
              <span>{project.title}</span>
            </a>
        </div>
      {/if}
    {:else}
      <div class="tile is-parent">
        <div class="tile is-child box">
          <span>Loading projects...</span>
        </div>
      </div>
    {/each}
  </div>
  <Cheat bind:value={showProjects} />
</section>
