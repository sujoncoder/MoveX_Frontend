import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth.api";
import { toast } from "sonner";
import { LoginSchema, LoginSchemaType } from "@/schema/loginSchema";


const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<LoginSchemaType>({
        resolver: zodResolver(LoginSchema), mode: "onChange"
    });

    const [login, { isLoading }] = useLoginMutation();

    const navigate = useNavigate();

    // HANDLE SUBMIT
    const onSubmit = async (formData: LoginSchemaType) => {
        try {
            const result = await login(formData).unwrap();
            console.log(result)
            toast.success(result.message);
            navigate("/")
        } catch (err: any) {
            toast.error(err?.data?.message || "Login failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-md shadow p-8">
                <h2 className="text-2xl font-bold text-center text-slate-600 mb-6 font-mono">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
                            className={`w-full px-4 py-2 border-2 rounded-md focus:outline-none ${errors.email ? "border-red-500" : ""}`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-400 font-mono text-sm mt-1">
                                {errors.email.message}
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
                            className={`w-full px-4 py-2 border-2 rounded-md focus:outline-none pr-10 ${errors.password ? "border-red-500" : ""
                                }`}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                        {errors.password && (
                            <p className="text-red-400 font-mono text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <Link
                            to="/forgot-password"
                            className="text-blue-500 hover:underline font-medium"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* SUBMIT BUTTON */}
                    <button
                        type="submit"
                        disabled={isLoading || isSubmitting}
                        className={`w-full flex justify-center items-center gap-2 cursor-pointer text-white py-2 rounded-md shadow bg-blue-500 active:bg-blue-600 transition duration-300 ${isLoading || isSubmitting
                            ? "opacity-70 cursor-not-allowed"
                            : ""
                            }`}
                    >
                        {(isLoading || isSubmitting) && (
                            <Loader2 className="animate-spin" size={18} />
                        )}
                        {isLoading || isSubmitting ? "Logging in..." : "Login"}
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;