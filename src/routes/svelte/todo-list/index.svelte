<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`svelte/todo-list.json`)
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  import Hero from '../../../components/Hero.svelte'

  export let projects
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
  <title>Svelte: Todo List</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="svelte">Svelte</a></li>
    <li class="is-active"><a href="svelte/todo-list">Todo List</a></li>
  </ul>
</nav>

<Hero title="Todo List" subtitle="Keep track of the things you need to do." />

<section class="section">
  <div class="tile is-ancestor">
  <p>Coming soon...</p>
  <!--
    {#each projects as project, index}
      <div class="tile is-parent">
          <a class="tile is-child box" href="svelte/todo-list/{project.slug}" rel="prefetch">
            <i class="{project.icon} fa-3x" />
            <span>{project.title}</span>
          </a>
      </div>
    {/each}
    -->
  </div>
</section>