// ROLE CONFIgURATION FOR DASHBOARD
export const roleConfig = {
    ADMIN: {
        title: 'Admin Dashboard',
        color: 'blue',
        icon: '👨‍💼',
        stats: [
            { label: 'Total Parcels', value: '1,234', icon: '📦', change: '+12%', color: 'blue' },
            { label: 'Active Users', value: '456', icon: '👥', change: '+8%', color: 'green' },
            { label: 'Pending Deliveries', value: '89', icon: '🚚', change: '-5%', color: 'yellow' },
            { label: 'Revenue', value: '$45,678', icon: '💰', change: '+15%', color: 'purple' }
        ],
        quickActions: [
            { title: 'Manage Users', icon: '👥', path: '/admin/users', color: 'bg-blue-500' },
            { title: 'View Reports', icon: '📊', path: '/admin/reports', color: 'bg-green-500' },
            { title: 'All Parcels', icon: '📦', path: '/admin/parcels', color: 'bg-purple-500' },
            { title: 'Settings', icon: '⚙️', path: '/admin/settings', color: 'bg-gray-500' }
        ]
    },
    SENDER: {
        title: 'Sender Dashboard',
        color: 'green',
        icon: '📤',
        stats: [
            { label: 'Sent Parcels', value: '24', icon: '📦', change: '+3', color: 'green' },
            { label: 'In Transit', value: '12', icon: '🚚', change: '-2', color: 'yellow' },
            { label: 'Delivered', value: '8', icon: '✅', change: '+5', color: 'blue' },
            { label: 'Pending', value: '4', icon: '⏳', change: '0', color: 'orange' }
        ],
        quickActions: [
            { title: 'Create Parcel', icon: '➕', path: '/sender/create-parcel', color: 'bg-green-500' },
            { title: 'My Parcels', icon: '📦', path: '/sender/my-parcels', color: 'bg-blue-500' },
            { title: 'Track Parcel', icon: '🔍', path: '/sender/tracking', color: 'bg-purple-500' },
            { title: 'Profile', icon: '👤', path: '/sender/profile', color: 'bg-gray-500' }
        ]
    },
    RECEIVER: {
        title: 'Receiver Dashboard',
        color: 'purple',
        icon: '📥',
        stats: [
            { label: 'Incoming', value: '8', icon: '📦', change: '+2', color: 'purple' },
            { label: 'In Transit', value: '5', icon: '🚚', change: '+1', color: 'yellow' },
            { label: 'Received', value: '15', icon: '✅', change: '+3', color: 'green' },
            { label: 'Total', value: '28', icon: '📊', change: '+6', color: 'blue' }
        ],
        quickActions: [
            { title: 'Incoming Parcels', icon: '📥', path: '/receiver/incoming', color: 'bg-purple-500' },
            { title: 'Received History', icon: '📋', path: '/receiver/received', color: 'bg-blue-500' },
            { title: 'Track Parcel', icon: '🔍', path: '/receiver/tracking', color: 'bg-green-500' },
            { title: 'Profile', icon: '👤', path: '/receiver/profile', color: 'bg-gray-500' }
        ]
    }
};