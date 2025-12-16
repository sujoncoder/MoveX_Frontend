import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLogoutMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { baseApi } from "@/redux/baseApi";


export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

    const handleLogout = async () => {
        try {

            await logout().unwrap();
            dispatch(baseApi.util.resetApiState());
            toast.success("Logged out successfully");
            navigate("/login");
        } catch (err: any) {
            console.error("Logout error:", err);
            dispatch(baseApi.util.resetApiState());
            toast.error("Logged out (with errors)");
            navigate("/login");
        }
    };

    return { handleLogout, isLoggingOut };
};