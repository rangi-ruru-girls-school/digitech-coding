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
        video: ``,
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
        video: ``,
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
        video: ``,
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
        video: ``,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/dyypqmL?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`]
    }
];

export default projects;