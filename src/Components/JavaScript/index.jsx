import React from "react";
import { Outlet } from "react-router-dom";

function JavaScript() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Welcome to my JavaScript Page
            </h1>
            <Outlet />
        </div>
    );
}

export default JavaScript;
