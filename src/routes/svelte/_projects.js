const projects = [
    {
        title: `Hello World`,
        slug: "hello-world",
        subtitle: `The simplest program. All coders start here.`,
        description: `
            <p>This project introduces how Svelte can help improve how your HTML and JavaScript interact.</p>
            <p>When you write Svelte, you write your code into a <code>.svelte</code> file, which contains JavaScript, CSS, and HTML all in one place.</p>
            <p>Svelt's main advantage that we'll be taking advantage of is that it makes it very easy to get information to and from the page.</p>
            <p>Take a look at the jQuery version of Hello World:
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
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `The Repeater`,
        slug: "the-repeater",
        subtitle: `Repeats whatever you put in.`,
        description: ``,
        src: `https://svelte.dev/repl/ef2531123d084f918b05b44f82927dac`,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `Hot Chocolate`,
        slug: "hot-chocolate",
        subtitle: `Is the hot chocolate the right temperature?`,
        description: ``,
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
