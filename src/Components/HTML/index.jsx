import React from "react";
import { Outlet } from "react-router-dom";

function HTML() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to my HTML Page
            </h1>
            <Outlet />
        </div>
    );
}

export default HTML;
