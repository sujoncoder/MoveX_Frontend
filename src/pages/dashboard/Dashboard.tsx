import { getCurrentUser } from '@/utils/auth';
import { roleConfig } from '@/utils/dashboardStaticData';
import { getCurrentGreeting } from '@/utils/greeting';


const Dashboard = () => {
    const user = getCurrentUser();

    const currentRole = user?.role || 'sender';
    const config = roleConfig[currentRole];

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-2">
                        <span className="text-5xl">{config.icon}</span>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800">
                                {getCurrentGreeting()}, {user?.name || 'User'}!
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Welcome to your {config.title}. Here's what's happening today.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {config.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-3xl">{stat.icon}</span>
                                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' :
                                    stat.change.startsWith('-') ? 'text-red-600' :
                                        'text-gray-600'
                                    }`}>
                                    {stat.change}
                                </span>
                            </div>
                            <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                            <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Quick Actions */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {config.quickActions.map((action, index) => (
                            <a
                                key={index}
                                href={action.path}
                                className={`${action.color} text-white rounded-xl p-6 hover:opacity-90 transition-opacity shadow-md hover:shadow-lg`}
                            >
                                <div className="text-4xl mb-3">{action.icon}</div>
                                <p className="font-semibold text-lg">{action.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;