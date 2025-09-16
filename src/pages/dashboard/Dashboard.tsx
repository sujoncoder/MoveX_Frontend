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
        <div className="space-y-5">
            {/* WELCOME SECTION */}
            <div className="bg-white rounded-md p-5">
                <h2 className="text-2xl font-bold text-slate-500 mb-2 font-mono">
                    Welcome back, <span className="capitalize text-slate-600">{user?.name}</span>
                </h2>
                <p className="text-gray-500">
                    Here's what's happening with your parcels today.
                </p>
            </div>

            {/* ROLE BASED DASHBOARD CONTENT */}
            {renderDashboard()}
        </div>
    );
};

export default Dashboard;