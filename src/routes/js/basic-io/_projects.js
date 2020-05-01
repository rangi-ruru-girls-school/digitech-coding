const projects = [
    {
        title: `Hello World`,
        slug: `hello-world`,
        icon: `fas fa-globe`,
        subtitle: `The simplest program. All coders start here.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `say-what`,
        video: `https://www.youtube.com/embed/Foy-1KkHNDE`,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/eYYdjVZ?height=309&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Output`]
    },
    {
        title: `Say What`,
        slug: `say-what`,
        icon: `far fa-question-circle`,
        subtitle: `What?`,
        progressValue: 2,
        progressMax: 4,
        prev: `hello-world`,
        next: `the-repeater`,
        video: `https://www.youtube.com/embed/Dwj3BgYpEMU`,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/XWWjByM?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`]
    },
    {
        title: `The Repeater`,
        slug: `the-repeater`,
        icon: `far fa-comments`,
        subtitle: `Repeats whatever you put in.`,
        progressValue: 3,
        progressMax: 4,
        prev: `say-what`,
        next: `mad-libs`,
        video: `https://www.youtube.com/embed/YP3y-uYUpbU`,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/BaazXBy?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `Mad Libs`,
        slug: `mad-libs`,
        icon: `far fa-newspaper`,
        subtitle: `The classic party game - now in code!`,
        progressValue: 4,
        progressMax: 4,
        prev: `the-repeater`,
        next: null,
        video: null,
        description: `<p>This project is a chance for you to practice the skills you learnt in the previous three projects.</p>

        You'll need to use all of the skills to write the code. Here's some references to help:
        <ul>
          <li><a href="https://www.w3schools.com/js/js_variables.asp">variables</a></li>
          <li><a href="https://www.w3schools.com/jquery/event_click.asp">.click( )</a></li>
          <li><a href="https://www.w3schools.com/jquery/html_val.asp">.val( )</a></li>
          <li><a href="https://www.w3schools.com/jquery/html_text.asp">.text( )</a></li>
        </ul>
        
        <h2>Brief</h2>
        <p>Write a program that asks the user for some words and then use those words to fill in the blanks in a sentence.</p>
        
        <p>Specifically: ask for an exclamation, an adverb, a noun, and an adjective to put into the following sentence:</p>
        <blockquote>"___________! he said ______ as he jumped into his convertible ____ and drove off with his _________ wife."</blockquote>
        
        <p>For example, the user might give you "ouch", "loudly", "car", and "lovely". This results in:</p>
        <blockquote>"ouch! he said loudly as he jumped into his convertible car and drove off with his lovely wife."</blockquote>
        
        <p>Use the code below to get you started. Copy and paste the HTML and JavaScript into your own files. You do not need to write any more HTML to complete this project.</p>`,
        code: `https://codepen.io/MrHullen/embed/mdeBPNg?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`]
    }
];

export default projects;