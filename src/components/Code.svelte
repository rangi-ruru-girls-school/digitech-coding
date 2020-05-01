<script>
  export let title = "Unknown";
  export let src = null;
  let showCode = false;
</script>

<style>
  iframe {
    height: 450px;
    width: 100%;
    margin-top: 15px;
    display: block;
    border-top: 1px solid black;
  }
</style>

<button
  class="button"
  on:click={() => {
    showCode = !showCode;
  }}>
  {showCode ? 'Hide' : 'Show'} Code
</button>

{#if showCode}
  <iframe {title} {src} />
{/if}
