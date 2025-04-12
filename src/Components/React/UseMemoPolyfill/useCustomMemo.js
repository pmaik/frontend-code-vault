import { useRef, useEffect } from "react";

const areDepsSame = (oldDeps = [], newDeps = []) => {
    return (
        oldDeps.length === newDeps.length &&
        oldDeps.every((dep, i) => Object.is(dep, newDeps[i]))
    );
};

const useCustomMemo = (callback, deps) => {
    const memoizedRef = useRef({ deps: undefined, value: undefined });

    if (!areDepsSame(memoizedRef.current.deps, deps)) {
        memoizedRef.current.deps = deps;
        memoizedRef.current.value = callback();
    }

    // 🔥 Cleanup on unmount
    useEffect(() => {
        const ref = memoizedRef;
        return () => {
            console.log("Cleaning up memoizedRef...");
            ref.current.deps = undefined;
            ref.current.value = undefined;
        };
    }, []);

    return memoizedRef.current?.value;
};

export default useCustomMemo;
