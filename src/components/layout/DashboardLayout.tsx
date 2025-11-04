import { Outlet } from 'react-router';
import DashboardHeaderLayout from './DashboardHeaderLayout';
import DashboardNavbar from './DashboardNavbar';
import MobileNavbar from '../dashboard/MobileNavbar';


const DashboardLayout = () => {
    return (
        <div className="h-screen md:p-5 flex bg-black/10">

            <aside className="hidden md:block p-5 w-[250px] bg-white/80 rounded-xl">
                <DashboardNavbar />
                <MobileNavbar />
            </aside>

            <div className="flex flex-col flex-1 space-y-2 md:space-y-5 pl-0 md:pl-5 ">
                <header className="hidden sm:block h-20 p-3 sm:p-5 bg-white/80 rounded-full md:rounded-xl mt-2 sm:mt-0 border sm:border-none mx-1 sm:mx-0">
                    <DashboardHeaderLayout />
                </header>

                <main className="flex-1 rounded md:rounded-xl overflow-y-auto">
                    <Outlet />
                </main>
            </div>

            <MobileNavbar />
        </div >
    )
};

export default DashboardLayout;