<script>
  import Hero from '../../components/Hero.svelte'
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
  <title>Svelte</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li class="is-active"><a href="svelte">Svelte</a></li>
  </ul>
</nav>

<Hero title="Svelte" subtitle="A flexible and lightweight framework for creating responsive web apps." />

<section class="section">
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/intro-projects">
        <i class="fas fa-door-open fa-3x" />
        <span>Intro Projects</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/todo-list">
        <i class="fas fa-check-square fa-3x" />
        <span>Todo List</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/password-search">
        <i class="fas fa-unlock-alt fa-3x" />
        <span>Password Search</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/cipher">
        <i class="fas fa-user-secret fa-3x" />
        <span>Cipher</span>
      </a>
    </div>
  </div>
</section>
