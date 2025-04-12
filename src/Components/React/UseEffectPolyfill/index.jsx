import React, { useState, useEffect } from "react";
import useCustomEffect from "./useCustomEffect";

const UseEffectPolyfill = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(100);

    // useEffect(() => {
    //     console.log("Callback function");

    //     return () => {
    //         console.log("Cleanup.....");
    //     };
    // }, [count]);
    useCustomEffect(
        (text) => {
            console.log("Callback function from", text);

            return function cleanup() {
                console.log("Cleanup...");
            };
        },
        [count]
    );

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (count2 > 0) {
            setCount2((prev) => prev - 1);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <p className="text-xl font-bold">Counter: {count}</p>

            <button
                className="border border-gray-600 rounded-md px-2 py-1 w-28 text-white font-bold bg-sky-700 hover:bg-sky-800 cursor-pointer"
                onClick={handleIncrement}
            >
                Increment
            </button>

            <p className="text-xl font-bold">Counter 2: {count2}</p>
            <button
                className={`border border-gray-600 rounded-md px-2 py-1 w-28 text-white font-bold bg-fuchsia-700 hover:bg-fuchsia-800 ${
                    Number(count2) === 0
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                }`}
                onClick={handleDecrement}
                disabled={Number(count2) === 0}
            >
                Decrement
            </button>
        </div>
    );
};

export default UseEffectPolyfill;
