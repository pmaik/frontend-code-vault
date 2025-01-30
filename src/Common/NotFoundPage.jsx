import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <h2 className="text-3xl font-semibold text-gray-700">
                    Page Not Found
                </h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    Sorry, the page you are looking for doesn't exist or has
                    been moved.
                </p>
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
