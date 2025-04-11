import React from "react";
import useFetch from "./useFetch";
import Pagination from "./Pagination";
import usePagination from "./usePagination";

const ProductComponent = () => {
    const { pageNo, pageSize, setPageNo, setPageSize } = usePagination();
    const { loading, error, data } = useFetch(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${
            (pageNo - 1) * pageSize
        }`
    );

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="w-2/3">
            <h1 className="text-2xl font-bold mb-5">
                Product Details with Pagination
            </h1>
            <div className="flex flex-col gap-2">
                {data?.products?.map((product) => (
                    <div className="flex justify-between gap-10 border-2 border-gray-800 py-3 px-5">
                        <p>{product.title}</p>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                        <p>{product.rating}</p>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <Pagination
                    pageNo={pageNo}
                    setPageNo={setPageNo}
                    totalPage={data.total}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                />
            </div>
        </div>
    );
};

export default ProductComponent;
