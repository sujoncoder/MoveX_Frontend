export interface ITrackingData {
    trackingNumber: string;
    status: string;
    currentLocation: string;
    estimatedDelivery: string;
    sender: {
        name: string;
        location: string;
        date: string;
    };
    receiver: {
        name: string;
        location: string;
        phone: string;
    };
    parcel: {
        type: string;
        weight: string;
        description: string;
        value: string;
    };
    timeline: Array<{
        status: string;
        location: string;
        date: string;
        time: string;
        description: string;
        completed: boolean;
        current?: boolean;
    }>;
};

export const parcelData = {
    trackingNumber: 'MX123456789',
    status: 'in-transit',
    currentLocation: 'Chicago Distribution Center',
    estimatedDelivery: 'Nov 10, 2025',
    sender: {
        name: 'John Doe',
        location: 'New York, NY 10001',
        date: 'Nov 5, 2025'
    },
    receiver: {
        name: 'Jane Smith',
        location: 'Los Angeles, CA 90001',
        phone: '+1 234 567 8900'
    },
    parcel: {
        type: 'Package',
        weight: '2.5 kg',
        description: 'Electronics - Laptop',
        value: '$1,200.00'
    },
    timeline: [
        {
            status: 'Order Placed',
            location: 'New York, NY',
            date: 'Nov 5, 2025',
            time: '10:30 AM',
            description: 'Parcel information received',
            completed: true
        },
        {
            status: 'Picked Up',
            location: 'New York Distribution Center',
            date: 'Nov 5, 2025',
            time: '2:45 PM',
            description: 'Package picked up by courier',
            completed: true
        },
        {
            status: 'In Transit',
            location: 'Chicago Distribution Center',
            date: 'Nov 7, 2025',
            time: '9:15 AM',
            description: 'Package in transit to destination',
            completed: true,
            current: true
        },
        {
            status: 'Out for Delivery',
            location: 'Los Angeles, CA',
            date: 'Nov 10, 2025',
            time: '8:00 AM',
            description: 'Out for delivery',
            completed: false
        },
        {
            status: 'Delivered',
            location: 'Los Angeles, CA 90001',
            date: 'Nov 10, 2025',
            time: '12:00 PM',
            description: 'Package delivered successfully',
            completed: false
        }
    ]
};