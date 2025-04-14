import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { emiSchema } from "./emiSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    TextField,
    FormControl,
    Select,
    MenuItem,
    FormHelperText,
    FormLabel,
} from "@mui/material";
import { TENURE, finalDownPayment, calculateEMI } from "./utils";

const EMICalculator = () => {
    const {
        control,
        handleSubmit,
        watch,
        setValue,
        formState: { isSubmitting },
    } = useForm({
        resolver: zodResolver(emiSchema),
        defaultValues: {
            totalCost: 0,
            interestRate: 0,
            processingFee: 0,
            downPayment: 0,
            tenure: 12,
        },
    });
    const totalCost = watch("totalCost");
    const interestRate = watch("interestRate");
    const processingFeeRate = watch("processingFee");
    const downPayment = watch("downPayment");
    const tenure = watch("tenure");

    const [finalDownP, setFinalDownP] = useState(
        finalDownPayment(downPayment, totalCost, processingFeeRate)
    );

    return (
        <div className="flex flex-col items-center justify-center w-[100%] gap-5 ">
            <p className="text-2xl font-bold">EMI Calculator</p>

            <div className="w-2/3">
                <form
                    onSubmit={handleSubmit(() => {})}
                    className="flex flex-col gap-10"
                >
                    <Controller
                        name="totalCost"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <div className="flex flex-col">
                                <FormLabel>Total Cost of Asset</FormLabel>
                                <TextField
                                    id="totalCost"
                                    type="number"
                                    variant="outlined"
                                    placeholder="Enter total cost"
                                    error={!!error}
                                    helperText={error?.message}
                                    // {...helperTextStyles}
                                    {...field}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name="interestRate"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <div className="flex flex-col">
                                <FormLabel>Interest Rate (in %)</FormLabel>
                                <TextField
                                    id="interestRate"
                                    type="number"
                                    variant="outlined"
                                    placeholder="Enter interest rate"
                                    error={!!error}
                                    helperText={error?.message}
                                    {...field}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name="processingFee"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <div className="flex flex-col">
                                <FormLabel>Processing Fee (in %)</FormLabel>
                                <TextField
                                    id="processingFee"
                                    type="number"
                                    variant="outlined"
                                    placeholder="Enter processing fee"
                                    error={!!error}
                                    helperText={error?.message}
                                    {...field}
                                />
                            </div>
                        )}
                    />

                    <Controller
                        name="downPayment"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth error={!!error}>
                                <FormLabel>
                                    <p>Down Payment</p>
                                    <p>
                                        Total Down Payment-
                                        <span className="text-gray-800 font-bold">
                                            ₹{finalDownP}
                                        </span>
                                    </p>
                                </FormLabel>
                                <input
                                    type="range"
                                    id="downPayment"
                                    name="downPayment"
                                    min={0}
                                    max={totalCost}
                                    step={10}
                                    {...field}
                                />
                                <div className="flex justify-between text-[#00000099]">
                                    <span>0%</span>
                                    <span>₹{downPayment}</span>
                                    <span>100%</span>
                                </div>
                                {error && (
                                    <FormHelperText
                                        sx={{ marginLeft: 0, fontSize: "14px" }}
                                    >
                                        {error.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        )}
                    />

                    <FormControl fullWidth>
                        <FormLabel>
                            <p>Loan per Month</p>
                            <p>
                                Total Loan Amount-{" "}
                                <span className="text-gray-800 font-bold">
                                    {105000}
                                </span>
                            </p>
                        </FormLabel>
                        <input
                            type="range"
                            id="loanAmount"
                            name="loanAmount"
                            min={calculateEMI(totalCost)}
                            max={calculateEMI(totalCost)}
                            className=""
                        />
                        <div className="flex justify-between text-[#00000099]">
                            <span>₹0</span>
                            <span>₹{87958}</span>
                            <span>₹9821310</span>
                        </div>
                    </FormControl>

                    <Controller
                        name="tenure"
                        control={control}
                        render={({ field, fieldState: { error } }) => (
                            <FormControl fullWidth error={!!error}>
                                <FormLabel>Tenure</FormLabel>
                                <Select
                                    labelId="tenure-label"
                                    id="tenure"
                                    {...field}
                                >
                                    {TENURE.map((ten) => (
                                        <MenuItem key={ten} value={ten}>
                                            {ten}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {error && (
                                    <FormHelperText
                                        sx={{ marginLeft: 0, fontSize: "14px" }}
                                    >
                                        {error.message}
                                    </FormHelperText>
                                )}
                            </FormControl>
                        )}
                    />
                </form>
            </div>
        </div>
    );
};

export default EMICalculator;
