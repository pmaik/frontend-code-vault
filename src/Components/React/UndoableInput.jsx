import { useState } from "react";

export default function UndoableInput() {
    const [value, setValue] = useState("");
    const [history, setHistory] = useState([""]);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleUndo = () => {
        if (history.length > 1) {
            const newHistory = [...history];
            newHistory.pop(); // Remove current value
            setValue(newHistory[newHistory.length - 1]); // Restore previous value
            setHistory(newHistory);
        }
    };

    const handleBlur = () => {
        if (value) {
            console.log("history", history);
            setHistory((prevHistory) => [...prevHistory, value]);
        }
    };

    return (
        <div className="">
            <h1 className="text-2xl pb-2">Input with Undo feature</h1>
            <div className="flex gap-3">
                <input
                    value={value}
                    onChange={handleChange}
                    placeholder="Type something..."
                    onBlur={handleBlur}
                    className="px-5 py-2 rounded border-2 border-cyan-700"
                />
                <button
                    onClick={handleUndo}
                    isDisabled={history.length <= 1}
                    className="py-2 px-5 border bg-teal-600 hover:bg-teal-700 rounded-lg text-white font-bold hover "
                >
                    Undo
                </button>
            </div>
        </div>
    );
}
