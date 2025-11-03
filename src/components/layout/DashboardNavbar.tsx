import { Link } from "react-router";
import Logo from "@/shared/Logo";
import Setting from "../dashboard/Setting";
import DesktopSidebar from "../dashboard/DesktopSidebar";

const DashboardNavbar = () => {
    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <Link to="/" className="flex justify-center items-center mb-10">
                    <Logo />
                </Link>

                <DesktopSidebar />
            </div>

            <div className="mt-auto pt-5 border-t border-gray-300">
                <Setting />
            </div>
        </div>
    );
};

export default DashboardNavbar;