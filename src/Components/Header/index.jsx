import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="p-5 bg-slate-900 sticky top-0 z-50">
            <ul className="flex justify-around ">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-2xl font-bold 
                            ${isActive ? "text-amber-600" : "text-white "}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `text-2xl font-bold 
                            ${isActive ? "text-amber-600" : "text-white "}`
                        }
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `text-2xl font-bold 
                            ${isActive ? "text-amber-600" : "text-white "}`
                        }
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
