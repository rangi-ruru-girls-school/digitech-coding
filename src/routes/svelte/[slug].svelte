<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`svelte/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { project: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let project;

  const getTabColor = skill => {
    switch (skill) {
      case `Input`:
        return `is-info`;
        break;
      case `Output`:
        return `is-link`;
        break;
      case `Variables`:
        return `is-primary`;
        break;
      case `Arrays`:
        return `is-dark`;
        break;
      case `Objects`:
        return `is-light`;
        break;
      case `If Statements`:
        return `is-success`;
        break;
      case `While Loops`:
        return `is-warning`;
        break;
      case `ForEach Loops`:
        return `is-danger`;
        break;
      default:
        return;
    }
  };
</script>

<style>
  .tag {
    margin-right: 5px;
  }

  iframe {
    height: 450px;
    width: 100%;
    margin-top: 15px;
    display: block;
    border-top: 1px solid black;
  }
</style>

<svelte:head>
  <title>Svelte: {project.title}</title>
</svelte:head>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">{project.title}</h1>
      <h2 class="subtitle">{project.subtitle}</h2>
      <span class="">Skills:</span>
      {#each project.skills as skill}
        <span class="tag {getTabColor(skill)}">{skill}</span>
      {/each}
    </div>
  </div>
</section>
<section class="section">
  <p class="content">Something about the project.</p>

  <iframe title={project.title} src={project.src} />
</section>
