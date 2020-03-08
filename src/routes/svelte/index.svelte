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

<h1>Svelte Projects</h1>

<ul>
	{#each projects as project}
		<li><a rel='prefetch' href='svelte/{project.slug}'>{project.title}</a></li>
	{/each}
</ul>