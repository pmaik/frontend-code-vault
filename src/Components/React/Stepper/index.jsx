import React, { useState } from "react";
import stepperConfig from "./stepperConfig";

const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIscomplete] = useState(false);

    const handleNextClick = () => {
        if (currentStep === stepperConfig.length) {
            setIscomplete(true);
        } else {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const handleReset = () => {
        setCurrentStep(1);
        setIscomplete(false);
    };

    const ActiveComponent = stepperConfig[currentStep - 1]?.Component;

    const calculateProgressBarWidth = () => {
        return ((currentStep - 1) / (stepperConfig.length - 1)) * 100;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-5 w-[1000px]">
            <p className="text-xl font-bold underline mb-5">Checkout</p>

            <div className="flex gap-5 justify-between w-[100%] relative">
                {stepperConfig.map((step, index) => (
                    <div
                        key={step.name}
                        className={`flex flex-col justify-center items-center gap-1 `}
                    >
                        <div
                            className={`h-10 w-10 z-10 bg-gray-300  flex items-center justify-center ${
                                currentStep > index + 1 || isComplete
                                    ? "bg-green-600 text-white"
                                    : ""
                            } ${
                                currentStep === index + 1 ? "text-white" : ""
                            } text-xl font-bold border border-gray-800 rounded-full`}
                            style={{
                                backgroundColor: `${
                                    currentStep === index + 1 ? "#2563eb" : ""
                                }`,
                            }}
                        >
                            {currentStep > index + 1 || isComplete
                                ? "✓"
                                : index + 1}
                        </div>
                        <div>{step.name}</div>
                    </div>
                ))}

                <div className="absolute left-10 top-4 right-14 h-2 bg-gray-300 ">
                    <div
                        className="h-[100%] z-0 bg-green-600 transition-all duration-200 ease-in-out"
                        style={{ width: `${calculateProgressBarWidth()}%` }}
                    ></div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-5">
                <ActiveComponent />

                <button
                    className={`${
                        isComplete
                            ? "bg-pink-700 hover:bg-pink-800"
                            : "bg-gray-400 hover:bg-gray-500"
                    } px-5 py-1 rounded-lg border border-gray-600`}
                    onClick={!isComplete ? handleNextClick : handleReset}
                >
                    {isComplete
                        ? "Reset"
                        : currentStep === stepperConfig.length
                        ? "Finish"
                        : "Next"}
                </button>
            </div>
        </div>
    );
};

export default Stepper;
