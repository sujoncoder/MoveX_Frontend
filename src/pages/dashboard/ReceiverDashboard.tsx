const ReceiverDashboard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibent text-gray-800 mb-2">Incoming Parcels</h3>
                <p className="text-3xl font-bold text-blue-600">7</p>
                <p className="text-sm text-gray-500">On the way</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Received Today</h3>
                <p className="text-3xl font-bold text-green-600">3</p>
                <p className="text-sm text-gray-500">Successfully received</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Total Received</h3>
                <p className="text-3xl font-bold text-purple-600">45</p>
                <p className="text-sm text-gray-500">All time</p>
            </div>
        </div>
    );
};

export default ReceiverDashboard;