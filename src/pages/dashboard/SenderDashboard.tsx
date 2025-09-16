const SenderDashboard = () => {
    const stats = [
        {
            title: "Parcels Sent",
            value: 23,
            color: "text-blue-600",
            subtitle: "This month",
        },
        {
            title: "In Transit",
            value: 5,
            color: "text-orange-600",
            subtitle: "Currently moving",
        },
        {
            title: "Delivered",
            value: 18,
            color: "text-green-600",
            subtitle: "Successfully delivered",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {stats.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className={`text-3xl font-bold ${item.color}`}>{item.value}</p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
            ))}
        </div>
    );
};
export default SenderDashboard;