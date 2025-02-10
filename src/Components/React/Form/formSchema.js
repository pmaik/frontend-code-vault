import { z } from "zod";
import dayjs from "dayjs";

const today = dayjs().startOf("day");
const minDate = today.subtract(120, "years");

export const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
    age: z.coerce
        .number()
        .min(18, "You must be at least 18 years old")
        .max(100, "Age must be less than 100"),
    gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Please select a valid gender" }),
    }),
    dateOfBirth: z
        .custom((value) => value !== null && value !== undefined, {
            message: "Date of Birth is required",
        })
        .refine((value) => dayjs(value).isValid(), {
            message: "Invalid date format",
        })
        .refine((date) => dayjs(date).isBefore(today), {
            message: "Date of Birth cannot be in the future",
        })
        .refine((date) => dayjs(date).isAfter(minDate), {
            message: "Date of Birth cannot be older than 120 years",
        }),
    skills: z
        .array(z.string(), {
            required_error: "At least one skill is required",
        })
        .min(1, "At least one skill is required")
        .max(20, "You can add up to 20 skills only"),
    hobbies: z
        .array(z.string(), {
            required_error: "At least one hobby is required",
        })
        .min(1, "At least one hobby is required")
        .max(10, "You can add up to 10 hobbies only"),
});
