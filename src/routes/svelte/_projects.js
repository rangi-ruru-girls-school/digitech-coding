const projects = [
    {
        title: `Hello World`,
        slug: "hello-world",
        subtitle: `The simplest program. All coders start here.`,
        description: `
            <p>This project introduces how Svelte can help improve how your HTML and JavaScript interact.</p>
            <p>When you write Svelte, you write your code into a <code>.svelte</code> file, which contains JavaScript, CSS, and HTML all in one place.</p>
            <p>Svelt's main advantage that we'll be taking advantage of is that it makes it very easy to get information to and from the page.</p>
            <p>Take a look at the jQuery version of Hello World:</p>
            <h3>HTML</h3>
            <pre><code>&lt;h3&gt;Hello &lt;span id="txtName"&gt;&lt;/span&gt;!&lt;/h3&gt;</code></pre>
            <h3>JavaScript (jQuery)</h3>
            <pre><code>$('#txtName').text('world')</pre></code>
            <p>Now compare that with the Svelte version and see how much less code it takes and how natural it feels to follow it.</p>
            <h3>Svelte</h3>
            <pre><code>&lt;script&gt;
    let name = 'world'
&lt;/script&gt;
            
&lt;h3&gt;Hello {name}!&lt;/h3&gt;</pre></code>
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
            <p>Feel free to play around with the example below to see how the web app reacts to your changes in a consequence-free environment.</p>
        `,
        src: `https://svelte.dev/repl/hello-world`,
        skills: [`Output`, `Variables`]
    },
    {
        title: `The Repeater`,
        slug: "the-repeater",
        subtitle: `Repeats whatever you put in.`,
        description: `
            <p>This project introduces how you can get information from the web page (and the user) to use in your JavaScript.</p>
            <p>As with the previous project, you'll use some Svelte-specific code in curly braces <code>{}</code>.</p>
            <p>Specifically, we'll use the <a href="https://svelte.dev/docs#bind_element_property"><code>bind:value={variableName}</code></a> to connect the input in the HTML to a variable in the JavaScript.</p>
            <p>First, let's see how it's done using jQuery:</p>
            <h3>HTML</h3>
            <pre><code>&lt;label&gt;
    Write something:
    &lt;input id="txtInput" type="text"&gt;
&lt;/label&gt;

&lt;button id="btnRepeat"&gt;Repeat&lt;/button&gt;

&lt;p id="txtRepeatOutput"&gt;&lt;/p&gt;</code></pre>
            <h3>JavaScript (jQuery)</h3>
            <pre><code>$('#btnRepeat').click( () => {
    let text = $('#txtInput').val()
    $('#txtRepeatOutput').text('You wrote: &#0036{text}')
})</code></pre>
            <p>.. and now the Svelte version:</p>
            <h3>Svelte</h3>
            <pre><code>&lt;script&gt;
    let text = ""
&lt;/script&gt;

&lt;label&gt;
    Write something:
    &lt;input bind:value={text}&gt;
&lt;/label&gt;

&lt;p&gt;You wrote: {text}&lt;/p&gt;</code></pre>
            <h2>Project</h2>
            <ol>
                <li>Look over the code below, think about how it runs, and compare the output with the source code.</li>
                <li>Create a new Svelte project from the template.</li>
                <li>In the terminal in VS Code, type <code>npm install</code> and then <code>npm run dev</code>.</li>
                <li>Check that your server is running by going to <code>https://localhost:3000</code>.</li>
                <li>Write an app that will add the GST for any price that's typed in.</li>
                <li>This line might help: <code>&lt;p&gt;Total Cost: {price * 1.15}&lt;/p&gt;</code></li>
                <li>Test your app in your browser.</li>
                <li>Commit your code with an appropriate message.</li>
            </ol>
            <h2>Sandbox</h2>
            <p>Feel free to play around with the example below to see how the web app reacts to your changes in a consequence-free environment.</p>
        `,
        src: `https://svelte.dev/repl/ef2531123d084f918b05b44f82927dac`,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `Hot Chocolate`,
        slug: "hot-chocolate",
        subtitle: `Is the hot chocolate the right temperature?`,
        description: `
            <p>This project introduces Svelte-specific if statements <em>inside</em> your HTML.</p>
            <p>You can still write normal if statements inside the <code>&lt;script&gt;&lt;/script&gt;</code> tags, but you won't have to as often.</p>
            <p>As with the previous projects, you'll use some Svelte-specific code in curly braces <code>{}</code>.</p>
            <p>Specifically, we'll use the <a style="color: inherit;" href="https://svelte.dev/docs#if"><code>{#if}</code>, <code>{:else if}</code>, <code>{:else}</code>, and <code>{/if}</code></a> to decide what HTML to have on the page.</p>
            <p>Our demo is going to be a simple app that tells you if the variable is more, less, or equal to 2.</p>
            <p>First, let's see how it's done using jQuery:</p>
            <h3>HTML</h3>
            <pre><code>&lt;p id="txtResult"&gt;&lt;/p&gt;</code></pre>
            <h3>JavaScript (jQuery)</h3>
            <pre><code>const number = 1
if (2 &gt; number) {
    $('#txtResult').text('Two is higher than &#0036{number}.')
} else if (2 &lt; number) {
    $('#txtResult').text('Two is less than than &#0036{number}.')
} else {
    $('#txtResult').text('Two is equal to &#0036{number}')
}</code></pre>
            <p>... and Svelte...</p>
            <h3>Svelte</h3>
            <pre><code>&lt;script&gt;
    const num = 1
&lt;/script&gt;

{#if 2 &gt; num}
    &lt;p&gt;Two is higher than {num}.&lt;/p&gt;
{:else if 2 &lt; num}
    &lt;p&gt;Two is less than {num}.&lt;/p&gt;
{:else}
    &lt;p&gt;Two is equal to {num}.&lt;/p&gt;
{/if}</code></pre>
            <h2>Project</h2>
            <ol>
                <li>Look over the code below, think about how it runs, and compare the output with the source code.</li>
                <li>Create a new Svelte project from the template.</li>
                <li>In the terminal in VS Code, type <code>npm install</code> and then <code>npm run dev</code>.</li>
                <li>Check that your server is running by going to <code>https://localhost:3000</code>.</li>
                <li>Write an app that will take in a hot chocolate's temperature and tell you if it's tepid, good, or too hot.</li>
                <li>This line might help: <code>&lt;input type="range" min="0" max="100" bind:value={temp}&gt;</code></li>
                <li><em>There's an exemplar below - try to avoid looking at it unless you get really stuck.</em></li>
                <li>Test your app in your browser.</li>
                <li>Commit your code with an appropriate message.</li>
            </ol>
            <h2>Sandbox</h2>
            <p>Feel free to play around with the example below to see how the web app reacts to your changes in a consequence-free environment.</p>
        `,
        src: `https://svelte.dev/repl/af03302d8c194cf78867f846ac0b1d19`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `The Box`,
        slug: "the-box",
        subtitle: `A lockable boc to keep your things safe!`,
        description: ``,
        src: `https://svelte.dev/repl/c9050bf469d444878fad3ca0b87742ae`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Hipster Ipsum`,
        slug: "hipster-ipsum",
        subtitle: `Lorem ipsum is so 1914.`,
        description: ``,
        src: `https://svelte.dev/repl/bc902fdde9f144cba86c468de3a46b50`,
        skills: [`Components`]
    },
    {
        title: `To-do List`,
        slug: "to-do-list",
        subtitle: `A responsive list of things to do.`,
        description: ``,
        src: `https://svelte.dev/repl/3adf801139d84132bcbdbbdffa89e4d5`,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
    }
];

export default projects;
