import React, { useState } from "react";

function MouseTracker({ render }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    return (
        <div
            className="w-[1000px] h-[500px] border shadow-sm rounded-lg bg-slate-300"
            onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
        >
            {render(position)}
        </div>
    );
}

export default MouseTracker;
