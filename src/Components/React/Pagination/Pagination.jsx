import React from "react";

function Pagination({ pageNo, setPageNo, pageSize, setPageSize, totalPage }) {
    const onPrevClick = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };

    const selectPageHandler = (page) => {
        if (page !== pageNo) {
            setPageNo(page);
        }
    };

    const onNextClick = () => {
        if (pageNo < totalPage) {
            setPageNo(pageNo + 1);
        }
    };

    return (
        <div className="flex border border-gray-600 divide-x divide-gray-600 ">
            <span
                className={`w-14 h-12 flex items-center justify-center text-xl ${
                    pageNo > 1
                        ? "cursor-pointer hover:bg-amber-500 transition"
                        : "cursor-not-allowed"
                } `}
                onClick={onPrevClick}
            >
                ◀
            </span>
            {[...Array(totalPage)].map((_, index) => (
                <span
                    key={index}
                    className={`${
                        index + 1 === pageNo ? "bg-gray-400" : ""
                    } w-12 h-12 flex items-center justify-center text-xl cursor-pointer hover:bg-gray-300 transition `}
                    onClick={() => selectPageHandler(index + 1)}
                >
                    {index + 1}
                </span>
            ))}
            <span
                className={`w-14 h-12 flex items-center justify-center text-xl ${
                    pageNo < totalPage
                        ? "cursor-pointer hover:bg-amber-500 transition"
                        : "cursor-not-allowed"
                }`}
                onClick={onNextClick}
            >
                ▶
            </span>
        </div>
    );
}

export default Pagination;
