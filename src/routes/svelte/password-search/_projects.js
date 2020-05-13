const projects = [
    {
        title: `Password Search v1`,
        slug: "v1",
        icon: `v1`,
        subtitle: `Setup and linear search function.`,
        progressValue: 1,
        progressMax: 6,
        prev: null,
        next: `v2`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/196fbd965af0442d8e92c568eb155f00`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Search v2`,
        slug: "v2",
        icon: `v2`,
        subtitle: `The timing function.`,
        progressValue: 2,
        progressMax: 6,
        prev: `v1`,
        next: `v3`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/f83b9c068b8d42cd9550f5b82defb8cc`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Search v3`,
        slug: "v3",
        icon: `v3`,
        subtitle: `The binary search function.`,
        progressValue: 3,
        progressMax: 6,
        prev: `v2`,
        next: `v4`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/9303d3300b50462e83ef45eecc190b09`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Search v4`,
        slug: "v4",
        icon: `v4`,
        subtitle: `Tabulating results.`,
        progressValue: 4,
        progressMax: 6,
        prev: `v3`,
        next: `v5`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/3c273d0e459b41f288e0b375b0548f11`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Search v5`,
        slug: "v5",
        icon: `v5`,
        subtitle: `The averaging function.`,
        progressValue: 5,
        progressMax: 6,
        prev: `v4`,
        next: `v6`,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/f11532a4bca44e1b98eb9b53969fa696`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    },
    {
        title: `Password Search v6`,
        slug: "v6",
        icon: `v6`,
        subtitle: `Futher analysis.`,
        progressValue: 6,
        progressMax: 6,
        prev: `v5`,
        next: null,
        video: null,
        description: ``,
        code: `https://svelte.dev/repl/07c1672bb7fc48b69a957e3f22d15748`,
        skills: [`Input`, `Output`, `Variables`, `If Statements`, `Loops`]
    }
];

export default projects;
