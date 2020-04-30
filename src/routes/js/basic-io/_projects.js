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
        code: `https://codepen.io/MrHullen/embed/eYYdjVZ?height=309&theme-id=light&default-tab=html,result&editable=true`,
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
        code: `https://codepen.io/MrHullen/embed/XWWjByM?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
        video: ``,
        description: ``,
        code: `https://codepen.io/MrHullen/embed/BaazXBy?height=265&theme-id=light&default-tab=html,result&editable=true`,
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
        video: ``,
        description: ``,
        code: ``,
        skills: [`Input`, `Output`, `Variables`]
    }
];

export default projects;