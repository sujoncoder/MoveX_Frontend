import React, { useState } from 'react';
import { IconSearch, IconPlus, IconPackage, IconTruck, IconCircleCheck, IconClock, IconEye, IconMapPin, IconCalendar, IconPhone } from '@tabler/icons-react';

interface Parcel {
    _id: string;
    trackingCode: string;
    recipientName: string;
    recipientPhone: string;
    recipientAddress: string;
    senderAddress: string;
    status: string;
    createdAt: string;
    deliveryDate?: string;
    weight: string;
    price: number;
}

const MyParcels: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    const parcels: Parcel[] = [
        {
            _id: '65f1a2b3c4d5e6f7a8b9c0d1',
            trackingCode: 'TRK123456789',
            recipientName: 'John Doe',
            recipientPhone: '01777-123456',
            recipientAddress: 'House 12, Road 3, Dhanmondi, Dhaka',
            senderAddress: 'Shop 25, New Market, Jessore',
            status: 'delivered',
            createdAt: '2024-01-15T10:30:00.000Z',
            deliveryDate: '2024-01-18T14:20:00.000Z',
            weight: '2.5 kg',
            price: 150,
        },
        {
            _id: '65f1a2b3c4d5e6f7a8b9c0d2',
            trackingCode: 'TRK987654321',
            recipientName: 'Maria Rahman',
            recipientPhone: '01888-789012',
            recipientAddress: 'House 45, Block B, Bashundhara, Dhaka',
            senderAddress: 'Shop 25, New Market, Jessore',
            status: 'in-transit',
            createdAt: '2024-01-20T09:15:00.000Z',
            weight: '1.2 kg',
            price: 120,
        },
        {
            _id: '65f1a2b3c4d5e6f7a8b9c0d3',
            trackingCode: 'TRK456789123',
            recipientName: 'Ahmed Hassan',
            recipientPhone: '01999-456789',
            recipientAddress: 'Flat 3B, Green Heights, Chittagong',
            senderAddress: 'Shop 25, New Market, Jessore',
            status: 'processing',
            createdAt: '2024-01-22T11:45:00.000Z',
            weight: '3.1 kg',
            price: 180,
        },
        {
            _id: '65f1a2b3c4d5e6f7a8b9c0d4',
            trackingCode: 'TRK789123456',
            recipientName: 'Fatima Khan',
            recipientPhone: '01666-321654',
            recipientAddress: 'House 78, Agrabad, Chittagong',
            senderAddress: 'Shop 25, New Market, Jessore',
            status: 'pending',
            createdAt: '2024-01-23T16:20:00.000Z',
            weight: '0.8 kg',
            price: 100,
        },
    ];

    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        processing: 'bg-blue-100 text-blue-800 border-blue-200',
        'in-transit': 'bg-purple-100 text-purple-800 border-purple-200',
        delivered: 'bg-green-100 text-green-800 border-green-200',
    };

    const statusIcons = {
        pending: IconClock,
        processing: IconPackage,
        'in-transit': IconTruck,
        delivered: IconCircleCheck,
    };

    const filteredParcels = parcels.filter(parcel => {
        const matchesSearch = parcel.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            parcel.trackingCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            parcel.recipientPhone.includes(searchTerm);
        const matchesStatus = statusFilter === 'all' || parcel.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const StatusBadge = ({ status }: { status: string }) => {
        const Icon = statusIcons[status as keyof typeof statusIcons];
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${statusColors[status as keyof typeof statusColors]}`}>
                <Icon className="w-3 h-3" />
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </span>
        );
    };

    return (
        <div className="p-4 max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Parcels</h1>
                    <p className="text-gray-600">Track and manage your sent parcels</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                    <IconPlus className="w-4 h-4" />
                    Send New Parcel
                </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <IconPackage className="w-4 h-4 text-blue-600" />
                        </div>
                        <p className="text-xl font-bold text-gray-900">{parcels.length}</p>
                        <p className="text-xs text-gray-600">Total</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <IconCircleCheck className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-xl font-bold text-gray-900">{parcels.filter(p => p.status === 'delivered').length}</p>
                        <p className="text-xs text-gray-600">Delivered</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <IconTruck className="w-4 h-4 text-purple-600" />
                        </div>
                        <p className="text-xl font-bold text-gray-900">{parcels.filter(p => p.status === 'in-transit').length}</p>
                        <p className="text-xs text-gray-600">In Transit</p>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <div className="text-center">
                        <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <IconClock className="w-4 h-4 text-yellow-600" />
                        </div>
                        <p className="text-xl font-bold text-gray-900">{parcels.filter(p => p.status === 'pending').length}</p>
                        <p className="text-xs text-gray-600">Pending</p>
                    </div>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                        <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by recipient, tracking code..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[140px]"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="pending">Pending</option>
                        <option value="processing">Processing</option>
                        <option value="in-transit">In Transit</option>
                        <option value="delivered">Delivered</option>
                    </select>
                </div>
            </div>

            {/* Parcels List */}
            <div className="space-y-4">
                {filteredParcels.length === 0 ? (
                    <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
                        <IconPackage className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600">No parcels found</p>
                        <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filter</p>
                    </div>
                ) : (
                    filteredParcels.map((parcel) => (
                        <div key={parcel._id} className="bg-white rounded-lg shadow-sm border overflow-hidden">
                            {/* Desktop View */}
                            <div className="hidden md:block">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                                <IconPackage className="w-6 h-6 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900">{parcel.trackingCode}</h3>
                                                <p className="text-sm text-gray-500">To: {parcel.recipientName}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <StatusBadge status={parcel.status} />
                                            <button className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-50">
                                                <IconEye className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-600 mb-1">Recipient Details</p>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <IconPhone className="w-3 h-3 text-gray-400" />
                                                    <span>{parcel.recipientPhone}</span>
                                                </div>
                                                <div className="flex items-start gap-2">
                                                    <IconMapPin className="w-3 h-3 text-gray-400 mt-0.5" />
                                                    <span className="text-xs">{parcel.recipientAddress}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-gray-600 mb-1">Parcel Info</p>
                                            <div className="space-y-1">
                                                <p>Weight: <span className="font-medium">{parcel.weight}</span></p>
                                                <p>Price: <span className="font-medium">৳{parcel.price}</span></p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-gray-600 mb-1">Timeline</p>
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <IconCalendar className="w-3 h-3 text-gray-400" />
                                                    <span className="text-xs">Sent: {formatDate(parcel.createdAt)}</span>
                                                </div>
                                                {parcel.deliveryDate && (
                                                    <div className="flex items-center gap-2">
                                                        <IconCircleCheck className="w-3 h-3 text-green-400" />
                                                        <span className="text-xs">Delivered: {formatDate(parcel.deliveryDate)}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile View */}
                            <div className="md:hidden p-4">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{parcel.trackingCode}</h3>
                                        <p className="text-sm text-gray-600">To: {parcel.recipientName}</p>
                                    </div>
                                    <StatusBadge status={parcel.status} />
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <IconPhone className="w-3 h-3 text-gray-400" />
                                            <span className="text-sm">{parcel.recipientPhone}</span>
                                        </div>
                                        <div className="flex items-start gap-2">
                                            <IconMapPin className="w-3 h-3 text-gray-400 mt-0.5" />
                                            <span className="text-xs text-gray-600">{parcel.recipientAddress}</span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span>Weight: <span className="font-medium">{parcel.weight}</span></span>
                                        <span>Price: <span className="font-medium">৳{parcel.price}</span></span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <IconCalendar className="w-3 h-3" />
                                            <span>{formatDate(parcel.createdAt)}</span>
                                        </div>
                                        <button className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-50">
                                            <IconEye className="w-4 h-4" />
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