import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { IconMenu, IconX, IconUser, IconLogout, IconHome, IconInfoCircle, IconMail, IconMapPin, IconLayoutDashboard } from "@tabler/icons-react";
import { toast } from "sonner";
import Logo from "@/shared/Logo";
import { authApi, useLogoutMutation } from "@/redux/features/auth.api";
import { useAuth } from "@/utils/useAuth";
import { useAppDispatch } from "@/redux/hooks";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    // HANDLE SCROLL EFFECT
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    // RTK - QUERY
    const { user, role } = useAuth();
    const [logout] = useLogoutMutation();

    console.log(role)

    const handleLogout = async () => {
        try {
            const result = await logout().unwrap();
            dispatch(authApi.util.resetApiState())
            if (result) {
                toast.success(result.message);
            };
            navigate("/login");
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    };


    // COMMON NAVIGATION ROUTE
    const commonNavItems = [
        { label: "Home", path: "/", icon: IconHome },
        { label: "About", path: "/about", icon: IconInfoCircle },
        { label: "Contact", path: "/contact", icon: IconMail },
        { label: "Tracking", path: "/tracking", icon: IconMapPin }
    ];

    // DYNAMIC NAVIGATION STATE BASED ON STATE
    const dynamicNavItems = user
        ?
        [
            { label: "Dashboard", path: "/dashboard", icon: IconLayoutDashboard },
            { label: "Logout", path: "#", icon: IconLogout, }
        ]
        :
        [
            { label: "Login", path: "/login", icon: IconUser }
        ];

    const allNavItems = [...commonNavItems, ...dynamicNavItems];

    return (
        <>
            {/* NAVBAR */}
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-gray-900/5'
                : 'bg-white/70 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* LOGO */}
                        <Link to="/">
                            <Logo />
                        </Link>


                        {/* DESKTOP MENU */}
                        <div className="hidden md:flex items-center space-x-1">
                            {commonNavItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink
                                        key={item.label}
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 group ${isActive
                                                ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-lg shadow-purple-200/50'
                                                : 'text-gray-600 hover:text-purple-600 hover:bg-slate-50'
                                            }`
                                        }
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </NavLink>
                                );
                            })}

                            {/* DYNAMIC SECTION */}
                            <div className="flex items-center space-x-2 ml-6 pl-6 border-l border-gray-200">
                                {dynamicNavItems.map((item) => {
                                    const Icon = item.icon;

                                    // Handle logout button separately
                                    if (item.label === 'Logout') {
                                        return (
                                            <button
                                                key={item.label}
                                                onClick={handleLogout}
                                                className="flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 group text-red-500 bg-red-50 border border-pink-300 hover:text-white hover:bg-red-500 cursor-pointer"
                                            >
                                                <Icon className="w-5 h-5" />
                                                <span className="hidden lg:inline">{item.label}</span>
                                            </button>
                                        );
                                    }

                                    // Regular navigation links
                                    return (
                                        <NavLink
                                            key={item.label}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 group border ${isActive
                                                    ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-lg shadow-purple-200/50 border-none'
                                                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-100'
                                                }`
                                            }
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="hidden lg:inline">{item.label}</span>
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 rounded-full transition-all duration-200 ${isOpen
                                    ? 'bg-gray-100 text-gray-900 rotate-180'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                {isOpen ? <IconX className="w-6 h-6" /> : <IconMenu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* MOBILE MENU */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-xl">
                        <div className="px-4 py-4 space-y-2">
                            {/* NAVIGATION ITEMS */}
                            {allNavItems.map((item) => {
                                const Icon = item.icon;

                                // Handle logout button separately
                                if (item.label === 'Logout') {
                                    return (
                                        <button
                                            key={item.label}
                                            onClick={() => {
                                                handleLogout();
                                                setIsOpen(false);
                                            }}
                                            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 text-red-500 bg-red-50 border border-pink-300 hover:text-white hover:bg-red-500"
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                }

                                // Regular navigation links
                                return (
                                    <NavLink
                                        key={item.label}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={({ isActive }) =>
                                            `flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 border ${isActive
                                                ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 shadow-lg shadow-purple-200/30'
                                                : 'text-gray-700 hover:bg-slate-50 hover:text-purple-600'
                                            }`
                                        }
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span>{item.label}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="h-16"></div>
        </>
    );
};
export default Navbar;