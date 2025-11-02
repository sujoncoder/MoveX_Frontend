import { Link } from "react-router";
import Logo from "@/shared/Logo";
import Sidebar from "../dashboard/Sidebar"
import Setting from "../dashboard/Setting";

const DashboardSidebarLayout = () => {
    return (
        <div className="flex flex-col justify-between">
            <div className="mb-70">
                <Link to="/" className="flex justify-center items-center mb-10">
                    <Logo />
                </Link>

                <Sidebar />
            </div>

            <Setting />
        </div>
    )
};

export default DashboardSidebarLayout;