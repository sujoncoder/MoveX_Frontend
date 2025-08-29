import { useState } from "react";
import {
    Package,
    Eye,
    CheckCircle,
    Clock,
    Truck,
    AlertCircle,
    Search,
    Filter,
    MapPin,
    User,
    Phone,
    Calendar,
    Download,
    Star,
    MessageCircle
} from "lucide-react";

// Types
interface Parcel {
    id: string;
    trackingId: string;
    status: 'incoming' | 'out-for-delivery' | 'delivered' | 'failed-delivery' | 'returned';
    sender: {
        name: string;
        phone: string;
        address: string;
    };
    parcel: {
        type: string;
        description: string;
        weight: number;
        value: number;
        dimensions: string;
    };
    deliveryDate: string;
    expectedDelivery: string;
    currentLocation: string;
    deliveryAttempts: number;
    deliveryInstructions?: string;
    rating?: number;
    feedback?: string;
    deliveryProof?: string;
    charges: {
        codAmount?: number;
        deliveryFee: number;
        total: number;
    };
}

// Mock data
const mockParcels: Parcel[] = [
    {
        id: "1",
        trackingId: "MX2024001234",
        status: "out-for-delivery",
        sender: {
            name: "TechStore Bangladesh",
            phone: "+880 1712-345678",
            address: "Shop 15, New Market, Dhaka"
        },
        parcel: {
            type: "Electronics",
            description: "Smartphone - Samsung Galaxy A54",
            weight: 0.5,
            value: 35000,
            dimensions: "15x8x2 cm"
        },
        deliveryDate: "",
        expectedDelivery: "2024-08-25 2:00 PM",
        currentLocation: "Gulshan Delivery Hub",
        deliveryAttempts: 0,
        deliveryInstructions: "Call before delivery. Ring doorbell twice.",
        charges: {
            codAmount: 35000,
            deliveryFee: 120,
            total: 35120
        }
    },
    {
        id: "2",
        trackingId: "MX2024001235",
        status: "delivered",
        sender: {
            name: "Fashion House",
            phone: "+880 1987-654321",
            address: "Elephant Road, Dhaka"
        },
        parcel: {
            type: "Clothing",
            description: "Cotton T-Shirt - Size L",
            weight: 0.3,
            value: 1200,
            dimensions: "25x20x3 cm"
        },
        deliveryDate: "2024-08-23 4:30 PM",
        expectedDelivery: "2024-08-23 5:00 PM",
        currentLocation: "Delivered",
        deliveryAttempts: 1,
        rating: 5,
        feedback: "Great service! On time delivery.",
        deliveryProof: "signature_image.jpg",
        charges: {
            codAmount: 1200,
            deliveryFee: 80,
            total: 1280
        }
    },
    {
        id: "3",
        trackingId: "MX2024001236",
        status: "incoming",
        sender: {
            name: "Book Corner",
            phone: "+880 1555-123456",
            address: "Nilkhet Book Market, Dhaka"
        },
        parcel: {
            type: "Books",
            description: "Programming Books (3 pieces)",
            weight: 1.2,
            value: 2500,
            dimensions: "30x25x8 cm"
        },
        deliveryDate: "",
        expectedDelivery: "2024-08-26 10:00 AM",
        currentLocation: "Dhaka Sorting Center",
        deliveryAttempts: 0,
        charges: {
            deliveryFee: 100,
            total: 100
        }
    },
    {
        id: "4",
        trackingId: "MX2024001237",
        status: "failed-delivery",
        sender: {
            name: "Home Appliances Ltd",
            phone: "+880 1777-888999",
            address: "Dhanmondi 27, Dhaka"
        },
        parcel: {
            type: "Appliance",
            description: "Rice Cooker - 1.8L",
            weight: 2.5,
            value: 4500,
            dimensions: "35x30x20 cm"
        },
        deliveryDate: "",
        expectedDelivery: "2024-08-24 3:00 PM",
        currentLocation: "Failed - Customer Unavailable",
        deliveryAttempts: 2,
        deliveryInstructions: "Leave with security guard if not available",
        charges: {
            codAmount: 4500,
            deliveryFee: 150,
            total: 4650
        }
    }
];

const MyParcels: React.FC = () => {
    const [parcels, setParcels] = useState<Parcel[]>(mockParcels);
    const [filteredParcels, setFilteredParcels] = useState<Parcel[]>(mockParcels);
    const [selectedStatus, setSelectedStatus] = useState<string>("all");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [showFilters, setShowFilters] = useState(false);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
            case 'out-for-delivery': return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'incoming': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'failed-delivery': return 'bg-red-100 text-red-800 border-red-200';
            case 'returned': return 'bg-gray-100 text-gray-800 border-gray-200';
            default: return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'delivered': return <CheckCircle size={16} />;
            case 'out-for-delivery': return <Truck size={16} />;
            case 'incoming': return <Package size={16} />;
            case 'failed-delivery': return <AlertCircle size={16} />;
            case 'returned': return <AlertCircle size={16} />;
            default: return <Clock size={16} />;
        }
    };

    const handleStatusFilter = (status: string) => {
        setSelectedStatus(status);
        filterParcels(status, searchQuery);
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        filterParcels(selectedStatus, query);
    };

    const filterParcels = (status: string, query: string) => {
        let filtered = parcels;

        if (status !== "all") {
            filtered = filtered.filter(parcel => parcel.status === status);
        }

        if (query) {
            filtered = filtered.filter(parcel =>
                parcel.trackingId.toLowerCase().includes(query.toLowerCase()) ||
                parcel.sender.name.toLowerCase().includes(query.toLowerCase()) ||
                parcel.parcel.description.toLowerCase().includes(query.toLowerCase())
            );
        }

        setFilteredParcels(filtered);
    };

    const handleConfirmDelivery = (parcelId: string) => {
        // This would call API to confirm delivery
        console.log("Confirming delivery for:", parcelId);
    };

    const handleReschedule = (parcelId: string) => {
        // This would open reschedule modal
        console.log("Rescheduling delivery for:", parcelId);
    };

    const statusCounts = {
        all: parcels.length,
        incoming: parcels.filter(p => p.status === 'incoming').length,
        'out-for-delivery': parcels.filter(p => p.status === 'out-for-delivery').length,
        delivered: parcels.filter(p => p.status === 'delivered').length,
        'failed-delivery': parcels.filter(p => p.status === 'failed-delivery').length,
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">My Parcels</h2>
                <p className="text-gray-600">Track and manage your incoming and delivered parcels</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold text-blue-600">{statusCounts.incoming}</p>
                            <p className="text-sm text-gray-600">Incoming</p>
                        </div>
                        <Package className="text-blue-600" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold text-orange-600">{statusCounts['out-for-delivery']}</p>
                            <p className="text-sm text-gray-600">Out for Delivery</p>
                        </div>
                        <Truck className="text-orange-600" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold text-green-600">{statusCounts.delivered}</p>
                            <p className="text-sm text-gray-600">Delivered</p>
                        </div>
                        <CheckCircle className="text-green-600" size={24} />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-2xl font-bold text-red-600">{statusCounts['failed-delivery']}</p>
                            <p className="text-sm text-gray-600">Failed</p>
                        </div>
                        <AlertCircle className="text-red-600" size={24} />
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Search */}
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search by tracking ID, sender, or description..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Status Filter */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            { key: 'all', label: 'All' },
                            { key: 'incoming', label: 'Incoming' },
                            { key: 'out-for-delivery', label: 'Out for Delivery' },
                            { key: 'delivered', label: 'Delivered' },
                            { key: 'failed-delivery', label: 'Failed' }
                        ].map(filter => (
                            <button
                                key={filter.key}
                                onClick={() => handleStatusFilter(filter.key)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${selectedStatus === filter.key
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {filter.label} ({statusCounts[filter.key] || 0})
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Parcels List */}
            <div className="space-y-4">
                {filteredParcels.length === 0 ? (
                    <div className="bg-white rounded-lg shadow p-12 text-center">
                        <Package size={48} className="mx-auto text-gray-400 mb-4" />
                        <h3 className="text-lg font-medium text-gray-800 mb-2">No parcels found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                    </div>
                ) : (
                    filteredParcels.map((parcel) => (
                        <div key={parcel.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Left Section - Parcel Info */}
                                <div className="flex-1 space-y-4">
                                    {/* Header */}
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-lg font-semibold text-gray-800">
                                                {parcel.trackingId}
                                            </h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(parcel.status)}`}>
                                                <div className="flex items-center space-x-1">
                                                    {getStatusIcon(parcel.status)}
                                                    <span className="capitalize">{parcel.status.replace('-', ' ')}</span>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                                <Eye size={16} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Parcel Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-gray-800 mb-2">{parcel.parcel.description}</h4>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <User size={14} />
                                                    <span>From: {parcel.sender.name}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Phone size={14} />
                                                    <span>{parcel.sender.phone}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Package size={14} />
                                                    <span>{parcel.parcel.weight}kg • {parcel.parcel.dimensions}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <div className="flex items-center space-x-2">
                                                    <MapPin size={14} />
                                                    <span>{parcel.currentLocation}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Calendar size={14} />
                                                    <span>
                                                        {parcel.deliveryDate
                                                            ? `Delivered: ${parcel.deliveryDate}`
                                                            : `Expected: ${parcel.expectedDelivery}`
                                                        }
                                                    </span>
                                                </div>
                                                {parcel.deliveryAttempts > 0 && (
                                                    <div className="flex items-center space-x-2">
                                                        <AlertCircle size={14} />
                                                        <span>Delivery attempts: {parcel.deliveryAttempts}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Delivery Instructions */}
                                    {parcel.deliveryInstructions && (
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                            <p className="text-sm text-blue-800">
                                                <strong>Delivery Instructions:</strong> {parcel.deliveryInstructions}
                                            </p>
                                        </div>
                                    )}

                                    {/* Rating & Feedback for delivered parcels */}
                                    {parcel.status === 'delivered' && parcel.rating && (
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={16}
                                                            className={i < parcel.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-sm font-medium text-green-800">Rated {parcel.rating}/5</span>
                                            </div>
                                            {parcel.feedback && (
                                                <p className="text-sm text-green-700">"{parcel.feedback}"</p>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Right Section - Payment & Actions */}
                                <div className="lg:w-80 space-y-4">
                                    {/* Payment Info */}
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="font-medium text-gray-800 mb-3">Payment Details</h4>
                                        <div className="space-y-2 text-sm">
                                            {parcel.charges.codAmount && (
                                                <div className="flex justify-between">
                                                    <span className="text-gray-600">COD Amount:</span>
                                                    <span className="font-medium">৳{parcel.charges.codAmount.toLocaleString()}</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between">
                                                <span className="text-gray-600">Delivery Fee:</span>
                                                <span className="font-medium">৳{parcel.charges.deliveryFee}</span>
                                            </div>
                                            <hr className="border-gray-200" />
                                            <div className="flex justify-between font-medium text-base">
                                                <span>Total:</span>
                                                <span className="text-blue-600">৳{parcel.charges.total.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="space-y-2">
                                        {parcel.status === 'out-for-delivery' && (
                                            <>
                                                <button
                                                    onClick={() => handleConfirmDelivery(parcel.id)}
                                                    className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                                                >
                                                    Confirm Delivery
                                                </button>
                                                <button
                                                    onClick={() => handleReschedule(parcel.id)}
                                                    className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                                                >
                                                    Reschedule Delivery
                                                </button>
                                            </>
                                        )}

                                        {parcel.status === 'failed-delivery' && (
                                            <button
                                                onClick={() => handleReschedule(parcel.id)}
                                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                            >
                                                Reschedule Delivery
                                            </button>
                                        )}

                                        {parcel.status === 'delivered' && (
                                            <>
                                                {parcel.deliveryProof && (
                                                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                                                        <Download size={16} />
                                                        <span>Download Proof</span>
                                                    </button>
                                                )}
                                                {!parcel.rating && (
                                                    <button className="w-full bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2">
                                                        <Star size={16} />
                                                        <span>Rate Delivery</span>
                                                    </button>
                                                )}
                                            </>
                                        )}

                                        <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                                            <MessageCircle size={16} />
                                            <span>Contact Support</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MyParcels;