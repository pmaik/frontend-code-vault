import React from "react";

function Pagination({ pageNo, setPageNo, pageSize, setPageSize, totalPage }) {
    const handleClick = (page) => {
        if (page !== pageNo) {
            setPageNo(page);
        }
    };

    return (
        <div className="flex border border-gray-600 divide-x divide-gray-600 ">
            {[...Array(Math.ceil(totalPage / pageSize))].map((_, index) => (
                <span
                    key={index}
                    className={`${
                        index + 1 === pageNo ? "bg-gray-500" : ""
                    } w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-400 transition `}
                    onClick={() => handleClick(index + 1)}
                >
                    {index + 1}
                </span>
            ))}
        </div>
    );
}

export default Pagination;
