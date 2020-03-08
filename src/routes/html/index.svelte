<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`html.json`).then(r => r.json()).then(projects => {
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
	<title>HTML</title>
</svelte:head>

<h1>HTML Projects</h1>

<ul>
	{#each projects as project}
		<li><a rel='prefetch' href='js/{project.slug}'>{project.title}</a></li>
	{/each}
</ul>