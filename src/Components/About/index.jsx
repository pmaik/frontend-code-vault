import React from "react";

const About = () => {
    return (
        <div className="flex flex-col justify-center gap-8 mt-10 max-w-4xl mx-auto p-10 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800">About Me</h1>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Summary
                </h2>
                <p className="text-gray-600 line-height-6 text-spacing-2 font-sans">
                    Results-driven Software Developer with 3 years of experience
                    in frontend and backend development, specializing in
                    React.js, Next.js, Node.js, Express.js, Laravel, JavaScript,
                    and TypeScript. Strong problem-solving skills with expertise
                    in data structures, algorithms, and performance
                    optimization. Experienced in designing and developing
                    scalable, efficient, and user-friendly web applications that
                    streamline workflows and enhance business productivity.
                    Passionate about delivering high-quality software solutions
                    that drive efficiency and seamless user experiences.
                </p>
            </div>

            {/* Personal Info */}
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Personal Info
                </h2>
                <p className="text-gray-600 ">
                    Name: <span className="font-medium">Maneesh Patel</span>
                </p>
                <p className="text-gray-600">
                    <span className="text-cyan-800 font-bold">&#9993;</span>
                    Email: maneeshpatel1008@gmail.com
                </p>
                <p className="text-gray-600">&#9742; Phone: +91-9170785257</p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-gray-700">
                    Education
                </h2>

                <p className="text-gray-600 font-medium">
                    Bachelor of Science - Computer Science and Engineering
                </p>
                <p className="text-gray-600">
                    Institute of Engineering & Technology (IET) Lucknow, UP,
                    India (Aug 2017 - May 2021)
                </p>
                <p className="text-gray-600 font-bold">GPA: 8.2/10</p>
            </div>

            {/* Technical Skills */}
            <div className="">
                <h2 className="text-xl font-semibold text-gray-700">
                    Technical Skills
                </h2>
                <p className="text-gray-600 line-height-6 text-spacing-2 font-sans">
                    Data structures, Algorithms, React.js, JavaScript,
                    TypeScript, HTML5, CSS, Tailwind CSS, Node.js, Express.js,
                    Next.js, shadcn, Jest unit testing, Microfrontend,
                    Styled-Components, OOPs, Docker, C/C++, Python, PHP,
                    Laravel, MongoDB, MySQL
                </p>
            </div>

            {/* Work Experience */}
            <div className="">
                <h2 className="text-xl font-semibold text-gray-700">
                    Work Experience
                </h2>
                <p className="text-gray-600 line-height-6 text-spacing-2 font-sans">
                    <strong>Software Development Engineer - Frontend</strong> -
                    Tortoise Systems (Aug 2024 - Oct 2024)
                </p>
                <p className="text-gray-600 line-height-6 text-spacing-2 font-sans">
                    <strong>Web Application Developer 2</strong> - Media.net
                    (Aug 2021 - July 2024)
                </p>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold text-gray-700">
                    Projects
                </h2>
                <ul className="list-disc list-inside text-gray-600 flex flex-col gap-2">
                    <li>
                        <p className="line-height-6 text-spacing-2 font-sans">
                            <span className="font-bold underline">
                                Monorepo Design:{" "}
                            </span>{" "}
                            As a Frontend Developer, I optimized development
                            processes by implementing a monorepo architecture
                            and transitioning projects from React.js to Next.js
                            for improved performance and SEO. I also migrated
                            codebases from JavaScript to TypeScript, enhancing
                            maintainability, and streamlined multiple dashboards
                            into a unified monorepo. Key contributions included
                            dynamic routing implementation and seamless user
                            navigation using Next.js, leveraging a tech stack of
                            React.js, Next.js, JavaScript, and TypeScript.
                        </p>
                    </li>
                    <li>
                        <p className="line-height-6 text-spacing-2 font-sans">
                            {" "}
                            <span className="font-bold underline">
                                Samurai Analytics App:{" "}
                            </span>
                            An analytics app to create reports from different
                            namespaces. A report can be of different kinds of
                            visualizations like pivot table, line chart, bar
                            chart etc. Users can select from available
                            dimensions and measures to generate a report.
                        </p>
                    </li>
                    <li>
                        <p className="line-height-6 text-spacing-2 font-sans">
                            <span className="font-bold underline">
                                Deals Management App:{" "}
                            </span>
                            Interface to manage the deals between supply and
                            demand. It is used by external as well as internal
                            users. This app has a complex multistep form to
                            create and edit deals. There are additional features
                            to show real time estimates of revenue based on
                            selection in form.
                        </p>
                    </li>
                    <li>
                        <p className="line-height-6 text-spacing-2 font-sans">
                            <span className="font-bold underline">
                                Open Bidding Admin App:{" "}
                            </span>
                            A read-only app shows all the submissions in
                            google’s open bidding platform. It has a log viewer
                            of the communication logs between google and
                            Media.net interface.
                        </p>
                    </li>
                </ul>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
                <a
                    href="https://github.com/pmaik"
                    className="text-blue-600 hover:text-blue-800"
                >
                    &#x1F517; GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/pmaik/"
                    className="text-blue-600 hover:text-blue-800"
                >
                    &#x1F517; LinkedIn
                </a>
            </div>
        </div>
    );
};

export default About;
