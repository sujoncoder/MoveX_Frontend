export const analyticsData = {
    overview: {
        totalParcels: 1234,
        activeUsers: 456,
        pendingDeliveries: 89,
        revenue: 45678,
        growth: {
            parcels: '+12%',
            users: '+8%',
            deliveries: '-5%',
            revenue: '+15%'
        }
    },
    parcelStatus: [
        { status: 'Delivered', count: 892, percentage: 72.4, color: 'bg-green-500' },
        { status: 'In Transit', count: 234, percentage: 19.0, color: 'bg-blue-500' },
        { status: 'Pending', count: 89, percentage: 7.2, color: 'bg-yellow-500' },
        { status: 'Cancelled', count: 19, percentage: 1.4, color: 'bg-red-500' }
    ],
    monthlyData: [
        { month: 'Jan', parcels: 120, users: 45, revenue: 4200 },
        { month: 'Feb', parcels: 135, users: 52, revenue: 4800 },
        { month: 'Mar', parcels: 148, users: 61, revenue: 5200 },
        { month: 'Apr', parcels: 162, users: 68, revenue: 5800 },
        { month: 'May', parcels: 175, users: 72, revenue: 6200 },
        { month: 'Jun', parcels: 189, users: 78, revenue: 6800 },
        { month: 'Jul', parcels: 201, users: 85, revenue: 7200 },
        { month: 'Aug', parcels: 215, users: 92, revenue: 7800 },
        { month: 'Sep', parcels: 228, users: 98, revenue: 8200 },
        { month: 'Oct', parcels: 245, users: 105, revenue: 8800 },
        { month: 'Nov', parcels: 267, users: 112, revenue: 9200 },
        { month: 'Dec', parcels: 289, users: 120, revenue: 9800 }
    ],
    topDestinations: [
        { city: 'Dhaka', parcels: 345, percentage: 28.0 },
        { city: 'Chittagong', parcels: 234, percentage: 19.0 },
        { city: 'Sylhet', parcels: 156, percentage: 12.6 },
        { city: 'Khulna', parcels: 123, percentage: 10.0 },
        { city: 'Rajshahi', parcels: 98, percentage: 7.9 },
        { city: 'Barisal', parcels: 76, percentage: 6.2 },
        { city: 'Rangpur', parcels: 65, percentage: 5.3 },
        { city: 'Mymensingh', parcels: 54, percentage: 4.4 }
    ],
    userRoles: [
        { role: 'Senders', count: 234, percentage: 51.3, color: 'bg-green-500' },
        { role: 'Receivers', count: 189, percentage: 41.4, color: 'bg-blue-500' },
        { role: 'Admins', count: 33, percentage: 7.3, color: 'bg-purple-500' }
    ]
};