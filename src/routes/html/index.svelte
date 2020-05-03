<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`html.json`)
		.then(r => r.json())
		.then(projects => {
			return { projects };
		});
	}
</script>

<script>
	import Hero from '../../components/Hero.svelte'

	export let projects;
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
	<title>HTML</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="html">HTML</a></li>
    <li class="is-active"><a href="js/basic-io">Basic I/O</a></li>
  </ul>
</nav>

<Hero title="HTML & CSS" subtitle="How to get information from the page and put information on it." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project}
      <div class="tile is-parent">
          <a class="tile is-child box" href="html/{project.slug}" rel="prefetch">
            <i class="{project.icon} fa-3x" />
            <span>{project.title}</span>
          </a>
      </div>
    {/each}
  </div>
</section>