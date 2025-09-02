import { useAuth } from "@/utils/useAuth";
import AdminDashboard from "./AdminDashboard";
import SenderDashboard from "./SenderDashboard";
import ReceiverDashboard from "./ReceiverDashboard";



const Dashboard = () => {
    const { user, role } = useAuth();

    // Role-based dashboard content
    const renderDashboard = () => {
        switch (role) {
            case 'ADMIN':
                return <AdminDashboard />;
            case 'SENDER':
                return <SenderDashboard />;
            case 'RECEIVER':
                return <ReceiverDashboard />;
            default:
                return <div>Invalid role</div>;
        }
    };

    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Welcome back, {user?.name}!
                </h2>
                <p className="text-gray-600">
                    Here's what's happening with your parcels today.
                </p>
            </div>

            {/* Role-specific Dashboard Content */}
            {renderDashboard()}
        </div>
    );
};

export default Dashboard;