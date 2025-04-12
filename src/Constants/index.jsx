export const MENU_SECTION_TYPES = {
    html: "HTML",
    css: "CSS",
    js: "JavaScript",
    react: "React",
};

// export const SIDE_MENU_LIST = {
//     [MENU_SECTION_TYPES.html]: [
//         "HTML Tags",
//         "Forms",
//         "Media Elements",
//         "Tables",
//         "HTML Attributes",
//     ],
//     [MENU_SECTION_TYPES.css]: [
//         "CSS Positions",
//         "FlexBox",
//         "CSS Grid",
//         "Transitions and Animations",
//     ],
//     [MENU_SECTION_TYPES.js]: [
//         "Hoisting",
//         "Closure",
//         "Promise",
//         "Function currying",
//         "Call, apply, Bind",
//     ],
//     [MENU_SECTION_TYPES.react]: [
//         "Reconciliation",
//         "Hooks",
//         "HOC",
//         "React Router",
//         "Memoization",
//         "Caching",
//     ],
// };

export const SIDE_MENU_LIST = [
    {
        type: MENU_SECTION_TYPES.html,
        list: [
            "Undoable Input",
            "Forms",
            // "Media Elements",
            // "Tables",
            // "HTML Attributes",
        ],
    },
    {
        type: MENU_SECTION_TYPES.css,
        list: [
            "CSS Positions",
            // "FlexBox",
            "CSS Grid",
            // "Transitions",
            // "Animations",
        ],
    },
    {
        type: MENU_SECTION_TYPES.js,
        list: ["Promise", "Function currying"],
    },
    {
        type: MENU_SECTION_TYPES.react,
        list: [
            "React form",
            "React Fiber",
            // "HOC",
            // "React Router",
            // "Memoization",
            // "Caching",
            "Render Props",
            "Pagination",
            "Progress Bar",
        ],
    },
];

export const SKILLS_LIST = [
    "Data structures",
    "Algorithms",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Redux",
    "Next.js",
    "Node.js",
    "Express.js",
    "Docker",
    "MongoDb",
    "MySQL",
    "Unit testing",
];

export const HOBBIES = [
    "Learning new tech stack",
    "Watching movies",
    "Playing cricket",
];
