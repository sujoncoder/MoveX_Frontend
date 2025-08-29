const SenderDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Parcels Sent</h3>
                <p className="text-3xl font-bold text-blue-600">23</p>
                <p className="text-sm text-gray-500">This month</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">In Transit</h3>
                <p className="text-3xl font-bold text-orange-600">5</p>
                <p className="text-sm text-gray-500">Currently moving</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivered</h3>
                <p className="text-3xl font-bold text-green-600">18</p>
                <p className="text-sm text-gray-500">Successfully delivered</p>
            </div>
        </div>
    );
};

export default SenderDashboard;