<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`js/if-statements.json`)
      .then(r => r.json())
      .then(projects => {
        return { projects };
      });
  }
</script>

<script>
  import Hero from '../../../components/Hero.svelte'

  export let projects

  let cheatCode = []
  let unlock = false

  document.onkeypress = function(event) {
    event = event || window.event;
    let charCode = typeof event.which == 'number' ? event.which : event.keyCode
    if (charCode) {
      if (cheatCode.length > 4) {
        [, ...cheatCode] = cheatCode
      }
      cheatCode = [...cheatCode, String.fromCharCode(charCode)]
    }
    if (cheatCode.toString() === 'i,d,d,q,d') {
      console.log(`Cheat code accepted!`)
      unlock = true
    }
  }
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
  <title>Javascript: If Statements</title>
</svelte:head>

<nav class="breadcrumb" aria-label="breadcrumbs">
  <ul>
    <li><a href=".">DigiTech</a></li>
    <li><a href="js">JavaScript and jQuery</a></li>
    <li class="is-active"><a href="js/if-statements">If Statements</a></li>
  </ul>
</nav>

<Hero title="If Statements" subtitle="Get your program to make a decision so that it's not the same every time it runs." />

<section class="section">
  <div class="tile is-ancestor">
    {#each projects as project, index}
      {#if index != projects.length - 1}
        <div class="tile is-parent">
            <a class="tile is-child box" href="js/if-statements/{project.slug}" rel="prefetch">
              <i class="{project.icon} fa-3x" />
              <span>{project.title}</span>
            </a>
        </div>
      {/if}
    {/each}
    {#if unlock}
      <div class="tile is-parent">
          <a class="tile is-child box" href="js/if-statements/{projects[projects.length - 1].slug}" rel="prefetch">
            <i class="{projects[projects.length - 1].icon} fa-3x" />
            <span>{projects[projects.length - 1].title}</span>
          </a>
      </div>
    {/if}
  </div>
</section>
