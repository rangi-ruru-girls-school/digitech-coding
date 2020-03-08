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
  export let project;
</script>

<style>

</style>

<svelte:head>
  <title>{project.title}</title>
</svelte:head>

<h1>{project.title}</h1>

<h2>{project.subtitle}</h2>
