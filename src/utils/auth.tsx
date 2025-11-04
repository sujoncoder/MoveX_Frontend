import { IUser } from "@/types/user";

export const getCurrentUser = (): IUser => {
    return {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        role: "admin"
    };
};

// TODO: Implement these functions when you add authentication
// export const useAuth = () => {
//     // const [user, setUser] = useState(null);
//     // const [loading, setLoading] = useState(true);
//     // return { user, setUser, loading };
//     return {
//         user: getCurrentUser(),
//         loading: false,
//         login: (credentials) =>
//         logout: () => {/* implement logout */ },
//         register: (userData) =>
//     };
// };

// export const ProtectedRoute = ({ children, allowedRoles }) => {
//     const user = getCurrentUser();

//     if (!allowedRoles.includes(user?.role)) {
//         return <Navigate to="/login" />;
//     }

//     return children;
// };