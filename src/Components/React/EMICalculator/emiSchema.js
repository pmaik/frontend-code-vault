import { z } from "zod";
import { TENURE } from "./utils";

export const emiSchema = z.object({
    totalCost: z.coerce.number().min(0, "Total cost must be greater than 0."),
    interestRate: z.coerce
        .number()
        .min(1, "Interest rate must be greater than 0."),
    processingFee: z.coerce
        .number()
        .min(1, "Processing fee must be greater than 0."),
    downPayment: z.coerce
        .number()
        .min(1, "Down payment  must be greater than 0."),
    tenure: z.enum(TENURE, {
        errorMap: () => ({ message: "Please select a tenure" }),
    }),
});
