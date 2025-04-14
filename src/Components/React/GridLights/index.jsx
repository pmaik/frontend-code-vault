import React, { useState } from "react";
import GridItem from "./GridItem";

const GRID_CONFIG = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
];
const GRID_ID = GRID_CONFIG.flat(1);

const GridLights = () => {
    const [filledOrder, setFilledOrder] = useState([]);
    const [isDeactivating, setIsDeactivating] = useState(false);

    const activateCell = (index) => {
        const newOrder = [...filledOrder, index];
        setFilledOrder(newOrder);

        if (newOrder.length === GRID_ID.filter(Boolean).length) {
            deactivateCells();
        }
    };

    const deactivateCells = () => {
        setIsDeactivating(true);
        const intervalId = setInterval(() => {
            setFilledOrder((order) => {
                const newOrder = order.slice();
                newOrder.pop();

                if (newOrder.length === 0) {
                    clearInterval(intervalId);
                    setIsDeactivating(false);
                }

                return newOrder;
            });
        }, 300);
    };

    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <p className="text-2xl font-bold">Grid Lights Game</p>

            <div className="grid grid-cols-3 gap-5 border border-gray-500 p-5">
                {GRID_ID.map((val, index) =>
                    val ? (
                        <GridItem
                            key={index}
                            id={index}
                            label={`Cell ${index}`}
                            onClick={activateCell}
                            isFilled={filledOrder?.includes(index)}
                            isDisabled={
                                isDeactivating || filledOrder?.includes(index)
                            }
                        />
                    ) : (
                        <span />
                    )
                )}
            </div>
        </div>
    );
};

export default GridLights;
