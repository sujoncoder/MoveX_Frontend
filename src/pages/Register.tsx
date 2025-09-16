import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IconEye, IconEyeOff, IconLoader2 } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "@/redux/features/auth.api";
import { toast } from "sonner";
import { RegisterSchema, RegisterSchemaType } from "@/schema/registerSchema";



const Register = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [registerUser] = useRegisterMutation();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<RegisterSchemaType>({
        resolver: zodResolver(RegisterSchema),
        mode: "onChange",
    });

    const watchPassword = watch("password", "");

    const navigate = useNavigate();

    // PASSWORD REQUIREMENT CHECK
    const hasUppercase = /[A-Z]/.test(watchPassword);
    const hasNumber = /\d/.test(watchPassword);
    const hasSpecialChar = /[!@#$%^&*()_\-+=\[\]{};':"\\|,.<>/?]/.test(watchPassword);
    const hasMinLength = watchPassword.length >= 8;

    // HANDLE SUBMIT
    const onSubmit = async (formData: RegisterSchemaType) => {
        try {
            const result = await registerUser(formData).unwrap();
            toast.success(result.message || "Account created successfully!");
            navigate("/")
        } catch (err: any) {
            toast.error(err?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md bg-slate-50 border rounded-md shadow px-8 py-4">
                <h2 className="text-2xl font-bold text-center text-slate-600 mb-4 font-mono">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    {/* NAME FIELD */}
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className={`w-full px-4 bg-white py-2 border-2 rounded-md focus:outline-none ${errors.name ? "border-red-500" : ""
                                }`}
                            placeholder="Enter your full name"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* EMAIL FIELD */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={`w-full bg-white px-4 py-2 border-2 rounded-md focus:outline-none ${errors.email ? "border-red-500" : ""
                                }`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* PHONE FIELD */}
                    <div>
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            {...register("phone")}
                            className={`w-full bg-white px-4 py-2 border-2 rounded-md focus:outline-none ${errors.phone ? "border-red-500" : ""
                                }`}
                            placeholder="Enter your phone number (e.g., 01712345678)"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>

                    {/* PASSWORD FIELD */}
                    <div className="relative">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            {...register("password")}
                            className={`w-full bg-white px-4 py-2 border-2 rounded-md focus:outline-none pr-10 ${errors.password ? "border-red-500" : ""
                                }`}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                            tabIndex={-1}
                        >
                            {showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* PASSWORD REQUIREMENTS */}
                    <div className="text-sm text-slate-500">
                        <p className="mt-4 mb-2">Password must contain:</p>
                        <div className="flex justify-between items-center space-y-1.5 pb-2">
                            <ul>
                                <li className={`flex items-center ${hasMinLength ? "text-green-500 font-mono" : "text-gray-600"}`}>
                                    <span className={`mr-2 ${hasMinLength ? "text-green-500 font-mono" : "text-slate-500"}`}>
                                        {hasMinLength ? "✓" : "○"}
                                    </span>
                                    At least 8 characters
                                </li>
                                <li className={`flex items-center ${hasUppercase ? "text-green-500 font-mono" : "text-gray-600"}`}>
                                    <span className={`mr-2 ${hasUppercase ? "text-green-500 font-mono" : "text-slate-500"}`}>
                                        {hasUppercase ? "✓" : "○"}
                                    </span>
                                    One uppercase letter
                                </li>
                            </ul>

                            <ul>
                                <li className={`flex items-center ${hasNumber ? "text-green-500 font-mono" : "text-gray-600"}`}>
                                    <span className={`mr-2 ${hasNumber ? "text-green-500 font-mono" : "text-slate-500"}`}>
                                        {hasNumber ? "✓" : "○"}
                                    </span>
                                    One number
                                </li>
                                <li className={`flex items-center ${hasSpecialChar ? "text-green-500 font-mono" : "text-gray-600"}`}>
                                    <span className={`mr-2 ${hasSpecialChar ? "text-green-500 font-mono" : "text-slate-500"}`}>
                                        {hasSpecialChar ? "✓" : "○"}
                                    </span>
                                    One special character
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex justify-center items-center gap-2 cursor-pointer text-white py-2 rounded-md shadow bg-blue-500 active:bg-blue-600 transition duration-300 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                    >
                        {isSubmitting && <IconLoader2 className="animate-spin" size={18} />}
                        {isSubmitting ? "Creating account..." : "Register"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;