const ReceiverDashboard = () => {
    const stats = [
        {
            title: "Incoming Parcels",
            value: 7,
            color: "text-blue-600",
            subtitle: "On the way",
        },
        {
            title: "Received Today",
            value: 3,
            color: "text-green-600",
            subtitle: "Successfully received",
        },
        {
            title: "Total Received",
            value: 45,
            color: "text-purple-600",
            subtitle: "All time",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((item, index) => (
                <div
                    key={index}
                    className="bg-white p-5 rounded-md"
                >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                    </h3>
                    <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
            ))}
        </div>
    );
};

export default ReceiverDashboard;