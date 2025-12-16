import { roleConfig } from '@/data/dashboardStaticData';
import { useAuth } from '@/hooks/useAuth';
import { getCurrentGreeting } from '@/utils/greeting';


// DASHBOARD COMPONENT
const Dashboard = () => {
    const currentUser = useAuth();

    const config = currentUser?.role ? roleConfig[currentUser?.role] : null;

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="text-5xl">{config?.icon}</span>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">
                                {getCurrentGreeting()}, {currentUser?.user?.name}!
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Welcome to your {currentUser?.role} Dashboard. Here's what's happening today.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {config?.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-3xl">{stat?.icon}</span>
                                <span className={`text-sm font-medium ${stat?.change.startsWith('+') ? 'text-green-600' :
                                    stat.change.startsWith('-') ? 'text-red-600' :
                                        'text-gray-600'
                                    }`}>
                                    {stat?.change}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">{stat?.label}</p>
                            <p className="text-3xl font-bold text-gray-800">{stat?.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;