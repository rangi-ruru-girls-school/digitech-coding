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
        code: `eYYdjVZ`,
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
        code: `XWWjByM`,
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
        code: `BaazXBy`,
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
        video: `https://demo-madlibs.netlify.app/`,
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
        code: `mdeBPNg`,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `Remaining Years`,
        slug: `remaining-years`,
        icon: `fas fa-book-dead`,
        subtitle: `This fortune telling program will tell you how long you have left.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
            <h2>Brief</h2>
            <blockquote>
                <p>Write a program that tells the user how long they have left to live based on their age. You should use the average life expectancy to do this.</p>
                
                <p>For example, the user enters <code>15</code> then your program should ouput:</p>

                <code>You have 65 years left to live.</code>
            </blockquote>
            
            <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `GST Calculator`,
        slug: `gst-calculator`,
        icon: `fas fa-file-invoice-dollar`,
        subtitle: `I guess it'll help when you do your tax return?`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
            <h2>Brief</h2>
            <blockquote>
                <p>Write a program that allows the user to either add or subtract GST for a given price.</p>

                <p>For example, the user enters <code>8.50</code> and selects <code>Remove GST</code> then your program should ouput:</p>
                
                <code>$8.50 minus GST is $7.39</code>
            </blockquote>
            
            <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    }
];

export default projects;