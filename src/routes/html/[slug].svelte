<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`html/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Hero from '../../components/Hero.svelte'
  import ProgressBar from '../../components/ProgressBar.svelte'
  import Video from '../../components/Video.svelte'
  import Test from '../../components/Test.svelte'

  export let project;
</script>

<svelte:head>
  <title>HTML: {project.title}</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="html">HTML5 & CSS3</a></li>
    <li class="is-active"><a href="html/{project.slug}">{project.title}</a></li>
  </ul>
</nav>

<Hero title={project.title} subtitle={project.subtitle} skills={project.skills} />

{#if project.progressValue}
  <ProgressBar value={project.progressValue} max={project.progressMax} prev="html/{project.prev}" next="html/{project.next}" />
{/if}

<section class="section">
  {#if project.video}
    <Video title={project.title} src="{project.video}" />
  {/if}

  <p class="content">{@html project.description}</p>

  {#if project.test}
    <Test title={project.title} src={project.test} />
  {/if}
</section>