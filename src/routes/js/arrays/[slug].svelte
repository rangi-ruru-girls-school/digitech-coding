<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`js/arrays/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data }
    } else {
      this.error(res.status, data.message)
    }
  }
</script>

<script>
  import Hero from '../../../components/Hero.svelte'
  import ProgressBar from '../../../components/ProgressBar.svelte'
  import Video from '../../../components/Video.svelte'
  import Sandbox from '../../../components/Sandbox.svelte'

  export let project

  console.log('project: ' + JSON.stringify(project))

</script>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript</a></li>
    <li><a href="js/arrays">Arrays</a></li>
    <li class="is-active"><a href="js/arrays/{project.slug}">{project.title}</a></li>
  </ul>
</nav>

<Hero title={project.title} subtitle={project.subtitle} skills={project.skills} />

{#if project.progressValue}
  <ProgressBar value={project.progressValue} max={project.progressMax} prev="js/arrays/{project.prev}" next="js/arrays/{project.next}" />
{/if}

<section class="section">
  {#if project.video}
    <Video title={project.title} src="{project.video}" />
  {/if}

  <p class="content">{@html project.description}</p>

  {#if project.code}
    <Sandbox title={project.title} src={project.code} />
  {/if}
</section>

