import React, { useEffect, useState, useRef } from "react";
const MIN = 0;
const MAX = 100;

const ProgressBar = () => {
    const [percentage, setPercentage] = useState(MIN);
    const intervalRef = useRef(null);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= 100) {
                    clearInterval(intervalRef.current);
                    return 100;
                }

                return prev + 1;
            });
        }, 100);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="flex flex-col gap-5 w-2/3">
            <p className="text-2xl font-bold text-center ">Progress Bar</p>

            <div className="h-7 rounded-xl bg-gray-300 border-2 border-gray-600 relative overflow-hidden ">
                <span
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold z-50 ${
                        percentage > 49 ? "text-white" : ""
                    }`}
                >
                    {percentage}%
                </span>

                <div
                    className={`bg-green-600 flex items-start h-full`}
                    // style={{ width: `${percentage}%` }}
                    style={{
                        transform: `scaleX(${percentage / MAX})`,
                        transformOrigin: "left",
                        transition: "transform 0.3s ease",
                    }}
                    role="progressbar"
                    aria-label="Progress Bar"
                    aria-valuemin={MIN}
                    aria-valuemax={MAX}
                    aria-valuenow={percentage}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
