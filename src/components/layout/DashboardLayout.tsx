import { Outlet } from 'react-router';
import DashboardSidebarLayout from './DashboardSidebarLayout';
import DashboardHeaderLayout from './DashboardHeaderLayout';


// [background:radial-gradient(120%_100%_at_50%_0%,_#FFFFFF_8%,_#FFF0E6_35%,_#FFD6BA_70%,_#FFFFFF_100%)]


const DashboardLayout = () => {
    return (
        <div className="h-screen p-5 flex bg-black/20">

            <aside className="w-[250px] bg-white/50 p-5 rounded-xl">
                <DashboardSidebarLayout />
            </aside>

            <div className="flex flex-col flex-1 space-y-5 pl-5">
                <header className="h-20 p-5 bg-white/50 rounded-xl">
                    <DashboardHeaderLayout />
                </header>

                <main className="flex-1 bg-white/50 rounded-xl overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div >
    )
};

export default DashboardLayout;