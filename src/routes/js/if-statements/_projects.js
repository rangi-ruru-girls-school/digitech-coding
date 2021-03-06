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
        code: `PoPJbYa`,
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
        code: `ZEEpMEe`,
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
        code: `NWWRBZW`,
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
        
        <h2>Revision</h2>
        <p>If you'd like to play a revision game with a group of friends, you can run <a href="https://create.kahoot.it/share/javascript/081c274e-d54f-4c25-a830-1a7046c95cb7">this Kahoot</a>.</p>

        <p>You can also do <a href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=2uSr4UrrGkOh5f81ZvbCeMB7Bm3FAhZHrr7QBRekTu1UMDIyVkQzQU5EWTUzUk9WMVc0SFA3SDJZSC4u">this revision quiz</a> to test your knowledge of input, output, and if statements.</p>

        <h2>Brief</h2>
        <p>Write a program that acts as a calculator. It should at least be able to add, subtract, multiply, and divide. You can extend the program to any further operations you wish.</p>
        
        <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
        
        <p><em>You can use the JavaScript below if you need help to get started. It contains comments explaining each step of this program. If you can, try to complete the program without looking at it.</em></p>`,
        code: `dyypqmL`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Angle Converter`,
        slug: `angle-converter`,
        icon: `fas fa-drafting-compass`,
        subtitle: `Stop being obtuse, you know I'm right.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
            <h2>Brief</h2>
            <blockquote>
                <p>Write a program that converts from degrees to radians and vice versa, and tells the user what type of angle it is.</p>

                <p>For example, the user enters <code>90</code> and selects <code>Degrees to Radians</code> then your program should ouput:</p>

                <code>90 degrees is 0.0175 radians and is a right angle.</code>
            </blockquote>
            
            <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Metric and Imperial Converter`,
        slug: `metric-imperial`,
        icon: `fas fa-balance-scale-right`,
        subtitle: `Who even uses Imperial?`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
            <h2>Brief</h2>
            <blockquote>
                <p>Write a program that converts to and from kilograms and pounds, and inches and centimeters.</p>

                <p>For example, the user enters <code>10</code> and selects <code>Centimeters to Inches</code> then your program should ouput:</p>
                
                <code>10 centimeters is 3.94 inches</code>
            </blockquote>
            
            <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    }
];

export default projects;