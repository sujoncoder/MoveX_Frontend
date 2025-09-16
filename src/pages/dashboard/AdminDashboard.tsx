const AdminDashboard = () => {
    const stats = [
        {
            title: "Total Parcels",
            value: "1,234",
            color: "text-blue-600",
            subtitle: "+12% from last month",
        },
        {
            title: "Active Users",
            value: "567",
            color: "text-green-600",
            subtitle: "+8% from last month",
        },
        {
            title: "Revenue",
            value: "৳45,678",
            color: "text-purple-600",
            subtitle: "+15% from last month",
        },
        {
            title: "Pending Deliveries",
            value: "89",
            color: "text-orange-600",
            subtitle: "-5% from last month",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-md">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {item.title}
                    </h3>
                    <p className={`text-3xl font-bold ${item.color}`}>
                        {item.value}
                    </p>
                    <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
            ))}
        </div >
    );
};
export default AdminDashboard;