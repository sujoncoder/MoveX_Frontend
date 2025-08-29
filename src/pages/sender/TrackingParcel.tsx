import { useState } from "react";
import {
    Search,
    Package,
    Truck,
    MapPin,
    CheckCircle,
    Clock,
    AlertCircle,
    Eye,
    Copy,
    Phone,
    Mail
} from "lucide-react";

// Types
interface TrackingInfo {
    trackingId: string;
    status: 'pending' | 'picked' | 'in-transit' | 'out-for-delivery' | 'delivered' | 'cancelled';
    currentLocation: string;
    estimatedDelivery: string;
    sender: {
        name: string;
        phone: string;
        address: string;
    };
    receiver: {
        name: string;
        phone: string;
        address: string;
    };
    parcel: {
        weight: number;
        dimensions: string;
        type: string;
        description: string;
        value: number;
    };
    timeline: {
        id: number;
        status: string;
        description: string;
        location: string;
        timestamp: string;
        isCompleted: boolean;
    }[];
    charges: {
        deliveryFee: number;
        tax: number;
        total: number;
    };
}

// Mock data
const mockTrackingData: TrackingInfo = {
    trackingId: "MX2024001234",
    status: "in-transit",
    currentLocation: "Dhaka Distribution Center",
    estimatedDelivery: "2024-08-25 2:00 PM",
    sender: {
        name: "John Doe",
        phone: "+880 1712-345678",
        address: "House 123, Road 4, Dhanmondi, Dhaka-1205"
    },
    receiver: {
        name: "Jane Smith",
        phone: "+880 1987-654321",
        address: "Flat 5B, Building 10, Gulshan 2, Dhaka-1212"
    },
    parcel: {
        weight: 2.5,
        dimensions: "30x20x15 cm",
        type: "Electronics",
        description: "Mobile Phone",
        value: 25000
    },
    timeline: [
        {
            id: 1,
            status: "Order Created",
            description: "Parcel booking confirmed",
            location: "Online Platform",
            timestamp: "2024-08-23 10:30 AM",
            isCompleted: true
        },
        {
            id: 2,
            status: "Picked Up",
            description: "Parcel collected from sender",
            location: "Dhanmondi Branch",
            timestamp: "2024-08-23 2:15 PM",
            isCompleted: true
        },
        {
            id: 3,
            status: "In Transit",
            description: "Parcel is on the way to destination",
            location: "Dhaka Distribution Center",
            timestamp: "2024-08-24 9:00 AM",
            isCompleted: true
        },
        {
            id: 4,
            status: "Out for Delivery",
            description: "Parcel is out for final delivery",
            location: "Gulshan Delivery Hub",
            timestamp: "Pending",
            isCompleted: false
        },
        {
            id: 5,
            status: "Delivered",
            description: "Parcel successfully delivered",
            location: "Receiver Address",
            timestamp: "Pending",
            isCompleted: false
        }
    ],
    charges: {
        deliveryFee: 120,
        tax: 18,
        total: 138
    }
};

const TrackParcel: React.FC = () => {
    const [trackingId, setTrackingId] = useState<string>("");
    const [trackingData, setTrackingData] = useState<TrackingInfo | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const handleTrack = async () => {
        if (!trackingId.trim()) {
            setError("Please enter a tracking ID");
            return;
        }

        setIsLoading(true);
        setError("");

        // Simulate API call
        setTimeout(() => {
            if (trackingId === "MX2024001234") {
                setTrackingData(mockTrackingData);
            } else {
                setError("Tracking ID not found. Please check and try again.");
                setTrackingData(null);
            }
            setIsLoading(false);
        }, 1000);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'delivered': return 'text-green-600 bg-green-100';
            case 'in-transit': return 'text-blue-600 bg-blue-100';
            case 'pending': return 'text-yellow-600 bg-yellow-100';
            case 'cancelled': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        // You can add toast notification here
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Track Your Parcel</h2>
                <p className="text-gray-600">Enter your tracking ID to get real-time updates</p>
            </div>

            {/* Tracking Search */}
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tracking ID
                        </label>
                        <input
                            type="text"
                            value={trackingId}
                            onChange={(e) => setTrackingId(e.target.value)}
                            placeholder="Enter tracking ID (e.g., MX2024001234)"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                        />
                        {error && (
                            <p className="mt-2 text-sm text-red-600 flex items-center">
                                <AlertCircle size={16} className="mr-1" />
                                {error}
                            </p>
                        )}
                    </div>
                    <div className="flex items-end">
                        <button
                            onClick={handleTrack}
                            disabled={isLoading}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 transition-colors"
                        >
                            {isLoading ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    <span>Tracking...</span>
                                </>
                            ) : (
                                <>
                                    <Search size={20} />
                                    <span>Track Parcel</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Tracking Results */}
            {trackingData && (
                <div className="space-y-6">
                    {/* Status Overview */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {trackingData.trackingId}
                                    </h3>
                                    <button
                                        onClick={() => copyToClipboard(trackingData.trackingId)}
                                        className="p-1 hover:bg-gray-100 rounded transition-colors"
                                        title="Copy tracking ID"
                                    >
                                        <Copy size={16} />
                                    </button>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(trackingData.status)}`}>
                                    {trackingData.status.replace('-', ' ')}
                                </span>
                            </div>
                            <div className="mt-4 lg:mt-0 text-right">
                                <p className="text-sm text-gray-600">Estimated Delivery</p>
                                <p className="text-lg font-semibold text-gray-800">
                                    {trackingData.estimatedDelivery}
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                                <MapPin className="text-blue-600" size={20} />
                                <div>
                                    <p className="text-sm text-gray-600">Current Location</p>
                                    <p className="font-medium">{trackingData.currentLocation}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Package className="text-green-600" size={20} />
                                <div>
                                    <p className="text-sm text-gray-600">Package Type</p>
                                    <p className="font-medium">{trackingData.parcel.type}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tracking Timeline */}
                    <div className="bg-white rounded-lg shadow p-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-6">Tracking Timeline</h4>
                        <div className="space-y-4">
                            {trackingData.timeline.map((item, index) => (
                                <div key={item.id} className="flex items-start space-x-4">
                                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.isCompleted
                                        ? 'bg-green-100 text-green-600'
                                        : index === trackingData.timeline.findIndex(t => !t.isCompleted)
                                            ? 'bg-blue-100 text-blue-600'
                                            : 'bg-gray-100 text-gray-400'
                                        }`}>
                                        {item.isCompleted ? (
                                            <CheckCircle size={16} />
                                        ) : index === trackingData.timeline.findIndex(t => !t.isCompleted) ? (
                                            <Clock size={16} />
                                        ) : (
                                            <Clock size={16} />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                            <div>
                                                <p className="font-medium text-gray-800">{item.status}</p>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                                <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                                            </div>
                                            <div className="mt-1 sm:mt-0">
                                                <p className="text-sm text-gray-500">{item.timestamp}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Parcel Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Sender & Receiver Info */}
                        <div className="bg-white rounded-lg shadow p-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">Sender & Receiver</h4>

                            {/* Sender */}
                            <div className="mb-4">
                                <h5 className="font-medium text-gray-700 mb-2">From:</h5>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <p className="font-medium">{trackingData.sender.name}</p>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                                        <Phone size={14} />
                                        <span>{trackingData.sender.phone}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{trackingData.sender.address}</p>
                                </div>
                            </div>

                            {/* Receiver */}
                            <div>
                                <h5 className="font-medium text-gray-700 mb-2">To:</h5>
                                <div className="bg-gray-50 rounded-lg p-3">
                                    <p className="font-medium">{trackingData.receiver.name}</p>
                                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                                        <Phone size={14} />
                                        <span>{trackingData.receiver.phone}</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mt-1">{trackingData.receiver.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Package & Billing Info */}
                        <div className="space-y-6">
                            {/* Package Details */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Package Details</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Weight:</span>
                                        <span className="font-medium">{trackingData.parcel.weight} kg</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Dimensions:</span>
                                        <span className="font-medium">{trackingData.parcel.dimensions}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Type:</span>
                                        <span className="font-medium">{trackingData.parcel.type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Description:</span>
                                        <span className="font-medium">{trackingData.parcel.description}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Declared Value:</span>
                                        <span className="font-medium">৳{trackingData.parcel.value.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Billing Info */}
                            <div className="bg-white rounded-lg shadow p-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Billing Information</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Delivery Fee:</span>
                                        <span>৳{trackingData.charges.deliveryFee}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Tax & VAT:</span>
                                        <span>৳{trackingData.charges.tax}</span>
                                    </div>
                                    <hr className="border-gray-200" />
                                    <div className="flex justify-between font-semibold text-lg">
                                        <span>Total:</span>
                                        <span className="text-blue-600">৳{trackingData.charges.total}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TrackParcel;