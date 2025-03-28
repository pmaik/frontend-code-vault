import React from "react";
import MouseTracker from "./MouseTracker";

function RenderProps() {
    return (
        <div>
            <p className="text-2xl font-bold pb-2">
                Mouse tracker with the help of "Render" props
            </p>

            <MouseTracker
                render={(position) => (
                    <div className="flex flex-col gap-2 justify-center items-center pt-5 ">
                        <p className="underline ">Mouse Position</p>
                        <p className="text-3xl font-bold">
                            X: {position.x} Y: {position.y}
                        </p>
                    </div>
                )}
            />
        </div>
    );
}

export default RenderProps;
