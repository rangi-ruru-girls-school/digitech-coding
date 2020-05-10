const projects = [
    {
        title: `True or False?`,
        slug: `true-or-false`,
        icon: `fas fa-exclamation-circle`,
        subtitle: `Outputs whether the variable is true or false.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `is-it-more-than-2`,
        video: `https://www.youtube.com/embed/89FpJQoLr4Y`,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/PoPJbYa?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Output`, `Variables`, `If Statements`]
    },
    {
        title: `Is It More Than 2?`,
        slug: `is-it-more-than-2`,
        icon: `fas fa-greater-than`,
        subtitle: `Checks if a number is more or less than 2.`,
        progressValue: 2,
        progressMax: 4,
        prev: `true-or-false`,
        next: `options`,
        video: `https://www.youtube.com/embed/CNocmbrZh7o`,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/ZEEpMEe?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Options`,
        slug: `options`,
        icon: `fas fa-spell-check`,
        subtitle: `Checks which option is selected.`,
        progressValue: 3,
        progressMax: 4,
        prev: `is-it-more-than-2`,
        next: `calculator`,
        video: `https://www.youtube.com/embed/tnmevGG87_I`,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/NWWRBZW?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Calculator`,
        slug: `calculator`,
        icon: `fas fa-calculator`,
        subtitle: `Only does the basics, but does them well.`,
        progressValue: 4,
        progressMax: 4,
        prev: `options`,
        next: null,
        video: `https://demo-calculator.netlify.app`,
        description: `<p>This project is a chance for you to practice the skills you learnt in the previous three projects.</p>

        You'll need to use all of the skills to write the code. Here's some references to help:
        <ul>
          <li><a href="https://www.w3schools.com/js/js_if_else.asp"><code>if</code> statements</a></li>
          <li><a href="https://digitech.rangiruru.school.nz/js/if-statements/options">radio buttons (project)</a></li>
          <li><a href="https://www.w3schools.com/js/js_variables.asp">variables</a></li>
          <li><a href="https://www.w3schools.com/jquery/event_click.asp">.click( )</a></li>
          <li><a href="https://www.w3schools.com/jquery/html_val.asp">.val( )</a></li>
          <li><a href="https://www.w3schools.com/jquery/html_text.asp">.text( )</a></li>
        </ul>
        
        <h2>Brief</h2>
        <p>Write a program that acts as a calculator. It should at least be able to add, subtract, multiply, and divide. You can extend the program to any further operations you wish.</p>
        
        <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
        
        <p><em>You can use the JavaScript below if you need help to get started. It contains comments explaining each step of this program. If you can, try to complete the program without looking at it.</em></p>`,
        code: `https://codepen.io/MrHullen/embed/dyypqmL?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Extra`,
        slug: ``,
        icon: ``,
        subtitle: ``,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: ``,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    }
];

export default projects;