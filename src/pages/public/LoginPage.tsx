import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLoginMutation } from "@/redux/api/authApi";
import { useLazyGetProfileQuery } from "@/redux/api/userApi";


const LoginPage = () => {
    const navigate = useNavigate();

    const [login, { isLoading: isLoggingIn }] = useLoginMutation();
    const [getProfile, { isLoading: isFetchingProfile }] = useLazyGetProfileQuery();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isLoading = isLoggingIn || isFetchingProfile;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login({ email, password }).unwrap();
            getProfile();
            toast.success("Login successful 🎉");
            navigate("/");
        } catch (err: any) {
            let message = "Login failed";
            if (err?.data?.message) message = err.data.message;
            else if (err?.error) message = err.error;
            toast.error(message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white rounded-md shadow p-8">
                <h2 className="text-2xl font-bold text-center text-slate-600 mb-6 font-mono">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* EMAIL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-slate-500"
                            required
                        />
                    </div>

                    {/* PASSWORD */}
                    <div className="relative">
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md pr-10 focus:ring-2 focus:ring-slate-500"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 text-gray-500"
                            tabIndex={-1}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center items-center gap-2 bg-blue-500 text-white py-2 rounded-md disabled:opacity-70"
                    >
                        {isLoading && <Loader2 className="animate-spin" size={18} />}
                        {isLoggingIn && "Logging in..."}
                        {isFetchingProfile && "Loading profile..."}
                        {!isLoading && "Login"}
                    </button>
                </form>

                <p className="text-center text-sm mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 font-medium">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;