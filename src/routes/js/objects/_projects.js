const projects = [
    {
        title: `Subject Details`,
        slug: `subject-details`,
        icon: `fas fa-users`,
        subtitle: `I need to know the details!`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `pet-register`,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>Write a program that outputs the details stored about a subject.</blockquote>

          <p>Here are some links to explanations of objects</p>
          <ul>
            <li>
              <a href="https://javascript.info/object#literals-and-properties">
                objects <code>{ }</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/js/js_objects.asp">
                objects <code>{ }</code> on W3Schools
              </a>
            </li>
          </ul>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
          <p>If you can, try to complete the project without looking at it.</em></p>
        `,
        code: `ZEEBwgP`,
        skills: [`Output`, `Variables`, `Objects`]
    },
    {
        title: `Find a Pet`,
        slug: `find-a-pet`,
        icon: `fas fa-dog`,
        subtitle: `Search for just the right one.`,
        progressValue: 2,
        progressMax: 4,
        prev: `subject-details`,
        next: `pet-register`,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>Write a program that lets the user enter a type of pet, and then outputs a list of all the pets of that type.
          <br><br>
          <em>Hint: you'll need to store a group of objects together... perhaps an array might help.</em></blockquote>

          <p>Here are some links to explanations that might help with this project:</p>
          <ul>
            <li>
              <a href="https://javascript.info/ifelse#the-if-statement">
                <code>if</code> statements on javascript.info
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/js/js_if_else.asp">
                <code>if</code> statements on W3 Schools
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array">
                arrays <code>[ ]</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array-methods#iterate-foreach">
                loop through an array: <code>forEach</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://javascript.info/object#literals-and-properties">
                objects <code>{ }</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/js/js_objects.asp">
                objects <code>{ }</code> on W3Schools
              </a>
            </li>
          </ul>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
          <p>If you can, try to complete the project without looking at it.</em></p>
        `,
        code: `RwrpaZj`,
        skills: [`Input`, `Output`, `Variables`, `Loops`, `Arrays`, `Objects`]
    },
    {
        title: `Pet Register`,
        slug: `pet-register`,
        icon: `fas fa-cat`,
        subtitle: `All the pets, and all their characteristics.`,
        progressValue: 3,
        progressMax: 4,
        prev: `find-a-pet`,
        next: `the-store`,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>Write a program that lets you add pets to a register and then outputs all the pets currently registered.</blockquote>

          <p>Here are some links that might help you build this:</p>
          <ul>
            <li>
              <a href="https://javascript.info/array#methods-pop-push-shift-unshift">
                add to an array: <code>push</code>
              </a>
            </li>
            <li>
              <a href="https://javascript.info/object#literals-and-properties">
                add to an object: <code>object.key</code>
              </a>
            </li>
          </ul>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
          <p>If you can, try to complete the project without looking at it.</em></p>
        `,
        code: `eYpjzNj`,
        skills: [`Input`, `Output`, `Variables`, `Loops`, `Arrays`, `Objects`]
    },
    {
        title: `The Store`,
        slug: `the-store`,
        icon: `fas fa-store`,
        subtitle: `First step in any online store is to display what you're selling.`,
        progressValue: 4,
        progressMax: 4,
        prev: `pet-register`,
        next: null,
        video: `https://codepen.io/MrHullen/embed/ZEQeONa?height=265&theme-id=light&default-tab=result`,
        description: `
          <p>This project is a chance for you to practice the skills you learnt in the previous three projects.</p>

          You'll need to use all of the skills to write the code. Here's some references to help:
          <ul>
            <li>
              <a href="https://javascript.info/array">
                arrays <code>[ ]</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array-methods#iterate-foreach">
                loop through an array: <code>forEach</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://javascript.info/object#literals-and-properties">
                objects <code>{ }</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/js/js_objects.asp">
                objects <code>{ }</code> on W3Schools
              </a>
            </li>
          </ul>
          
          <h2>Revision</h2>
          <p>Coming soon...</p>

          <h2>Brief</h2>
          <blockquote>First, choose a product that you're online shop is going to sell. Then, find some images of your products (square images work best). You can use <a href="https://unsplash.com/s/photos/walls?orientation=squarish">Unsplash</a> to find copyright-free images to use in your websites. Finally, write a program to output your products and their details onto your website.
          <br><br>
          <em>Doing it with JavaScript - rather than writing all the HTML by hand - makes it much easier to update your catalog with new items, or change existing ones.</em></blockquote>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains comments explaining each step of this program.</p>
          <p>If you can, try to complete the program without looking at it.</em></p>
        `,
        code: `ZEQeONa`,
        skills: [`Output`, `Variables`, `Loops`, `Arrays`, `Objects`]
    },
    {
        title: ``,
        slug: ``,
        icon: ``,
        subtitle: ``,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>
            <p>Write a program that takes a number from the user and tells them whether that number is in a predefined array and at what position.</p>

            <p>For example, if the user enters <code>3</code> and your array is <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code> then your program should ouput:</p>

            <code>3 is in the array at position 2</code>
          </blockquote>
          
          <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    },
    {
        title: ``,
        slug: ``,
        icon: ``,
        subtitle: ``,
        progressValue: null,
        progressMax: null,
        prev: null,
        next: null,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>
            <p>Write a program that checks a predefined array to see if it is in sorted order.</p>

            <p>For example, if your array is <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code> then your program should ouput:</p>

            <code>The array is sorted.</code>

            <p>Or, if your array is <code>[1, 2, 7, 5, 4, 6, 3, 8, 9]</code> then your program should ouput:</p>

            <code>The array is not sorted.</code>
          </blockquote>
          
          <p>You're here so it's assumed you can write the HTML for this project.</p>
        `,
        code: null,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`, `Arrays`]
    }
]

export default projects
