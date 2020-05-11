const projects = [
    {
        title: `Hello World`,
        slug: "hello-world",
        icon: ``,
        subtitle: `The simplest program. All coders start here.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: `https://www.youtube.com/embed/W3MUtdrDtP4`,
        description: `
        <p>This project introduces how Svelte can help improve how your HTML and JavaScript interact.</p>
<p>When you write Svelte, you write your code into a <code>.svelte</code> file, which contains JavaScript, CSS, and HTML
  all in one place.</p>
<p>Svelt's main advantage that we'll be taking advantage of is that it makes it very easy to get information to and from
  the page.</p>
<p>Compare the jQuery version of Hello World with the Svelte version and see how much less code it takes and how natural
  it feels to follow it.</p>
<div class="tile is-ancestor">
  <div class="tile is-parent">
    <div class="tile is-child box">
      <h3>HTML & JavaScript (jQuery)</h3>
      <pre><code>&lt;h3&gt;Hello &lt;span id="txtName"&gt;&lt;/span&gt;!&lt;/h3&gt;</code></pre>
      <pre><code>$('#txtName').text('world')</code></pre>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <h3>Svelte</h3>
      <pre><code>&lt;script&gt;
  let name = 'world'
&lt;/script&gt;

&lt;h3&gt;Hello &lbrace;name&rbrace;!&lt;/h3&gt;</code></pre>
    </div>
  </div>
</div>
<h2>Project</h2>
<ol>
  <li>Look over the code below, think about how it runs, and compare the output with the source code.</li>
  <li>Create a new Svelte project from the template.</li>
  <li>Add your Hello World! code.</li>
  <li>In the terminal in VS Code, type <code>npm run dev</code>.</li>
  <li>Check that your code works by going to <code>https://localhost:3000</code>.</li>
  <li>Commit your code with an appropriate message.</li>
</ol>
<h2>Sandbox</h2>
<p>Feel free to play around with the example below to see how the web app reacts to your changes in a consequence-free
  environment.</p>
    `,
        code: `https://svelte.dev/repl/hello-world`,
        skills: [`Output`, `Variables`]
    },
    {
        title: `The Repeater`,
        slug: "the-repeater",
        icon: ``,
        subtitle: `Repeats whatever you put in.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: `https://www.youtube.com/embed/lzHG__fFO0Q`,
        description: `
        <p>This project introduces how you can get information from the web page (and the user) to use in your JavaScript.</p>
        <p>As with the previous project, you'll use some Svelte-specific code in curly braces <code>&lbrace; &rbrace;</code>.</p>
        <p>Specifically, we'll use the <a
            href="https://svelte.dev/docs#bind_element_property"><code>bind:value=&lbrace;variableName&rbrace;</code></a> to connect the input
          in the HTML to a variable in the JavaScript.</p>
         
          <p>Let's compare the jQuery version of The Repeater with the Svelte version.</p>
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3>HTML & JavaScript (jQuery)</h3>
          <pre><code>&lt;label&gt;
  Write something:
  &lt;input id="txtInput" type="text"&gt;
&lt;/label&gt;

&lt;button id="btnRepeat"&gt;Repeat&lt;/button&gt;

&lt;p id="txtOutput"&gt;&lt;/p&gt;</code></pre>
          <pre><code>$('#btnRepeat').click( () => &lbrace;
  let text = $('#txtInput').val()
  $('#txtOutput').text('You wrote: ' + text)
&rbrace;)</code></pre>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child box">
                <h3>Svelte</h3>
                <pre><code>&lt;script&gt;
  let text = ''
&lt;/script&gt;

&lt;label&gt;
   Write something:
  &lt;input bind:value=&lbrace;text&rbrace;&gt;
&lt;/label&gt;

&lt;p&gt;You wrote: &lbrace;text&rbrace;&lt;/p&gt;</code></pre>
              </div>
            </div>
          </div>
        
        <h2>Project</h2>
        <ol>
          <li>Look over the code below, think about how it runs, and compare the output with the source code.</li>
          <li>Create a new Svelte project from the template.</li>
          <li>In the terminal in VS Code, type <code>npm install</code> and then <code>npm run dev</code>.</li>
          <li>Check that your server is running by going to <code>https://localhost:3000</code>.</li>
          <li>Write an app that will add the GST for any price that's typed in.</li>
          <li>This line might help: <code>&lt;p&gt;Total Cost: &lbrace;price * 1.15&rbrace;&lt;/p&gt;</code></li>
          <li>Test your app in your browser.</li>
          <li>Commit your code with an appropriate message.</li>
        </ol>
        <h2>Sandbox</h2>
        <p>Feel free to play around with the example below to see how the web app reacts to your changes in a consequence-free
          environment.</p>
        `,
        code: `https://svelte.dev/repl/ef2531123d084f918b05b44f82927dac`,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `Hot Chocolate`,
        slug: "hot-chocolate",
        icon: ``,
        subtitle: `Is the hot chocolate the right temperature?`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: `https://www.youtube.com/embed/_2N-d5wvgSs`,
        description: `
        <p>This project introduces Svelte-specific if statements <em>inside</em> your HTML.</p>
        <p>You can still write normal if statements inside the <code>&lt;script&gt;&lt;/script&gt;</code> tags, but you won't
          have to as often.</p>
        <p>As with the previous projects, you'll use some Svelte-specific code in curly braces <code>&lbrace; &rbrace;</code>.</p>
        <p>Specifically, we'll use the <a style="color: inherit;" href="https://svelte.dev/docs#if"><code>&lbrace;#if&rbrace;</code>,
            <code>&lbrace;:else if&rbrace;</code>, <code>&lbrace;:else&rbrace;</code>, and <code>&lbrace;/if&rbrace;</code></a> to decide what HTML to have on the page.
        </p>
        <p>Our demo is going to be a simple app that tells you if the variable is less, more, or equal to 2.</p>
        <p>Let's compare the jQuery version of Is It More Than 2? with the Svelte version.</p>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h3>HTML & JavaScript (jQuery)</h3>
              <pre><code>&lt;label&gt;
  Number:
  &lt;input id="numInput" type="number"&gt;
&lt;/label&gt;

&lt;button id="btnCheck"&gt;Check&lt;/button&gt;

&lt;p id="txtResult"&gt;&lt;/p&gt;</code></pre>
              <pre><code>$('#btnCheck').click( ()=> &lbrace;
  let input = $('#numInput').val()
  let number = Number(input)

  let result = ''

  if (number &lt; 2) &lbrace;
      result = number + ' is less than 2.'
  &rbrace; else if (number &gt; 2) &lbrace;
      result = number + ' is more than 2.'
  &rbrace; else &lbrace;
      result = number + ' is 2.'
  &rbrace;

  $('#txtResult').text(result)
&rbrace;)</code></pre>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <h3>Svelte</h3>
              <pre><code>&lt;script&gt;
    let number = 0
&lt;/script&gt;

&lt;label&gt;
  Number:
  &lt;input type="number" bind:value=&lbrace;number&rbrace;&gt;
&lt;/label&gt;

&lbrace;#if number &lt; 2&rbrace;
  &lt;p&gt;&lbrace;number&rbrace; is less than 2.&lt;/p&gt;
&lbrace;:else if number &gt; 2&rbrace;
  &lt;p&gt;&lbrace;number&rbrace; is more than 2.&lt;/p&gt;
&lbrace;:else&rbrace;
  &lt;p&gt;&lbrace;number&rbrace; is 2.&lt;/p&gt;
&lbrace;/if&rbrace;</code></pre>
            </div>
          </div>
        </div>
        <h2>Project</h2>
        <ol>
          <li>Look over the code below, think about how it runs, and compare the output with the source code.</li>
          <li>Create a new Svelte project from the template.</li>
          <li>In the terminal in VS Code, type <code>npm install</code> and then <code>npm run dev</code>.</li>
          <li>Check that your server is running by going to <code>https://localhost:3000</code>.</li>
          <li>Write an app that will take in a hot chocolate's temperature and tell you if it's tepid, good, or too hot.</li>
          <li>This line might help: <code>&lt;input type="range" min="0" max="100" bind:value=&lbrace;temp&rbrace;&gt;</code></li>
          <li><em>There's an exemplar below - try to avoid looking at it unless you get really stuck.</em></li>
          <li>Test your app in your browser.</li>
          <li>Commit your code with an appropriate message.</li>
        </ol>
        <h2>Sandbox</h2>
        <p>Feel free to play around with the example below to see how the web app reacts to your changes in a consequence-free
          environment.</p>
        `,
        code: `https://svelte.dev/repl/af03302d8c194cf78867f846ac0b1d19`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `The Box`,
        slug: "the-box",
        icon: ``,
        subtitle: `A lockable box to keep your things safe!`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: `https://www.youtube.com/embed/NnmLfeeVfrY`,
        description: ``,
        code: `https://svelte.dev/repl/c9050bf469d444878fad3ca0b87742ae`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Hipster Ipsum`,
        slug: "hipster-ipsum",
        icon: ``,
        subtitle: `Lorem ipsum is so 1914.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/bc902fdde9f144cba86c468de3a46b50`,
        skills: [`Components`]
    },
    {
        title: `To-do List`,
        slug: "to-do-list",
        icon: ``,
        subtitle: `A responsive list of things to do.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/3adf801139d84132bcbdbbdffa89e4d5`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Searcher v1`,
        slug: "password-searcher-v1",
        icon: ``,
        subtitle: `How fast does it find your password?`,
        progressValue: 1,
        progressMax: 6,
        prev: null,
        next: `password-searcher-v2`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/196fbd965af0442d8e92c568eb155f00`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Searcher v2`,
        slug: "password-searcher-v2",
        icon: ``,
        subtitle: `How fast does it find your password?`,
        progressValue: 2,
        progressMax: 6,
        prev: `password-searcher-v1`,
        next: `password-searcher-v3`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/f83b9c068b8d42cd9550f5b82defb8cc`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Searcher v3`,
        slug: "password-searcher-v3",
        icon: ``,
        subtitle: `How fast does it find your password?`,
        progressValue: 3,
        progressMax: 6,
        prev: `password-searcher-v2`,
        next: `password-searcher-v4`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/9303d3300b50462e83ef45eecc190b09`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Searcher v4`,
        slug: "password-searcher-v4",
        icon: ``,
        subtitle: `How fast does it find your password?`,
        progressValue: 4,
        progressMax: 6,
        prev: `password-searcher-v3`,
        next: `password-searcher-v5`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/3c273d0e459b41f288e0b375b0548f11`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Searcher v5`,
        slug: "password-searcher-v5",
        icon: ``,
        subtitle: `How fast does it find your password?`,
        progressValue: 5,
        progressMax: 6,
        prev: `password-searcher-v4`,
        next: `password-searcher-v6`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/f11532a4bca44e1b98eb9b53969fa696`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Searcher v6`,
        slug: "password-searcher-v6",
        icon: ``,
        subtitle: `How fast does it find your password?`,
        progressValue: 6,
        progressMax: 6,
        prev: `password-searcher-v5`,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/07c1672bb7fc48b69a957e3f22d15748`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Cipher v1`,
        slug: `cipher-v1`,
        icon: ``,
        subtitle: `Sending secret messages.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `cipher-v2`,
        video: `https://www.youtube.com/embed/N6pURvH92sQ`,
        description: `<h2>Brief</h2>

        <p>Write an app that encrypts a sentence into numbers using the character codes of the letters, separated by pipes (|).</p>
        
        <p>The user should be able to write any sentence they like into an input, click a button, and be given the encrypted output, e.g.</p>
        
        <blockquote>this is a secret message</blockquote>
        
        <p>encrypts to...</p>
        
        <blockquote>121|111|117|32|97|99|116|117|97|108|108|121|32|99|104|101|99|107|101|100|33|</blockquote>
        
        <p>Here's some references to help you write this app:</p>
        
        <ul>
          <li><a href="https://www.w3schools.com/js/js_loop_for.asp"><code>for</code> loops</a></li>
          <li><a href="https://www.w3schools.com/jsref/jsref_charCodeAt.asp"><code>charCodeAt( )</code></a></li>
          <li style="list-style-type: none;">---</li>
          <li><a href="https://svelte.dev/docs#Component_format">Svelte format</a></li>
          <li><a href="https://svelte.dev/docs#Text_expressions">Output</a></li>
          <li><a href="https://svelte.dev/docs#bind_element_property">Input</a></li>
          <li><a href="https://svelte.dev/docs#on_element_event">Buttons</a></li>
        </ul>
        
        <p><em>You can use the Svelte example below if you need help to get started. It contains all of the code for this program. If you can, try to complete the program without looking at it.</em></p>`,
        code: `https://svelte.dev/repl/04a779f9a0bd45a096ab9ce45a2f050d`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Cipher v2`,
        slug: `cipher-v2`,
        icon: ``,
        subtitle: `Sending secret messages.`,
        progressValue: 2,
        progressMax: 4,
        prev: `cipher-v1`,
        next: `cipher-v3`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/0826f86a2d37486c830b8cac04e95f4b`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    },
    {
        title: `Cipher v3`,
        slug: `cipher-v3`,
        icon: ``,
        subtitle: `Sending secret messages.`,
        progressValue: 3,
        progressMax: 4,
        prev: `cipher-v2`,
        next: `cipher-v4`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/15ae4a7fc437476cb0f6ed9baa0bc292`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    },
    {
        title: `Cipher v4`,
        slug: `cipher-v4`,
        icon: ``,
        subtitle: `Sending secret messages.`,
        progressValue: 4,
        progressMax: 4,
        prev: `cipher-v3`,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/19e28f0770f64c0cb93fce9ee5d53c4b`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    }
];

export default projects;
