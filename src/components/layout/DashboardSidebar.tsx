import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { menuItems } from "@/data/sidebarData";
import { IDashboardSidebarProps, IMenuItem } from "./type/sidebar.types";
import Logo from "@/shared/Logo";
import { useAuth } from "@/utils/useAuth";


const DashboardSidebar: React.FC<IDashboardSidebarProps> = ({ onToggle }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useAuth();

    const currentMenuItems: IMenuItem[] = user ? menuItems[user.role] : [];

    // OPEN
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        onToggle?.();
    };

    // CLOSE
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    let content;

    if (!isMobileMenuOpen) {
        // Menu icon - left side
        content = (
            <button
                onClick={toggleMobileMenu}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                aria-label="Open menu"
            >
                <Menu size={20} />
            </button>
        );
    } else {
        null
    };


    return (
        <>
            {/* Mobile Menu Button */}

            {content}

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Sidebar */}
            <div className={`
                fixed lg:relative lg:translate-x-0 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                transition-transform duration-300 ease-in-out
                w-full bg-white shadow-lg h-full z-40
                lg:w-64 lg:min-h-screen
            `}>
                {/* Logo & User Info */}
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between lg:justify-center">
                        <Link to="/">
                            <Logo width={150} height={150} />
                        </Link>
                        {/* Close button for mobile */}
                        <button
                            onClick={closeMobileMenu}
                            className="lg:hidden p-2 hover:bg-gray-100  rounded"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="text-center mt-5 hidden lg:block space-y-1">
                        <p className="font-semibold text-slate-600 capitalize" title={user?.name}>
                            {user?.name}
                        </p>
                        <p className="text-slate-500 text-sm" title={user?.email}>
                            {user?.email}
                        </p>
                        <span className="inline-block px-2 py-1 text-xs bg-slate-500 text-white rounded-full">
                            {user?.role}
                        </span>
                    </div>
                </div >

                {/* Navigation Menu */}
                < nav className="p-4 overflow-y-auto h-full pb-20 lg:pb-4" >
                    <ul className="space-y-2">
                        {currentMenuItems.map((item: IMenuItem) => {
                            const Icon = item.icon;
                            return (
                                <li key={item.route}>
                                    <NavLink
                                        to={item.route}
                                        onClick={closeMobileMenu} // Close mobile menu on navigation
                                        className={({ isActive }: { isActive: boolean }) =>
                                            `flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${isActive
                                                ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-700'
                                                : 'text-gray-700 hover:bg-gray-50'
                                            }`
                                        }
                                        end={item.route === '/dashboard'}
                                    >
                                        <Icon size={20} className="flex-shrink-0" />
                                        <span className="font-medium truncate">{item.name}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </ nav>
            </div >
        </>
    );
};
export default DashboardSidebar;