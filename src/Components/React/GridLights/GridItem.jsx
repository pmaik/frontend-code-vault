import React from "react";

const GridItem = ({ id, label, onClick, isFilled, isDisabled }) => {
    return (
        <button
            key={id}
            aria-label={label}
            className={`h-28 w-28 cursor-pointer border border-gray-400 ${
                isFilled
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => onClick(id)}
            disabled={isDisabled}
        ></button>
    );
};

export default GridItem;
