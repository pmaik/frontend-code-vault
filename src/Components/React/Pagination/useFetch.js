import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: [],
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const result = await fetch(url);
                const response = await result.json();

                setState({
                    loading: false,
                    error: null,
                    data: response,
                });
            } catch (error) {
                setState({
                    loading: false,
                    error: "Failed to load products",
                    data: [],
                });
                console.error("Error in fetching products", error);
            }
        };

        fetchProducts();
    }, [url]);

    return state;
};

export default useFetch;
