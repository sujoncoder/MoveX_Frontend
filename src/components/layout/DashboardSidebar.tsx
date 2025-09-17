import { menuItems } from "@/data/sidebarData";
import { useAuth } from "@/utils/useAuth";
import { IMenuItem } from "./type/sidebar.types";
import { Link } from "react-router";
import Logo from "@/shared/Logo";


const DashboardSidebar = () => {
    const { user } = useAuth();

    const currentMenuItems: IMenuItem[] = user ? menuItems[user.role] : [];

    return (
        <div className="h-[calc(100vh-26px)] bg-black/20 rounded-l-xl py-5 shadow">
            <Link to="/" className="flex justify-center items-center mb-20">
                <Logo />
            </Link>

            <div>
                {
                    currentMenuItems.map((item) => (
                        <Link
                            className="flex items-center gap-5 my-2 py-2 px-5 mx-1 rounded-md focus:bg-black/10"
                            to={item.route}
                        >
                            <item.icon className="w-7 h-7 text-slate-500" />

                            <span className="text-slate-500 font-semibold antialiased">
                                {item.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};
export default DashboardSidebar;