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
        title: `Extra`,
        slug: `extra`,
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
