<script>
  export let title = "Unknown";
  export let src = null;
  let showCode = false;

  function loadPen() {
    let script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://static.codepen.io/assets/embed/ei.js"
    document.getElementsByTagName("head")[0].appendChild(script)
    return false
  }
</script>

<svelte:head>
  <script async defer src=""></script>
</svelte:head>

<hr>

<div class="content">
  <h2>Sandbox</h2>

  <p>Feel free to play around with the example below to see how the web page reacts to your code changes in a consequence-free environment. You won't break or overwrite anything so go for gold.</p>

  <button
    class="button"
    on:click={ () => {
      showCode = !showCode;
      loadPen()
    }}>
    {showCode ? 'Hide' : 'Show'} Code
  </button>

  {#if showCode}
    <br><br>
    <p
      class="codepen"
      data-height="450"
      data-theme-id="light"
      data-default-tab="html,result"
      data-user="MrHullen"
      data-slug-hash="{src}"
      data-editable="true"
      data-pen-title="{title}"
    ></p>
  {/if}
</div>