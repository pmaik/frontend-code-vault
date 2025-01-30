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
            "HTML Tags",
            "Forms",
            "Media Elements",
            "Tables",
            "HTML Attributes",
        ],
    },
    {
        type: MENU_SECTION_TYPES.css,
        list: [
            "CSS Positions",
            "FlexBox",
            "CSS Grid",
            "Transitions",
            "Animations",
        ],
    },
    {
        type: MENU_SECTION_TYPES.js,
        list: [
            "Hoisting",
            "Closure",
            "Promise",
            "Function currying",
            "Call, apply, Bind",
        ],
    },
    {
        type: MENU_SECTION_TYPES.react,
        list: [
            "Reconciliation",
            "Hooks",
            "HOC",
            "React Router",
            "Memoization",
            "Caching",
        ],
    },
];
