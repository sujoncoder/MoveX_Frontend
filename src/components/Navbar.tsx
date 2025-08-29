import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../shared/Logo";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const navItems = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" },
        { label: "Parcel Tracking", path: "/tracking" },
        { label: "Dashboard", path: "/dashboard" },
        { label: "Login", path: "/login" },

    ];

    return (
        <nav className="bg-white fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                className={({ isActive }) =>
                                    `font-semibold transition hover:text-slate-700 ${isActive ? "text-black font-bold" : "text-slate-500"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>

                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-4 py-3 space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block text-gray-700 hover:text-blue-600 transition ${isActive ? "font-semibold text-blue-600" : ""
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;