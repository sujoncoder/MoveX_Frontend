import { analyticsData } from '../../../data/analyticsData';

const Analytics = () => {
    const { overview, parcelStatus, monthlyData, topDestinations, userRoles } = analyticsData;

    const getChangeColor = (change: string) => {
        return change.startsWith('+') ? 'text-green-600' : 'text-red-600';
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="p-4 md:p-6 bg-white rounded-xl min-h-full">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600">Comprehensive insights into your delivery operations</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-blue-100 text-sm">Total Parcels</p>
                            <p className="text-2xl font-bold">{overview.totalParcels.toLocaleString()}</p>
                            <p className={`text-sm ${getChangeColor(overview.growth.parcels)}`}>
                                {overview.growth.parcels} from last month
                            </p>
                        </div>
                        <div className="text-4xl">📦</div>
                    </div>
                </div>

                <div className="bg-linear-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-green-100 text-sm">Active Users</p>
                            <p className="text-2xl font-bold">{overview.activeUsers.toLocaleString()}</p>
                            <p className={`text-sm ${getChangeColor(overview.growth.users)}`}>
                                {overview.growth.users} from last month
                            </p>
                        </div>
                        <div className="text-4xl">👥</div>
                    </div>
                </div>

                <div className="bg-linear-to-r from-yellow-500 to-yellow-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-yellow-100 text-sm">Pending Deliveries</p>
                            <p className="text-2xl font-bold">{overview.pendingDeliveries.toLocaleString()}</p>
                            <p className={`text-sm ${getChangeColor(overview.growth.deliveries)}`}>
                                {overview.growth.deliveries} from last month
                            </p>
                        </div>
                        <div className="text-4xl">🚚</div>
                    </div>
                </div>

                <div className="bg-linear-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-purple-100 text-sm">Revenue</p>
                            <p className="text-2xl font-bold">{formatCurrency(overview.revenue)}</p>
                            <p className={`text-sm ${getChangeColor(overview.growth.revenue)}`}>
                                {overview.growth.revenue} from last month
                            </p>
                        </div>
                        <div className="text-4xl">💰</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Parcel Status Chart */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Parcel Status Distribution</h3>
                    <div className="space-y-4">
                        {parcelStatus.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-4 h-4 rounded ${item.color}`}></div>
                                    <span className="text-sm font-medium text-gray-700">{item.status}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">{item.count}</span>
                                    <span className="text-xs text-gray-500">({item.percentage}%)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '72.4%' }}></div>
                    </div>
                </div>

                {/* User Roles Chart */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">User Roles Distribution</h3>
                    <div className="space-y-4">
                        {userRoles.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-4 h-4 rounded ${item.color}`}></div>
                                    <span className="text-sm font-medium text-gray-700">{item.role}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">{item.count}</span>
                                    <span className="text-xs text-gray-500">({item.percentage}%)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '51.3%' }}></div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Trends */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Monthly Trends</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="text-left py-2 text-sm font-medium text-gray-500">Month</th>
                                    <th className="text-left py-2 text-sm font-medium text-gray-500">Parcels</th>
                                    <th className="text-left py-2 text-sm font-medium text-gray-500">Users</th>
                                    <th className="text-left py-2 text-sm font-medium text-gray-500">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {monthlyData.slice(-6).map((item, index) => (
                                    <tr key={index} className="border-b border-gray-100">
                                        <td className="py-2 text-sm text-gray-900">{item.month}</td>
                                        <td className="py-2 text-sm text-gray-900">{item.parcels}</td>
                                        <td className="py-2 text-sm text-gray-900">{item.users}</td>
                                        <td className="py-2 text-sm text-gray-900">{formatCurrency(item.revenue)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Destinations */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Destinations</h3>
                    <div className="space-y-3">
                        {topDestinations.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <span className="text-sm font-medium text-gray-500 w-6">{index + 1}.</span>
                                    <span className="text-sm font-medium text-gray-900">{item.city}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span className="text-sm text-gray-600">{item.parcels}</span>
                                    <span className="text-xs text-gray-500">({item.percentage}%)</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;