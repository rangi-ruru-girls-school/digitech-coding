const projects = [
    {
        title: `Hello World`,
        slug: "hello-world",
        icon: `fas fa-globe`,
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
        icon: `far fa-comments`,
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
        icon: `fas fa-mug-hot`,
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
        icon: `fas fa-box-open`,
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
        icon: `fas fa-puzzle-piece`,
        subtitle: `Lorem ipsum is so 1914.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/bc902fdde9f144cba86c468de3a46b50`,
        skills: [`Components`]
    }
];

export default projects;
