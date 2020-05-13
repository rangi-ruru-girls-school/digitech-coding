const projects = [
    {
        title: `Cipher v1`,
        slug: `v1`,
        icon: `v1`,
        subtitle: `The encryption function.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `v2`,
        video: `https://www.youtube.com/embed/N6pURvH92sQ`,
        description: `<h2>Brief</h2>

        <p>Write an app that encrypts a sentence into numbers using the character codes of the letters, separated by pipes (|).</p>
        
        <p>The user should be able to write any sentence they like into an input, click a button, and be given the encrypted output, e.g.</p>
        
        <blockquote>this is a secret message</blockquote>
        
        <p>encrypts to...</p>
        
        <blockquote style="word-break:break-all;">121|111|117|32|97|99|116|117|97|108|108|121|32|99|104|101|99|107|101|100|33|</blockquote>
        
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
        slug: `v2`,
        icon: `v2`,
        subtitle: `The decryption function.`,
        progressValue: 2,
        progressMax: 4,
        prev: `v1`,
        next: `v3`,
        video: `https://www.youtube.com/embed/dg4MKeKord4`,
        description: `<h2>Brief</h2>

        <p>Add a button that decrypts a string of pipe-separated character codes back into its original plaintext.</p>
        
        <p>The user should be able to input any series of pipe-separated character codes, click a button, and be given the decrypted output, e.g.</p>
        
        <blockquote style="word-break:break-all;">116|104|97|116|39|115|32|110|111|116|32|116|104|101|32|109|101|115|115|97|103|101|</blockquote>
        
        <p>decrypts to...</p>
        
        <blockquote>this is a secret message</blockquote>
        
        <p>Here's some references to help you write this function:</p>
        
        <ul>
          <li><a href="https://www.w3schools.com/js/js_loop_for.asp"><code>for</code> loops</a></li>
          <li><a href="https://www.w3schools.com/jsref/jsref_fromcharcode.asp"><code>fromCharCode( )</code></a></li>
          <li>---</li>
          <li><a href="https://svelte.dev/docs#Component_format">Svelte format</a></li>
          <li><a href="https://svelte.dev/docs#Text_expressions">Output</a></li>
          <li><a href="https://svelte.dev/docs#bind_element_property">Input</a></li>
          <li><a href="https://svelte.dev/docs#on_element_event">Buttons</a></li>
        </ul>
        
        <p><em>You can use the Svelte example below if you need help to get started. It contains all of the code for this program. If you can, try to complete the program without looking at it.</em></p>`,
        code: `https://svelte.dev/repl/0826f86a2d37486c830b8cac04e95f4b`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    },
    {
        title: `Cipher v3`,
        slug: `v3`,
        icon: `v3`,
        subtitle: `Adding a shift to the cipher.`,
        progressValue: 3,
        progressMax: 4,
        prev: `v2`,
        next: `v4`,
        video: `https://www.youtube.com/embed/roedKHbZ1qc`,
        description: `<h2>Brief</h2>

        <p>Make the encryption stronger and decryption more difficult by adding a shift that changes the character codes before saving them.</p>
        
        <p>The user should be able to write any sentence they like into an input, click a button, and be given the encrypted output, or input any series of pipe-separated character codes, click a button, and be given the decrypted output.</p>
        
        <p>Previously, the letter <code>t</code> might encrypt to <code>116</code>. In this version, if you used a <code>shift</code> of <code>3</code> then <code>t</code> would become <code>119</code>.</p>
        
        <p><em>You can use the Svelte example below if you need help to get started. It contains all of the code for this program. If you can, try to complete the program without looking at it.</em></p>`,
        code: `https://svelte.dev/repl/15ae4a7fc437476cb0f6ed9baa0bc292`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    },
    {
        title: `Cipher v4`,
        slug: `v4`,
        icon: `v4`,
        subtitle: `The analysis function.`,
        progressValue: 4,
        progressMax: 4,
        prev: `v3`,
        next: null,
        video: `https://www.youtube.com/embed/8KBJMWYUEFI`,
        description: `<h2>Brief</h2>

        <p>Add a button that analyses a string of pipe-separated numbers and outputs how many times each number appears in the string.</p>
        
        <p>The user should be able to input any series of pipe-separated number, click a button, and be given the frequency of each number, e.g.</p>
        
        <blockquote style="word-break:break-all;">118|114|35|112|100|113|124|35|118|104|102|117|104|119|35|112|104|118|118|100|106|104|118|36|35|122|107|114|35|110|113|104|122|35|104|113|102|117|124|115|119|108|114|113|35|122|114|120|111|103|35|101|104|35|118|114|35|104|123|102|108|119|108|113|106|36|</blockquote>
        
        <p>outputs...</p>
        
        <blockquote>100 appears 2 times.<br>
          101 appears 1 times.<br>
          102 appears 3 times.<br>
          103 appears 1 times.<br>
          104 appears 8 times.<br>
          106 appears 2 times.<br>
          107 appears 1 times.<br>
          108 appears 3 times.<br>
          110 appears 1 times.<br>
          111 appears 1 times.<br>
          112 appears 2 times.<br>
          113 appears 5 times.<br>
          114 appears 5 times.<br>
          115 appears 1 times.<br>
          117 appears 2 times.<br>
          118 appears 6 times.<br>
          119 appears 3 times.<br>
          120 appears 1 times.<br>
          122 appears 3 times.<br>
          123 appears 1 times.<br>
          124 appears 2 times.<br>
          35 appears 10 times.<br>
          36 appears 2 times.</blockquote>
        
        <p>Here's some references to help you write this function:</p>
        
        <ul>
          <li><a href="https://www.w3schools.com/js/js_loop_for.asp"><code>for</code> loops</a></li>
          <li><a href="https://www.w3schools.com/jsref/jsref_sort.asp"><code>sort( )</code></a></li>
          <li>---</li>
          <li><a href="https://svelte.dev/docs#Component_format">Svelte format</a></li>
          <li><a href="https://svelte.dev/docs#Text_expressions">Output</a></li>
          <li><a href="https://svelte.dev/docs#bind_element_property">Input</a></li>
          <li><a href="https://svelte.dev/docs#on_element_event">Buttons</a></li>
        </ul>

        <h2>Extension</h2>

        <p>Here's some features that you could implement to make this app even better.</p>

        <ul>
          <li>Add an input where the user can specify the shift. This will help them test different shifts when using the analysis to crack an encryption.</p>
          <li>Output the analysis in sorted order so that the most frequent numbers appear at the top. This will help the user make better guesses of what an unknown shift might be.</li>
          <li>Add to the analysis an output that suggests possible shifts. If a code is the most frequent, calculate what shifts would translate it to <code>e</code>, <code>a</code>, <code>i</code>, <code> and o</code>. The user can then try those recommended shifts to see if they correctly decrypt the ciphertext.</li>
        </ul>
        
        <p><em>You can use the Svelte example below if you need help to get started. It contains all of the code for this program. If you can, try to complete the program without looking at it.</em></p>`,
        code: `https://svelte.dev/repl/19e28f0770f64c0cb93fce9ee5d53c4b`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    }
];

export default projects;
