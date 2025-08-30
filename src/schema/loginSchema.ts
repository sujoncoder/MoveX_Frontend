import { z } from "zod";

// export const LoginSchema = z.object({
//     email: z.email({ error: "Please enter a valid email address." }),
//     password: z
//         .string({ error: "Password is required." })
//         .min(8, { message: "Password must be at least 8 characters long." })
//         .refine((val) => /[A-Z]/.test(val), {
//             message: "Password must contain at least one uppercase letter.",
//         })
//         .refine((val) => /[0-9]/.test(val), {
//             message: "Password must contain at least one number.",
//         })
//         .refine((val) => /[!@#$%^&*]/.test(val), {
//             message: "Password must contain at least one special character.",
//         }),
// });


export const LoginSchema = z.object({
    email: z.email({ error: "Please enter a valid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long." })
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;