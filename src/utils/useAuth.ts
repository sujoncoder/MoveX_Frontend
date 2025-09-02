import { IUser } from "@/components/layout/type/sidebar.types";
import { useGetUserQuery } from "@/redux/features/auth.api";


// export const getCurrentUser = (): IUser => {
//     return {
//         id: 1,
//         name: "John Doe",
//         email: "john@example.com",
//         role: "ADMIN"
//     };
// };

export const useAuth = () => {
    const { data: response, isLoading, error } = useGetUserQuery();
    const user = response?.data || null;

    return {
        user,
        isAuthenticated: !!user,
        role: user?.role ?? null as IUser['role'] | null,
        isAdmin: user?.role === 'ADMIN',
        isLoading,
        error
    };
};
