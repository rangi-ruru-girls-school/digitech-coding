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
        description: ``,
        code: `https://codepen.io/MrHullen/embed/MWWbLBP?height=265&theme-id=light&default-tab=html,result`,
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
        description: ``,
        code: `https://codepen.io/MrHullen/embed/pooNGGO?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
        description: ``,
        code: `https://codepen.io/MrHullen/embed/pooOLar?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
        description: ``,
        code: `https://codepen.io/MrHullen/embed/LYYbqJE?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
