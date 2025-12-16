import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";

type ProtectedRouteProps = {
    children: ReactNode;
    allowedRoles?: string[];
};

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
    const { isAuthenticated, role, isLoading, isError } = useAuth();

    // 🔄 While checking auth (page refresh / app load)
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <span className="text-gray-500">Checking authentication...</span>
            </div>
        );
    }

    // 🔐 Not logged in
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // ⛔ Role-based restriction
    if (allowedRoles && role && !allowedRoles.includes(role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    if (isError) {
        return <Navigate to="/login" replace />;
    }

    // ✅ Authorized
    return children;
};

export default ProtectedRoute;