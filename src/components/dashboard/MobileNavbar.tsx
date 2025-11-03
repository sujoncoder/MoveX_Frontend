import { NavLink } from "react-router-dom";
import { menuItems } from "@/data/sidebarData";


const MobileNavbar = () => {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center bg-white py-3 md:hidden rounded-t-2xl">
            {menuItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.route}
                    end={item.route === "/dashboard"}
                    className={({ isActive }) =>
                        `flex flex-col items-center justify-center transition-all duration-300 p-2 ${isActive
                            ? "text-blue-400 bg-blue-500/10 rounded-full"
                            : "text-gray-500"
                        }`
                    }
                >
                    {({ isActive }) => (
                        <>
                            <item.icon
                                className={`w-7 h-7 transition-transform duration-300 ${isActive
                                    ? "text-blue-400"
                                    : "text-gray-400"}`}
                            />
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default MobileNavbar;