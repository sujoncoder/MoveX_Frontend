import { menuItems } from "@/data/sidebarData";
import { NavLink } from "react-router-dom";


const DesktopSidebar = () => {
    return (
        <div>
            <ul className="space-y-2">
                {menuItems.map((item) => (
                    <NavLink
                        to={item.route}
                        key={item.name}
                        end={item.route === "/dashboard"}
                        className={({ isActive }) =>
                            `flex items-center gap-3 rounded-lg p-3 text-lg font-semibold transition-all duration-300 group
              ${isActive
                                ? "bg-blue-500/10 text-blue-600"
                                : "text-gray-500 bg-slate-500/10 hover:bg-slate-500/15"}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <item.icon
                                    className={`w-6 h-6 transform transition-transform duration-300 
                                        ${isActive
                                            ? "text-blue-600 scale-110"
                                            : "text-gray-400 group-hover:scale-125"}`} />

                                <span className={`${isActive ? "text-blue-600" : "text-gray-400"}`}>
                                    {item.name}
                                </span>
                            </>
                        )}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default DesktopSidebar;