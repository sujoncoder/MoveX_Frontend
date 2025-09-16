import { Outlet } from "react-router";
import DashboardHeader from "./DashboardHeader"
import DashboardSidebar from "./DashboardSidebar"


const DashboardLayout = () => {
    return (
        <div className="min-h-screen [background:radial-gradient(120%_100%_at_50%_0%,_#FFFFFF_8%,_#FFF5F7_35%,_#FED7D7_70%,_#FFFFFF_100%)] p-3">
            <div className="grid grid-cols-6 gap-3 h-[calc(100vh-26px)]">
                {/* SIDE BAR CONTENT */}
                <div className="col-span-1">
                    <DashboardSidebar />
                </div>


                <div className="col-span-5 space-y-3">
                    {/* DASHBOARD HEADER */}
                    <DashboardHeader />

                    {/* OUTLET CONTENT */}
                    <div className="bg-black/10 rounded-r-xl shadow p-5">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;