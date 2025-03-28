import React, { Suspense, useState, useTransition } from "react";

const HeavyList = () => {
    let items = [];
    for (let i = 0; i < 5000; i++) {
        items.push(<div key={i}>Item {i}</div>);
    }
    return <div className="p-5">{items}</div>;
};

function ReactFiber() {
    const [count, setCount] = useState(0);
    const [heavyComponent, setHeavyComponent] = useState();
    const [isPending, startTransition] = useTransition();

    const handleHeavyListRender = () => {
        startTransition(() => {
            setTimeout(() => {
                setHeavyComponent(<HeavyList />);
            }, 2000);
        });
    };

    return (
        <div>
            <h1 className="text-3xl font-bold p-5 bg-violet-800 text-white  rounded-md text-center">
                ReactFiber
            </h1>
            <div className="p-5 ">
                <div className="text-2xl font-bold underline flex  gap-5 items-center ">
                    <p>Key Features of React Fiber:</p>
                    <a
                        href="https://www.youtube.com/watch?v=0ympFIwQFJw&t=202s"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xl text-blue-800"
                    >
                        Deep Dive (YouTube)
                    </a>
                </div>

                <ul>
                    <li className="p-2 text-xl">
                        <strong>- Reconciliation with Fiber Nodes</strong>
                    </li>
                    <li className="p-2 text-xl">
                        <strong>- Concurrency (Interruptible Rendering)</strong>
                    </li>
                    <li className="p-2 text-xl">
                        <strong>- Time Slicing</strong>
                    </li>
                    <li className="p-2 text-xl">
                        <strong>- Scheduling & Prioritization</strong>
                    </li>
                    <li className="p-2 text-xl">
                        <strong>
                            - Improved Error Handling (Error Boundaries)
                        </strong>
                    </li>
                    <li className="p-2 text-xl">
                        <strong>- Fragment Support {`(<></>)`}</strong>
                    </li>
                    <li className="p-2 text-xl">
                        <strong>- Better Animation & Layout Support</strong>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col justify-between items-center gap-5 border-2 border-gray-950 p-10 rounded-lg ">
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Increment Count: {count}
                </button>
                <button
                    onClick={handleHeavyListRender}
                    className="inline-block px-6 py-3 bg-pink-800 text-white rounded-lg hover:bg-pink-700 transition-colors"
                >
                    Render Heavy List
                </button>
            </div>

            {isPending && <p className="p-5">Loading.....</p>}
            <Suspense fallback={<p>Loading.....</p>}>{heavyComponent}</Suspense>
        </div>
    );
}

export default ReactFiber;
