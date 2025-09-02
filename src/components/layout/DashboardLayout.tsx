import { useState } from "react";
import { Outlet } from "react-router";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";


const DashboardLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="lg:flex">
                {/* Sidebar */}
                <DashboardSidebar onToggle={toggleSidebar} />

                {/* Main Content */}
                <div className="flex-1 lg:ml-0 min-h-screen">
                    {/* Header */}
                    <DashboardHeader onMenuToggle={toggleSidebar} />

                    {/* Page Content */}
                    <main className="p-4 lg:p-6 pt-16 lg:pt-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;