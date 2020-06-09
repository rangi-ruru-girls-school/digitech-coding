<script>
  import Hero from '../../../components/Hero.svelte'
  import Cheat from '../../../components/Cheat.svelte'
  import projects from './_projects.js'

  let showProjects = 4
  let showExt = false
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
  <title>Javascript: Arrays</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript</a></li>
    <li class="is-active"><a href="js/arrays">Arrays</a></li>
  </ul>
</nav>

<Hero title="Arrays" subtitle="Probably programming's most versatile data structure." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      {#if index < 4}
        <div class="tile is-parent">
            <a class="tile is-child box" href="js/arrays/{project.slug}" rel="prefetch">
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
  <Cheat bind:value={showExt} />
</section>