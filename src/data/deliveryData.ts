export interface IDelivery {
    id: number;
    trackingNumber: string;
    sender: string;
    senderLocation: string;
    status: string;
    deliveryDate: string;
    deliveryTime: string;
    orderDate: string;
    items: string;
    weight: string;
    signature: string;
    courier: string;
    type: string;
};


export const deliveryData = [
    {
        id: 1,
        trackingNumber: 'MX123456789',
        sender: 'John Electronics',
        senderLocation: 'New York, NY',
        status: 'delivered',
        deliveryDate: 'Nov 3, 2025',
        deliveryTime: '2:30 PM',
        orderDate: 'Oct 28, 2025',
        items: 'Laptop Computer',
        weight: '2.5 kg',
        signature: 'Jane Smith',
        courier: 'MoveX Express',
        type: 'Electronics'
    },
    {
        id: 2,
        trackingNumber: 'MX987654321',
        sender: 'Fashion Store Inc.',
        senderLocation: 'Los Angeles, CA',
        status: 'delivered',
        deliveryDate: 'Oct 28, 2025',
        deliveryTime: '11:45 AM',
        orderDate: 'Oct 22, 2025',
        items: 'Clothing Package',
        weight: '1.2 kg',
        signature: 'Jane Smith',
        courier: 'MoveX Standard',
        type: 'Apparel'
    },
    {
        id: 3,
        trackingNumber: 'MX456789123',
        sender: 'Book World',
        senderLocation: 'Chicago, IL',
        status: 'delivered',
        deliveryDate: 'Oct 20, 2025',
        deliveryTime: '4:15 PM',
        orderDate: 'Oct 15, 2025',
        items: 'Books Bundle',
        weight: '3.8 kg',
        signature: 'Jane Smith',
        courier: 'MoveX Standard',
        type: 'Books'
    },
    {
        id: 4,
        trackingNumber: 'MX789123456',
        sender: 'Home Essentials',
        senderLocation: 'Seattle, WA',
        status: 'delivered',
        deliveryDate: 'Oct 15, 2025',
        deliveryTime: '10:00 AM',
        orderDate: 'Oct 10, 2025',
        items: 'Kitchen Appliance',
        weight: '5.2 kg',
        signature: 'Jane Smith',
        courier: 'MoveX Express',
        type: 'Home & Garden'
    },
    {
        id: 5,
        trackingNumber: 'MX321654987',
        sender: 'Tech Gadgets Co.',
        senderLocation: 'San Francisco, CA',
        status: 'delivered',
        deliveryDate: 'Oct 8, 2025',
        deliveryTime: '3:20 PM',
        orderDate: 'Oct 1, 2025',
        items: 'Smartphone Accessories',
        weight: '0.8 kg',
        signature: 'Jane Smith',
        courier: 'MoveX Standard',
        type: 'Electronics'
    }
];