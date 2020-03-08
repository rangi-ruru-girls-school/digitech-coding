<style>
  a {
    text-align: center;
  }

  img {
	  height: 10em;
  }

  span {
    display: block;
    margin-top: 10px;
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>

<div class="tile is-ancestor">
  <div class="tile is-parent">
    <a class="tile is-child box" href="html">
      <i class="fa-10x fas fa-code" />
      <span>HTML5 and CSS3</span>
    </a>
  </div>
  <div class="tile is-parent">
    <a class="tile is-child box" href="js">
      <i class="fa-10x fab fa-js" />
      <span>JavaScript and jQuery</span>
    </a>
  </div>
  <div class="tile is-parent">
    <a class="tile is-child box" href="svelte">
      <img src="svelte-logo.png" alt="Svelte logo">
      <span>Svelte</span>
    </a>
  </div>
</div>
