const projects = [
    {
        title: `Hello World`,
        slug: "hello-world",
        subtitle: `The simplest program. All coders start here.`,
        progressValue: 1,
        progressMax: 4,
        prev: false,
        next: `say-what`,
        video: `https://www.youtube.com/embed/Foy-1KkHNDE`,
        description: ``,
        src: `https://codepen.io/MrHullen/embed/eYYdjVZ?height=309&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`]
    },
    {
        title: `Say What`,
        slug: "say-what",
        subtitle: `What?`,
        progressValue: 2,
        progressMax: 4,
        prev: `hello-world`,
        next: `the-repeater`,
        video: `https://www.youtube.com/embed/Dwj3BgYpEMU`,
        description: ``,
        src: `https://codepen.io/MrHullen/embed/XWWjByM?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`]
    },
    {
        title: `The Repeater`,
        slug: "the-repeater",
        subtitle: `Repeats whatever you put in.`,
        progressValue: 3,
        progressMax: 4,
        prev: `say-what`,
        next: `mad-libs`,
        video: ``,
        description: ``,
        src: `https://codepen.io/MrHullen/embed/BaazXBy?height=265&theme-id=light&default-tab=html,result&editable=true`,
        skills: [`Input`, `Output`, `Variables`]
    },
    {
        title: `Mad Libs`,
        slug: "mad-libs",
        subtitle: `The classic party game - now in code!`,
        progressValue: 4,
        progressMax: 4,
        prev: `the-repeater`,
        next: null,
        video: ``,
        description: ``,
        src: ``,
        skills: [`Input`, `Output`, `Variables`]
    }
];

export default projects;