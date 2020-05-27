const projects = [
    {
        title: `'ello 'ello 'ello`,
        slug: `ello-ello-ello`,
        icon: `fas fa-hard-hat`,
        subtitle: `The usual greeting from a stereotypical British police officer.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `counting`,
        video: `https://www.youtube.com/embed/x2erl5w9gww`,
        description: `<h2>Brief</h2>
        <blockquote>Write a program that outputs "'ello" a set number of times using a <code>while</code> loop.</blockquote>

        <p>Here are some links to resources for this project.</p>
        <ul>
          <li>
            <a href="https://javascript.info/while-for#the-while-loop">
                <code>while</code> loops
            </a>
          </li>
          <li>
            <a href="https://javascript.info/operators#modify-in-place">
                +=
            </a>
          </li>
        </ul>
        
        <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
        
        <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
        <p>If you can, try to complete the project without looking at it.</em></p>`,
        code: `OJyOwPG`,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
    },
    {
        title: `Counting`,
        slug: `counting`,
        icon: `fas fa-sort-numeric-down`,
        subtitle: `Count up to a certain number.`,
        progressValue: 2,
        progressMax: 4,
        prev: `ello-ello-ello`,
        next: `factorial`,
        video: `https://www.youtube.com/embed/YX0r8CR2ad4`,
        description: `<h2>Brief</h2>
        <blockquote>Write a program that outputs all the numbers up to a number input by the user. You can choose whether to start at zero or one.</blockquote>

        <p>Here are some links to resources for this project.</p>
        <ul>
          <li>
            <a href="https://javascript.info/while-for#the-while-loop">
                <code>while</code> loops
            </a>
          </li>
          <li>
            <a href="https://javascript.info/operators#modify-in-place">
                -=
            </a>
          </li>
        </ul>
        
        <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
        
        <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
        <p>If you can, try to complete the project without looking at it.</em></p>`,
        code: `MWWqvmZ`,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
    },
    {
        title: `Factorial`,
        slug: `factorial`,
        icon: `fas fa-exclamation`,
        subtitle: `Multiply the all the numbers together up to a given number.`,
        progressValue: 3,
        progressMax: 4,
        prev: `counting`,
        next: `hailstone-numbers`,
        video: ``,
        description: `<h2>Brief</h2>
        <blockquote>Write a program that calculates the factorial of a number input by the user, e.g. 5! = 120.</blockquote>

        <p>Here are some links to resources for this project.</p>
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Factorial">
                Factorial on Wikipedia
            </a>
          </li>
          <li>
            <a href="https://duckduckgo.com/?q=5!&ia=calculator">
                Factorial calculator on DuckDuckGo
            </a>
          </li>
          <li>
            <a href="https://javascript.info/while-for#the-while-loop">
                <code>while</code> loops
            </a>
          </li>
          <li>
            <a href="https://javascript.info/operators#modify-in-place">
                Modify in place
            </a>
          </li>
        </ul>
        
        <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
        
        <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
        <p>If you can, try to complete the project without looking at it.</em></p>`,
        code: `ZEEMJvZ`,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
    },
    {
        title: `Hailstone Numbers`,
        slug: `hailstone-numbers`,
        icon: `fas fa-chart-bar`,
        subtitle: `A classic number series.`,
        progressValue: 4,
        progressMax: 4,
        prev: `factorial`,
        next: null,
        video: ``,
        description: `<p>This project is a chance for you to practice the skills you learnt in the previous three projects.</p>

        You'll need to use all of the skills to write the code. Here's some references to help:
        <ul>
          <li>
            <a href="https://en.wikipedia.org/wiki/Factorial">
                Factorial on Wikipedia
            </a>
          </li>
          <li>
            <a href="https://duckduckgo.com/?q=5!&ia=calculator">
                Factorial calculator on DuckDuckGo
            </a>
          </li>
          <li>
            <a href="https://javascript.info/while-for#the-while-loop">
                <code>while</code> loops
            </a>
          </li>
          <li>
            <a href="https://javascript.info/operators#modify-in-place">
                Modify in place
            </a>
          </li>
        </ul>
        
        <h2>Revision</h2>
        <p>If you'd like to revise then you can do <a href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=2uSr4UrrGkOh5f81ZvbCeMB7Bm3FAhZHrr7QBRekTu1UMVNYQktNRFc4Q1A0OEVSTVRGNEpJS0FEOC4u">this revision quiz</a> to test your knowledge of input, output, if statements, and loops.</p>

        <h2>Brief</h2>
        <blockquote>Write a program that calculates the hailstone sequence for a number that the user inputs. The hailstone algorithm takes a number and continues one of these two operations until the number is 1:
        <ul>
            <li>If the number is even, divide it by two.</li>
            <li>If the number is odd, times it by three and add one.</li>
        </ul>
        <p>For example, if the user puts in <code>5</code> then your program should ouput:</p>
        <code>5, 16, 8, 4, 2, 1</code>
        </blockquote>
        
        <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
        
        <p><em>You can use the JavaScript below if you need help to get started. It contains comments explaining each step of this program.</p>
        <p>If you can, try to complete the program without looking at it.</em></p>`,
        code: `mdezGRO`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Square Series`,
        slug: `square-series`,
        icon: `fas fa-superscript`,
        subtitle: `How fast does the square increase? Answer: fast.`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>
            <p>Write a program that calculates the Square Series to either 10, 50, or 100 values.</p>
          
            <p>The options of showing 10, 50, or 100 must be radio buttons.</p>
        
            <p>For example, if the user selects <code>10</code> then your program should ouput:</p>
          
            <code>0, 1, 4, 9, 16, 25, 36, 49, 64, 81</code>
          </blockquote>
          
          <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Fibonacci Sequence`,
        slug: `fibonacci`,
        icon: `fas fa-signal`,
        subtitle: `Everyone's favourite number sequence, but how does it get off zero?`,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>
            <p>Write a program that calculates the Fibonacci Sequence up to a maximum number defined by the user.</p>
          
            <p>For example, if the user enters <code>25</code> then your program should ouput:</p>
        
            <code>0, 0, 1, 2, 3, 5, 8, 13, 21</code>
          </blockquote>
          
          <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
    }
];

export default projects;