<script>
  import { fade } from 'svelte/transition'

  let step = 0
  let steps = [
    {
      explanation: 'Click the button to start stepping through the code',
      console: '',
      vars: `No variables yet`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">Starting!</code> to the Developer Console in the browser</p>`,
      console: `Starting!<br>`,
      vars: `No variables yet`
    },
    {
      explanation: `<p><code class="is-blue">let</code> creates a variable called <code class="is-blue">i</code>, which starts at <code class="is-blue">0</code><br></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>0</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">while</code> starts a loop that will continue while <code class="is-blue">i</code> is less than <code class="is-blue">5</code></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>0</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">i</code> (which is <code class="is-blue">0</code>) to the Developer Console in the browser</p>`,
      console: `0<br>`,
      vars: `<strong><code>i</code></strong> is storing <strong><code>0</code></strong>`
    },
    {
      explanation: `<p>Add <code class="is-blue">1</code> to <code class="is-blue">i</code></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>1</code></strong>`
    },
    {
      explanation: `<p>Continue the <code class="is-blue">while</code> loop</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>1</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">i</code> is still less than <code class="is-blue">5</code> so the loop continues</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>1</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">i</code> (which is <code class="is-blue">1</code>) to the Developer Console in the browser</p>`,
      console: `1<br>`,
      vars: `<strong><code>i</code></strong> is storing <strong><code>1</code></strong>`
    },
    {
      explanation: `<p>Add <code class="is-blue">1</code> to <code class="is-blue">i</code></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>2</code></strong>`
    },
    {
      explanation: `<p>Continue the <code class="is-blue">while</code> loop</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>2</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">i</code> is still less than <code class="is-blue">5</code> so the loop continues</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>2</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">i</code> (which is <code class="is-blue">2</code>) to the Developer Console in the browser</p>`,
      console: `2<br>`,
      vars: `<strong><code>i</code></strong> is storing <strong><code>2</code></strong>`
    },
    {
      explanation: `<p>Add <code class="is-blue">1</code> to <code class="is-blue">i</code></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>3</code></strong>`
    },
    {
      explanation: `<p>Continue the <code class="is-blue">while</code> loop</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>3</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">i</code> is still less than <code class="is-blue">5</code> so the loop continues</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>3</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">i</code> (which is <code class="is-blue">3</code>) to the Developer Console in the browser</p>`,
      console: `3<br>`,
      vars: `<strong><code>i</code></strong> is storing <strong><code>3</code></strong>`
    },
    {
      explanation: `<p>Add <code class="is-blue">1</code> to <code class="is-blue">i</code></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>4</code></strong>`
    },
    {
      explanation: `<p>Continue the <code class="is-blue">while</code> loop</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>4</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">i</code> is still less than <code class="is-blue">5</code> so the loop continues</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>4</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">i</code> (which is <code class="is-blue">4</code>) to the Developer Console in the browser</p>`,
      console: `4<br>`,
      vars: `<strong><code>i</code></strong> is storing <strong><code>4</code></strong>`
    },
    {
      explanation: `<p>Add <code class="is-blue">1</code> to <code class="is-blue">i</code></p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>5</code></strong>`
    },
    {
      explanation: `<p>Continue the <code class="is-blue">while</code> loop</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>5</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">i</code> (which is <code>5</code>) is <strong>not</strong> less than <code class="is-blue">5</code> so the loop stops</p>`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>5</code></strong>`
    },
    {
      explanation: `<p><code class="is-blue">console.log</code> outputs <code class="is-blue">Finished!</code> to the Developer Console in the browser</p>`,
      console: `Finished!<br>`,
      vars: `<strong><code>i</code></strong> is storing <strong><code>5</code></strong>`
    },
    {
      explanation: `The program has finished running. It has looped 5 times and output the variable each time.`,
      console: ``,
      vars: `<strong><code>i</code></strong> is storing <strong><code>5</code></strong>`
    }  
  ]
  let explanation = steps[0].explanation
  let cons = ''

  function nextStep() {
    if (step < steps.length - 1) {
      step++
    } else {
      step = 0
      cons = ''
    }

    explanation = steps[step].explanation
    cons += steps[step].console
  }

</script>

<style>
  #parent {
    display: grid;
    grid: "expl code" 1fr
          "vars  code" auto
          "btn code" auto
          ".    cons" auto
          /1fr  1fr;
    grid-gap: 20px;
    padding: 20px;
  }

  #expl { grid-area: expl; }
  #btn { grid-area: btn; justify-self: right; }
  #cons { grid-area: cons; }
  #code { grid-area: code; }
  #vars { grid-area: vars; justify-self: right; }


  button {
    display: block;
    margin-top: 10px;
  }
</style>


<section class="section content">
  <h2>How Loops Work</h2>
  <div id="parent">
    <div id="expl">
      <h3>Explanation</h3>

      {@html explanation}
    </div>
    <div id="btn">
      <button class="button is-success" on:click={nextStep}>
        {#if step == 0}
          Start
        {:else if step == steps.length - 1}
          Reset
        {:else}
          Next step
        {/if}</button>
    </div>
    <div id="cons">
      <h3>Developer Console</h3>
      <code>{@html cons}</code>
    </div>
    <div id="code">
      <h3>Code</h3>
      <pre><code data-trim>
  console.log('Starting!') {#if step == 1}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}

  let i = 0 {#if step == 2}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}
  while (i &lt; 5) &lbrace; {#if step == 3 || step == 7 || step == 11 || step == 15 || step == 19 || step == 23}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}
    console.log(i) {#if step == 4 || step == 8 || step == 12 || step == 16 || step == 20}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}
    i = i + 1 {#if step == 5 || step == 9 || step == 13 || step == 17 || step == 21}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}
  &rbrace; {#if step == 6  || step == 10 || step == 14 || step == 18 || step == 22}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}

  console.log('Finished!') {#if step == 24}<span transition:fade="{{ duration: 500}}"> 🟢</span>{/if}
  </code></pre>
    </div>
    <div id="vars">
      <p><strong>Variables</strong>: {@html steps[step].vars}</p>
    </div>
  </div>
</section>