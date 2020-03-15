<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`svelte.json`).then(r => r.json()).then(projects => {
			return { projects };
		});
	}
</script>

<script>
	export let projects;
</script>

<style>

</style>

<svelte:head>
	<title>Svelte</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li class="is-active"><a href="svelte">Svelte</a></li>
  </ul>
</nav>

<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Svelte</h1>
      <h2 class="subtitle">A flexible and lightweight framework for creating responsive web apps.</h2>
    </div>
  </div>
</section>
<section class="section">
  <ul>
    {#each projects as project}
      <li>
        <a rel='prefetch' href='svelte/{project.slug}'>{project.title}</a>
      </li>
    {/each}
  </ul>
</section>
