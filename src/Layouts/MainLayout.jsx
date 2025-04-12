import React from "react";
import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";
import Header from "../Components/Header";
import SideMenu from "../Components/SideMenu";

const MainLayout = (props) => {
    return (
        <div className="MainLayout">
            <Header />
            <div className="flex ">
                <SideMenu />
                <main className="p-5 bg-gray-100 w-screen">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

MainLayout.propTypes = {};

export default MainLayout;
