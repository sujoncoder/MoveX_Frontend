import { Navigate } from "react-router-dom";
import { useGetProfileQuery } from "@/redux/api/authApi";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: string;
}

const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
    const { data: user, isLoading, isError } = useGetProfileQuery();

    // Show loading spinner while checking auth
    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50" >
                <div className="flex flex-col items-center gap-3" >
                    <Loader2 className="animate-spin text-blue-500" size={40} />
                    <p className="text-gray-600 text-sm" > Checking authentication...</p>
                </div>
            </div>
        );
    }

    // User not authenticated - redirect to login
    if (isError || !user) {
        return <Navigate to="/login" replace />;
    }

    // Role-based access control (optional)
    if (requiredRole && user.role !== requiredRole) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50" >
                <div className="bg-white p-8 rounded-lg shadow-md text-center" >
                    <h2 className="text-2xl font-bold text-red-500 mb-2" >
                        Access Denied
                    </h2>
                    <p className="text-gray-600" >
                        You don't have permission to access this page.
                    </p>
                    <p className="text-sm text-gray-500 mt-2" >
                        Required role: <span className="font-semibold" > {requiredRole} </span>
                    </p>
                </div>
            </div>
        );
    }

    // User authenticated - render children
    return <>{children} </>;
};

export default ProtectedRoute;