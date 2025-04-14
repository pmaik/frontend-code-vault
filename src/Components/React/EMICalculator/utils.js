export const TENURE = [12, 24, 36, 60, 72];

export const finalDownPayment = (downPayment, totalCost, processingFeeRate) => {
    if (Number(totalCost) === 0) {
        return 0;
    }

    const remAmount = totalCost - downPayment;
    const processingCharge = Math.floor((remAmount * processingFeeRate) / 100);
    return downPayment + processingCharge;
};

export const calculateEMI = (totalCost) => {
    return 0;
};
