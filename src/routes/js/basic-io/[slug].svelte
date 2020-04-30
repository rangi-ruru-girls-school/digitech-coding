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
  export let project;
  let showCode = false;

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
      case `Loops`:
        return `is-warning`;
        break;
      case `Components`:
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

{#if project.progressValue}
  <progress class="progress" value={project.progressValue} max={project.progressMax}>{project.progressValue / project.progressMax}%</progress>
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item">
        {#if project.prev}
          <a class="button" href="js/basic-io/{project.prev}">
            <i class="fas fa-caret-left fa-2x"></i>
            &nbsp;
            Prev
          </a>
        {:else}
          <a class="button" disabled>
            <i class="fas fa-caret-left fa-2x"></i>
            &nbsp;
            Prev
          </a>
        {/if}
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        {#if project.next}
          <a class="button" href="js/basic-io/{project.next}">
            Next
            &nbsp;
            <i class="fas fa-caret-right fa-2x"></i>
          </a>
        {:else}
          <a class="button" disabled>
            Next
            &nbsp;
            <i class="fas fa-caret-right fa-2x"></i>
          </a>
          
        {/if}
      </div>
    </div>
  </div>
{/if}

<section class="section">
  <iframe title={project.title} src="{project.video}" allowfullscreen></iframe>

  <p class="content">{@html project.description}</p>

  <button class="button" on:click={ () => { showCode = !showCode; } }>
    {showCode ? "Hide" : "Show"} Code
  </button>

  {#if showCode}
    <iframe title={project.title} src={project.code} />
  {/if}
</section>
