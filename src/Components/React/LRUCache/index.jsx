import React, { useState } from "react";
import { TABS } from "./constants";
import { useLRUCache } from "./useLRU Cache";

const LRUCache = () => {
    const [content, setContent] = useState([]);
    const { get, put } = useLRUCache(3);

    const loadContent = async (id) => {
        await new Promise((resolve) => setTimeout(() => resolve(), 1000));

        const loadedContent = {
            id: id,
            text: `Data came from tab ${id}`,
        };

        put(id, loadedContent);
        console.log("New entry added");
        setContent((prev) => [...prev, loadedContent]);
    };

    const handleTabClick = (id) => {
        const cachedData = get(id);
        if (cachedData) {
            console.log("Data from LRU cache", cachedData);
            setContent((prev) => [...prev, cachedData]);
        } else {
            loadContent(id);
        }
    };

    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <p className="text-2xl font-bold">
                Dynamic Content Loader With LRU Cache
            </p>

            <div className="flex gap-2 items-center justify-center">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        className="px-5 py-2 bg-gray-400 hover:bg-gray-500 rounded-md"
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.value}
                    </button>
                ))}
            </div>

            {content.length > 0 && (
                <ul className="flex flex-col gap-2 w-full border border-gray-300 p-5 rounded-lg max-h-[400px] overflow-y-auto">
                    {content.map((item) => (
                        <li
                            key={item.text}
                            className="bg-gray-200 hover:bg-gray-300 px-10 py-3 rounded-md"
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LRUCache;
