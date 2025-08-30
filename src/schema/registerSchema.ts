// schema/registerSchema.ts
import { z } from "zod";

export const RegisterSchema = z.object({
    name: z
        .string()
        .min(1, "Full name is required")
        .min(2, "Name must be at least 2 characters")
        .max(100, "Name must not exceed 100 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),

    phone: z
        .string()
        .min(1, "Phone number is required")
        .regex(
            /^(\+8801|8801|01)[3-9]\d{8}$/,
            "Please enter a valid Bangladeshi phone number (e.g., 01712345678)"
        ),

    password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters long")
        .regex(
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]).+$/,
            "Password must contain at least one uppercase letter, one number, and one special character"
        ),
});

export type RegisterSchemaType = z.infer<typeof RegisterSchema>;