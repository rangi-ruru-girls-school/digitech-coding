const projects = [
    {
        title: `Todo List v1`,
        slug: 'v1',
        icon: `v1`,
        subtitle: `Adding to the list.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `v2`,
        video: null,
        description: `
        <h2>Version 1 Brief</h2>
        <blockquote>Write an app that lets the user add an item to a todo list.</blockquote>
        
        <p>In this version you'll learn the following skills:</p>
        <ul>
            <li>Create an array</li>
            <li>Create a function</li>
            <li>Add an item to an array</li>
            <li>Link a button to a function</li>
            <li>Output an array with a loop</li>
            <li>Link an input to an array item</li>
        </ul>

        <p>If you need to brush up on arrays, read the <strong>declaration</strong> section of <a href="https://javascript.info/array">this guide</a> before starting.</p>
        
        <h3>Script</h3>
<pre><code>&lt;script&gt;
    let tasks = []
    
    function addTask() {
    tasks = [...tasks, '']
    }
&lt;/script&gt;</code></pre>
        
        <p><code>let tasks = []</code> creates an array. This will be where all the tasks are stored.</p>
        <p>The <code>addTask</code> function overwrites the existing tasks array with a new array that has all the previous tasks, plus one blank one. The <code>[ ]</code> creates a new array, then <code>...tasks</code> gets all the previous tasks, and <code>' '</code> adds a blank one at the end.</p>
        
        <h3>Style</h3>
<pre><code>&lt;style&gt;
    .task {
    display: block;
    }
&lt;/style&gt;</code></pre>
        
        <p>The <code>.task</code> class is the only CSS we will use in this whole project. It simply puts each task on a new line.</p>
        
        <h3>Markup</h3>
<pre><code>&lt;button on:click={addTask}>📝 Add&lt;/button&gt;

{#each tasks as task, index}
    &lt;div class="task"&gt;
    &lt;input bind:value={tasks[index]}&gt;
    &lt;/div&gt;
{/each}</code></pre>
        
        <p>The <strong>Add</strong> button is a regular HTML button that uses Svelte's <code>on:click</code> to run the <code>addTask</code> function when it's clicked.</p>
        <p>The last section is a Svelte <code>each</code> loop that goes through all of the tasks in the <code>tasks</code> array. Each <code>input</code> is linked to a task with Svelte's <code>bind:value</code>.</p>
        <p>Whenever an input gets changed by the user, that task in the array will get updated in real time.</p>
        <p>The <code>div</code> is just there so that we can use the <code>.task</code> CSS class to put each task on its own line.</p>
        
        <hr>
        
        <em><p>You can use the Svelte code below if you need help to get started. It contains everything you need for this program.</p>
        <p>If you can, try to complete the project without looking at it.</p></em>
        `,
        code: `https://svelte.dev/repl/7432d9464f404801bfc0d2facf19f403`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Todo List v2`,
        slug: 'v2',
        icon: `v2`,
        subtitle: `Deleting from the list.`,
        progressValue: 2,
        progressMax: 4,
        prev: `v1`,
        next: `v3`,
        video: null,
        description: `
        <h2>Version 2 Brief</h2>
        <blockquote>Add a button to each task that lets the user remove it.</blockquote>
        
        <p>In this version you'll learn the following skills:</p>
        <ul>
            <li>Create a function that requires a parameter</li>
            <li>Remove an item from an array</li>
            <li>Link a button to a function and send it a parameter</li>
        </ul>
        
        <p>If you need to brush up on function parameters, read the <strong>parameter</strong> section of <a href="https://javascript.info/function-basics#parameters">this guide</a> before starting.</p>
        
        <h3>Script</h3>
<pre><code>function removeTask(index) {
    tasks = [
        ...tasks.slice(0, index),
        ...tasks.slice(index + 1)
    ]
}</code></pre>
        
        <p>The <code>removeTask</code> function has <code>index</code> in brackets after it, which means it is expecting to be told which item to remove. <code>index</code> will be a number that represents an item in the <code>tasks</code> array, for example if <code>index</code> is <code>3</code> then the item to be removed is <code>tasks[3]</code> (the fourth item).</p>
        <p>Similarly to <code>addTask</code>, this function overwrites the previous array with a new one that is missing the item to be removed. It does this by slicing the old <code>tasks</code> array into two pieces: one with all the items up to <code>index</code>, and one with all the items after <code>index</code>.</p>
        <p>You can read more about <code>slice</code> on <a href="https://javascript.info/array-methods#slice">this guide</a>.</p>
        
        <h3>Markup</h3>
<pre><code>{#each tasks as task, index}
    &lt;div class="task"&gt;
    &lt;input bind:value={tasks[index]}&gt;
    &lt;button on:click={() => { removeTask(index) }}&gt;🗑&lt;/button&gt;
    &lt;/div&gt;
{/each}</code></pre>
        
        <p>Each task now comes with a button to remove it. The button is bound to the <code>removeTask</code> with the same <code>on:click</code> feature used in version 1 for the <strong>Add</strong> button.</p>
        <p>The difference is that this button needs to tell the function which item to remove. To do this, the button has to include the <code>index</code> when it calls the function. It would be good to be able to simply write <code>on:click={removeTask(index)}</code> but unfortunately Svelte is not capable of doing this. Instead, we have to wrap the <code>removeTask(index)</code> in some more brackets, namely <code>() => { removeTask(index) }</code>.</p>
        <p>Luckily, when you want to send a function some information from a button click it's always the same as this.</p>
        
        <hr>
        
        <em><p>You can use the Svelte code below if you need help to get started. It contains everything you need for this program.</p>
        <p>If you can, try to complete the project without looking at it.</p></em>
        `,
        code: `https://svelte.dev/repl/3b527d288fcc4e06b8d5f7d4f137f3a1`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Todo List v3`,
        slug: 'v3',
        icon: `v3`,
        subtitle: `Saving to local storage.`,
        progressValue: 3,
        progressMax: 4,
        prev: `v2`,
        next: `v4`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/5cdb7e02c52e4b71afb4c8d31d4a7bef`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Todo List v4`,
        slug: 'v4',
        icon: `v4`,
        subtitle: `Retrieving from local storage.`,
        progressValue: 4,
        progressMax: 4,
        prev: `v3`,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/dedf511ad0894ef9aaa8a1a407905483`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
];

export default projects;
