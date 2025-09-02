import { useAuth } from "@/utils/useAuth";
import { Bell, Search, LogOut } from "lucide-react";


interface DashboardHeaderProps {
    onMenuToggle?: () => void;
};


const DashboardHeader: React.FC<DashboardHeaderProps> = () => {
    const { user, role } = useAuth();

    return (
        <header className="bg-white shadow-sm border-b px-4 lg:px-6 py-4 sticky top-0 z-30">
            <div className="flex items-center justify-between">

                {/* Mobile Menu Button */}
                <h1 className="ml-10 lg:ml-0 text-xl font-semibold lg:text-2xl text-slate-700 space-x-2">
                    Dashboard
                </h1>

                <div className="flex items-center space-x-2 lg:space-x-4">
                    {/* Search - Hidden on small screens */}
                    <div className="hidden md:block relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                        />
                    </div>

                    {/* Mobile Search Button */}
                    <button className="md:hidden p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                        <Search size={20} />
                    </button>

                    {/* Notifications */}
                    <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                        <Bell size={20} />
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            3
                        </span>
                    </button>

                    {/* User Menu - Responsive */}
                    <div className="flex items-center space-x-2">
                        {/* User Avatar - Hidden on small screens */}
                        <div className="hidden sm:block">
                            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                    {user?.name.charAt(0)}
                                </span>
                            </div>
                        </div>

                        {/* User Name - Hidden on small screens */}
                        <div className="hidden lg:block text-sm">
                            <p className="font-medium text-gray-700">{user?.name}</p>
                            <p className="text-xs text-gray-500 capitalize">{role}</p>
                        </div>

                        {/* Logout */}
                        <button className="flex items-center space-x-1 lg:space-x-2 p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
                            <LogOut size={16} />
                            <span className="hidden sm:inline text-sm lg:text-base">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default DashboardHeader;