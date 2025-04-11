import React from "react";
import { Link, useLocation } from "react-router-dom";
import { SIDE_MENU_LIST } from "../../Constants";

const SideMenu = () => {
    const location = useLocation();
    const pathname = location?.pathname?.split("/").slice(2).join("/");
    const currentPath = pathname.replace(/-/g, " ");

    return (
        <div className="w-1/6 p-5 border-r-4 border-gray-600 bg-gray-300">
            <p className="text-3xl font-bold border-b-4 border-gray-600">
                SideMenu
            </p>

            <ul>
                {SIDE_MENU_LIST.map((item) => (
                    <li key={item.type}>
                        <Link
                            to={item.type.toLowerCase()}
                            className="inline-block text-2xl font-bold mt-5 mb-2 underline"
                        >
                            {item.type}
                        </Link>
                        <ol className="pl-5">
                            {item.list.map((val) => (
                                <Link
                                    key={val}
                                    to={`${item.type.toLowerCase()}/${val
                                        .toLowerCase()
                                        .replace(/ /g, "-")}`}
                                >
                                    <li
                                        className={`p-3 w-60 cursor-pointer rounded hover:bg-teal-500 transition-colors ${
                                            val.toLowerCase() === currentPath
                                                ? "bg-teal-500"
                                                : ""
                                        }`}
                                    >
                                        <span className="text-xl font-bold">
                                            {val}
                                        </span>
                                    </li>
                                </Link>
                            ))}
                        </ol>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideMenu;
