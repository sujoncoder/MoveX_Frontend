const AdminDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Parcels</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
                <p className="text-sm text-gray-500">+12% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Active Users</h3>
                <p className="text-3xl font-bold text-green-600">567</p>
                <p className="text-sm text-gray-500">+8% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-purple-600">৳45,678</p>
                <p className="text-sm text-gray-500">+15% from last month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Pending Deliveries</h3>
                <p className="text-3xl font-bold text-orange-600">89</p>
                <p className="text-sm text-gray-500">-5% from last month</p>
            </div>
        </div>
    );
};

export default AdminDashboard;