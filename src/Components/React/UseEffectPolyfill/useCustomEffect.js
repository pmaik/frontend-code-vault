import { useRef } from "react";

const useCustomEffect = (callback, deps) => {
    const isFirstRender = useRef(true);
    const prevDepsRef = useRef(null);
    const cleanupRef = useRef();

    if (isFirstRender.current) {
        isFirstRender.current = false;

        cleanupRef.current = callback("First render");
        cleanupRef.current();
        return;
    }

    const isDepsChanged =
        !deps ||
        (deps.length &&
            JSON.stringify(deps) !== JSON.stringify(prevDepsRef.current));

    if (isDepsChanged) {
        if (typeof cleanupRef.current === "function") {
            cleanupRef.current();
        }

        cleanupRef.current = callback(deps ? "Having deps" : "No deps");
    }

    prevDepsRef.current = deps;
};

export default useCustomEffect;
