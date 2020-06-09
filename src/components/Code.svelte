<script>
  export let title = "Unknown";
  export let src = null;
  let showCode = false;
</script>

<style>
  iframe {
    height: 800px;
    width: 100%;
    margin-top: 15px;
    display: block;
    border-top: 1px solid black;
  }
</style>

<hr>

<div class="content">
  <h2>Sandbox</h2>

  <p>Feel free to play around with the example below to see how the web page reacts to your code changes in a consequence-free environment. You won't break or overwrite anything so go for gold.</p>

  <button
    class="button"
    on:click={ () => {
      showCode = !showCode;
    }}>
    {showCode ? 'Hide' : 'Show'} Code
  </button>

  {#if showCode}
    <iframe {title} {src} />
  {/if}
</div>

