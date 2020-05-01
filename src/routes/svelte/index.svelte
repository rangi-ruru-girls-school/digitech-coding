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
      <a class="tile is-child box" rel="prefetch" href="svelte/hello-world">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>Hello World</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/the-repeater">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>The Repeater</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/hot-chocolate">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>Hot Chocolate</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/the-box">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>The Box</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/hipster-ipsum">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>Hipster Ipsum</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/hipster-ipsum">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>To-do List</span>
      </a>
    </div>
    <div class="tile is-parent">
      <a class="tile is-child box" rel="prefetch" href="svelte/password-searcher-v1">
        <i class="fas fa-hourglass-half fa-3x" />
        <span>Password Searcher</span>
      </a>
    </div>
  </div>
</section>
