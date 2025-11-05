import { deliveryData, IDelivery } from '@/data/deliveryData';
import { useState } from 'react';


const DeliveryHistory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedParcel, setSelectedParcel] = useState<IDelivery | null>(null);

    const stats = {
        total: deliveryData.length,
        thisMonth: deliveryData.filter(d => d.deliveryDate.includes('Nov')).length,
        lastMonth: deliveryData.filter(d => d.deliveryDate.includes('Oct')).length
    };

    const filteredDeliveries = deliveryData.filter(delivery => {
        const matchesSearch =
            delivery.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
            delivery.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
            delivery.items.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Delivery History</h1>
                    <p className="text-sm sm:text-base text-gray-600">View all your received parcels</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Total Deliveries</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.total}</p>
                            </div>
                            <div className="text-3xl">📦</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">This Month</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.thisMonth}</p>
                            </div>
                            <div className="text-3xl">📅</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-purple-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Last Month</p>
                                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.lastMonth}</p>
                            </div>
                            <div className="text-3xl">📊</div>
                        </div>
                    </div>
                </div>

                {/* Search and Filter */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by tracking number, sender, or items..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                />
                                <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                Filter
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                Export
                            </button>
                        </div>
                    </div>
                </div>

                {/* Deliveries List */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    {/* Table Header - Hidden on Mobile */}
                    <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-semibold text-gray-700">
                        <div className="col-span-3">Tracking Number</div>
                        <div className="col-span-2">Sender</div>
                        <div className="col-span-2">Items</div>
                        <div className="col-span-2">Delivery Date</div>
                        <div className="col-span-2">Status</div>
                        <div className="col-span-1">Actions</div>
                    </div>

                    {/* Delivery Items */}
                    <div className="divide-y divide-gray-200">
                        {filteredDeliveries.length > 0 ? (
                            filteredDeliveries.map((delivery) => (
                                <div key={delivery.id} className="px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors">
                                    {/* Mobile Layout */}
                                    <div className="md:hidden space-y-3">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <p className="font-semibold text-gray-900">{delivery.trackingNumber}</p>
                                                <p className="text-sm text-gray-600 mt-1">From: {delivery.sender}</p>
                                            </div>
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                ✓ Delivered
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <span className="mr-1">📦</span>
                                            {delivery.items}
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-gray-600">
                                                {delivery.deliveryDate} at {delivery.deliveryTime}
                                            </span>
                                            <button
                                                onClick={() => setSelectedParcel(delivery)}
                                                className="text-blue-600 font-medium hover:text-blue-700"
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Desktop Layout */}
                                    <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                                        <div className="col-span-3">
                                            <p className="font-semibold text-gray-900">{delivery.trackingNumber}</p>
                                            <p className="text-xs text-gray-500 mt-1">Order: {delivery.orderDate}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm text-gray-900">{delivery.sender}</p>
                                            <p className="text-xs text-gray-500">{delivery.senderLocation}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm text-gray-900">{delivery.items}</p>
                                            <p className="text-xs text-gray-500">{delivery.weight}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="text-sm text-gray-900">{delivery.deliveryDate}</p>
                                            <p className="text-xs text-gray-500">{delivery.deliveryTime}</p>
                                        </div>
                                        <div className="col-span-2">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                ✓ Delivered
                                            </span>
                                        </div>
                                        <div className="col-span-1">
                                            <button
                                                onClick={() => setSelectedParcel(delivery)}
                                                className="text-blue-600 text-sm font-medium hover:text-blue-700"
                                            >
                                                View
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="px-6 py-12 text-center">
                                <div className="text-5xl mb-4">📭</div>
                                <p className="text-gray-500 text-lg">No deliveries found</p>
                                <p className="text-gray-400 text-sm mt-2">Try adjusting your search</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Pagination */}
                {filteredDeliveries.length > 0 && (
                    <div className="mt-6 flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                            Showing <span className="font-semibold">{filteredDeliveries.length}</span> of{' '}
                            <span className="font-semibold">{deliveryData.length}</span> deliveries
                        </p>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
                                Previous
                            </button>
                            <button className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Parcel Details Modal */}
            {selectedParcel && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Delivery Details</h2>
                            <button
                                onClick={() => setSelectedParcel(null)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Status Banner */}
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">
                                        ✓
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-900">Successfully Delivered</p>
                                        <p className="text-sm text-green-700">
                                            {selectedParcel.deliveryDate} at {selectedParcel.deliveryTime}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tracking Number */}
                            <div>
                                <p className="text-sm text-gray-600 mb-1">Tracking Number</p>
                                <p className="text-lg font-semibold text-gray-900">{selectedParcel.trackingNumber}</p>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 mb-2">Sender Information</p>
                                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                                        <p className="font-medium text-gray-900">{selectedParcel.sender}</p>
                                        <p className="text-sm text-gray-600">{selectedParcel.senderLocation}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-600 mb-2">Delivery Information</p>
                                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                                        <p className="text-sm text-gray-600">Received by: {selectedParcel.signature}</p>
                                        <p className="text-sm text-gray-600">Courier: {selectedParcel.courier}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-600 mb-2">Parcel Details</p>
                                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                                        <p className="text-sm text-gray-900">{selectedParcel.items}</p>
                                        <p className="text-sm text-gray-600">Weight: {selectedParcel.weight}</p>
                                        <p className="text-sm text-gray-600">Type: {selectedParcel.type}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-600 mb-2">Timeline</p>
                                    <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                                        <p className="text-sm text-gray-600">Ordered: {selectedParcel.orderDate}</p>
                                        <p className="text-sm text-gray-600">Delivered: {selectedParcel.deliveryDate}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                                <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Track Again
                                </button>
                                <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    Download Receipt
                                </button>
                                <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                                    Report Issue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeliveryHistory;