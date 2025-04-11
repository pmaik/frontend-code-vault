import { useState } from "react";
const INITIAL_PAGE_SIZE = 10;

const usePagination = () => {
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(INITIAL_PAGE_SIZE);

    return { pageNo, pageSize, setPageNo, setPageSize };
};

export default usePagination;
