import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Common/Home";
import NotFoundPage from "../Common/NotFoundPage";
import Spinner from "../Common/Spinner";
import HTML from "../Components/HTML";
import CSS from "../Components/CSS";
import CssPositions from "../Components/CSS/CssPositions";
import CssGrid from "../Components/CSS/CssGrid";
import JavaScript from "../Components/JavaScript";
import ReactComp from "../Components/React";
import ReactForm from "../Components/React/Form";
import { MENU_SECTION_TYPES } from "../Constants";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: MENU_SECTION_TYPES.html.toLocaleLowerCase(),
                element: <HTML />,
            },
            {
                path: MENU_SECTION_TYPES.css.toLocaleLowerCase(),
                element: <CSS />,
                children: [
                    {
                        path: "css-positions",
                        element: <CssPositions />,
                    },
                    {
                        path: "css-grid",
                        element: <CssGrid />,
                    },
                ],
            },
            {
                path: MENU_SECTION_TYPES.js.toLocaleLowerCase(),
                element: <JavaScript />,
            },
            {
                path: MENU_SECTION_TYPES.react.toLocaleLowerCase(),
                element: <ReactComp />,
                children: [
                    {
                        path: "react-form",
                        element: <ReactForm />,
                    },
                ],
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

function AppRoutes() {
    return (
        <Suspense fallback={<Spinner />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default AppRoutes;
