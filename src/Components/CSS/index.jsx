import React from "react";
import { Outlet } from "react-router-dom";

function CSS() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to my CSS Page
            </h1>
            <Outlet />
        </div>
    );
}

export default CSS;
