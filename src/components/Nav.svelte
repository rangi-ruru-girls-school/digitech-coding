<script>
  export let segment;
</script>

<style>
  img {
    height: 1em;
  }

  span {
    margin-left: 0.5em;
  }
</style>

<nav class="navbar is-dark">
  <div class="navbar-brand">
    <a class="navbar-item" class:is-active={segment === undefined} href=".">
      <i class="fas fa-home" />
      <span>DigiTech</span>
    </a>
  </div>
  <!-- end navbar-brand -->

  <div class="navbar-menu">
    <div class="navbar-start">
      <a
        class="navbar-item"
        class:is-active={segment === 'html'}
        rel="prefetch"
        href="html">
        <i class="fas fa-code" />
        <span>HTML and CSS</span>
      </a>
      <a
        class="navbar-item"
        class:is-active={segment === 'js'}
        rel="prefetch"
        href="js">
        <i class="fab fa-js" />
        <span>JavaScript and jQuery</span>
      </a>
      <a
        class="navbar-item"
        class:is-active={segment === 'svelte'}
        rel="prefetch"
        href="svelte">
        <img src="svelte-logo.png" alt="Svelte logo" />
        <span>Svelte</span>
      </a>
    </div>
    <!-- end navbar-start -->
  </div>
  <!-- end navbar-menu -->
</nav>
