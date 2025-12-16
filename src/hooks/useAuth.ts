import { useGetProfileQuery } from "@/redux/api/userApi";
import { Role } from "@/types/user";


export const useAuth = () => {
    const { data: response, isLoading, isFetching, isError } = useGetProfileQuery();
    const user = response?.data ?? null;
    const isAuthenticated = !!user;
    const role = user?.role ?? null;

    return {
        user,
        role: role as Role | null,
        isAuthenticated,
        isLoading: isLoading || isFetching,
        isError,
    };
};