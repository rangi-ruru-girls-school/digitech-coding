<script>
  export let title = "Unknown";
  export let src = null;
  let showTest = false;
</script>

<style>
  button {
    margin-top: 10px;
  }

  iframe {
    height: 450px;
    width: 100%;
    margin-top: 15px;
    display: block;
    border-top: 1px solid black;
  }
</style>

<h2 class="subtitle">Practice Quiz</h2>

<p>The quiz below covers some of the key skills up to this point. It is designed to help you identify what you know and what you need to practice. You can take the test as many times as you like.</p>

<button
  class="button"
  on:click={() => {
    showTest = !showTest;
  }}>
  {showTest ? 'Hide' : 'Show'} Quiz
</button>

{#if showTest}
  <iframe {title} {src} />
{/if}
