const projects = [
    {
        title: `'ello 'ello 'ello`,
        slug: `ello-ello-ello`,
        icon: `fas fa-hard-hat`,
        subtitle: `The usual greeting from a steroetyping British police officer.`,
        progressValue: 1,
        progressMax: 4,
        prev: null,
        next: `counting`,
        video: ``,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/OJyOwPG?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
        video: ``,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/MWWqvmZ?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
        next: `fibonacci`,
        video: ``,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/ZEEMJvZ?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
    },
    {
        title: `Fibonacci`,
        slug: `fibonacci`,
        icon: `fas fa-signal`,
        subtitle: `The classic number series.`,
        progressValue: 4,
        progressMax: 4,
        prev: `factorial`,
        next: null,
        video: ``,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/WNNgEZy?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `Loops`]
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
        description: ``,
        code: `https://codepen.io/MrHullen/embed/OJJojwQ?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    }
];

export default projects;