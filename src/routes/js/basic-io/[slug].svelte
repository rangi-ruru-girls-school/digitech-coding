<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`js/basic-io/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Hero from '../../../components/Hero.svelte'
  import ProgressBar from '../../../components/ProgressBar.svelte'
  import Video from '../../../components/Video.svelte'
  import Code from '../../../components/Code.svelte'
  
  export let project;
</script>

<svelte:head>
  <title>JavaScript: {project.title}</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript and jQuery</a></li>
    <li><a href="js/basic-io">Basic I/O</a></li>
    <li class="is-active"><a href="js/{project.slug}">{project.title}</a></li>
  </ul>
</nav>

<Hero title={project.title} subtitle={project.subtitle} skills={project.skills} />

{#if project.progressValue}
  <ProgressBar value={project.progressValue} max={project.progressMax} prev="js/basic-io/{project.prev}" next="js/basic-io/{project.next}" />
{/if}

<section class="section">
  {#if project.video}
    <Video title={project.title} src="{project.video}" />
  {/if}

  <p class="content">{@html project.description}</p>

  <Code title={project.title} src={project.code} />
</section>
