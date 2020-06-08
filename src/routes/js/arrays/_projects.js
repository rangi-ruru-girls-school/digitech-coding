const projects = [
    {
        title: `Future Job`,
        slug: `future-job`,
        icon: `fas fa-stethoscope`,
        subtitle: `What could you be when you grow up?`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `subject-list`,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>Write a program that outputs a random job from an array.</blockquote>

          <p>Here are some links to explanations of arrays</p>
          <ul>
            <li>
              <a href="https://javascript.info/array">
                  arrays on javascript.info
              </a>
            </li>
            <li>
              <a href="https://www.w3schools.com/js/js_arrays.asp">
                  arrays on W3Schools
              </a>
            </li>
          </ul>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
          <p>If you can, try to complete the project without looking at it.</em></p>
        `,
        code: `MWWbLBP`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Subject List`,
        slug: `subject-list`,
        icon: `fas fa-user-graduate`,
        subtitle: `Create your ideal subject list.`,
        progressValue: 2,
        progressMax: 4,
        prev: `future-job`,
        next: `list-the-weekdays`,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>Write a program that lets you add and remove subjects from an array.</blockquote>

          <p>Here are some links about how to build this</p>
          <ul>
            <li>
              <a href="https://javascript.info/array#methods-pop-push-shift-unshift">
                  Add to an array: <code>push</code> on javascript.info
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array-methods#splice">
                Delete from an array: <code>splice</code> on javascript.info
              </a>
            </li>
          </ul>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
          <p>If you can, try to complete the project without looking at it.</em></p>
        `,
        code: `pooNGGO`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `List the Weekdays`,
        slug: `list-the-weekdays`,
        icon: `far fa-calendar-alt`,
        subtitle: `What order are the weekdays in again?`,
        progressValue: 3,
        progressMax: 4,
        prev: `subject-list`,
        next: `shopping-list`,
        video: null,
        description: `
          <h2>Brief</h2>
          <blockquote>Write a program that loops through an array and outputs the days of the week.</blockquote>

          <p>Here are some links to explanations of arrays</p>
          <ul>
            <li>
              <a href="https://javascript.info/array-methods#iterate-foreach">
                  Loop through an array: <code>forEach</code> on javascript.info
              </a>
            </li>
          </ul>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains everything you need for this program.</p>
          <p>If you can, try to complete the project without looking at it.</em></p>
        `,
        code: `pooOLar`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Shopping List`,
        slug: `shopping-list`,
        icon: `fas fa-cart-plus`,
        subtitle: `Helps to prepare before you go.`,
        progressValue: 4,
        progressMax: 4,
        prev: `list-the-weekdays`,
        next: null,
        video: null,
        description: `
          <p>This project is a chance for you to practice the skills you learnt in the previous three projects.</p>

          You'll need to use all of the skills to write the code. Here's some references to help:
          <ul>
            <li>
              <a href="https://javascript.info/array#declaration">
                  Create and reference an array
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array-methods#add-remove-items">
                  Add an item to an array
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array-methods#splice">
                  Delete an item from an array
              </a>
            </li>
            <li>
              <a href="https://javascript.info/array-methods#iterate-foreach">
                  Loop over an array
              </a>
            </li>
          </ul>
          
          <h2>Revision</h2>
          <p>Coming soon...</p>

          <h2>Brief</h2>
          <blockquote>Write a program that lets the user create a shopping list. They should be able to add and remove items from the list, which should be output on the page for them to see.</blockquote>
          
          <p>Use the code below to get you started. Copy and paste the HTML into your own file. You do not need to write any more HTML to complete this project.</p>
          
          <p><em>You can use the JavaScript below if you need help to get started. It contains comments explaining each step of this program.</p>
          <p>If you can, try to complete the program without looking at it.</em></p>
        `,
        code: `LYYbqJE`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    },
    {
        title: `Number Search`,
        slug: `number-search`,
        icon: `fas fa-search`,
        subtitle: `Is that number in there?`,
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
        title: `Sorted Check`,
        slug: `sorted-check`,
        icon: `fas fa-check-double`,
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
];

export default projects;
