import FilterTab from '@/components/dashboard/FilterTab';
import ParcelCard from '@/components/dashboard/ParcelCard';
import { parcels } from '@/data/parcelData';
import { useState } from 'react';

const MyParcels = () => {
    const [activeTab, setActiveTab] = useState<'all' | 'in_transit' | 'delivered' | 'pending' | 'cancelled'>('all');
    const [searchQuery, setSearchQuery] = useState('');


    // Status badge styling
    const getStatusStyle = (status: string) => {
        const styles: Record<string, string> = {
            in_transit: 'bg-blue-100 text-blue-800 border-blue-300',
            delivered: 'bg-green-100 text-green-800 border-green-300',
            pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
            cancelled: 'bg-red-100 text-red-800 border-red-300'
        };
        return styles[status] || 'bg-gray-100 text-gray-800 border-gray-300';
    };

    const totalParcels = parcels.length
    const inTransit = parcels.filter(p => p.status === 'in_transit').length
    const delivered = parcels.filter(p => p.status === 'delivered').length
    const pending = parcels.filter(p => p.status === 'pending').length
    const cancelled = parcels.filter(p => p.status === 'cancelled').length

    // Status icon
    const getStatusIcon = (status: string) => {
        const icons: Record<string, string> = {
            in_transit: '🚚',
            delivered: '✅',
            pending: '⏳',
            cancelled: '❌'
        };
        return icons[status] || '📦';
    };

    // Filter parcels based on active tab
    const filteredParcels = parcels.filter(parcel => {
        if (activeTab === 'all') return true;
        return parcel.status === activeTab;
    });

    // Search functionality
    const searchedParcels = filteredParcels.filter(parcel =>
        parcel.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parcel.receiverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        parcel.destination.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-600">My Parcels</h1>
                        <p className="text-gray-600 mt-1">Manage and track all your sent parcels</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <ParcelCard title='Total Parcel' icon="📦" parcelCount={parcels.length} />
                    <ParcelCard title='In Transit' icon="🚚" parcelCount={inTransit} />
                    <ParcelCard title='Delivered' icon="✅" parcelCount={delivered} />
                    <ParcelCard title='Pending' icon="⏳" parcelCount={pending} />
                </div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by ID, receiver name, or destination..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            <span className="absolute left-4 top-3.5 text-gray-400 text-xl">🔍</span>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap gap-2">
                        <FilterTab tab="all" activeTab={activeTab} setActiveTab={setActiveTab} parcels={totalParcels} />
                        <FilterTab tab="pending" activeTab={activeTab} setActiveTab={setActiveTab} parcels={pending} />
                        <FilterTab tab="in_transit" activeTab={activeTab} setActiveTab={setActiveTab} parcels={inTransit} />
                        <FilterTab tab="delivered" activeTab={activeTab} setActiveTab={setActiveTab} parcels={delivered} />
                        <FilterTab tab="cancelled" activeTab={activeTab} setActiveTab={setActiveTab} parcels={cancelled} />
                    </div>
                </div>

                {/* Parcels List */}
                <div className="space-y-4">
                    {searchedParcels.length === 0 ? (
                        <div className="bg-white rounded-lg shadow-sm border p-12 text-center">
                            <div className="text-6xl mb-4">📭</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">No parcels found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        searchedParcels.map((parcel) => (
                            <div
                                key={parcel.id}
                                className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                            >
                                <div className="p-6">
                                    {/* Mobile View */}
                                    <div className="block lg:hidden space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{parcel.id}</h3>
                                                <p className="text-gray-600 text-sm mt-1">To: {parcel.receiverName}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center space-x-1 ${getStatusStyle(parcel.status)}`}>
                                                <span>{getStatusIcon(parcel.status)}</span>
                                                <span>{parcel.statusText}</span>
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div>
                                                <p className="text-gray-500">Destination</p>
                                                <p className="font-medium text-gray-800">{parcel.destination}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Weight</p>
                                                <p className="font-medium text-gray-800">{parcel.weight}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Sent Date</p>
                                                <p className="font-medium text-gray-800">{parcel.date}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Est. Delivery</p>
                                                <p className="font-medium text-gray-800">{parcel.estimatedDelivery}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-2 pt-2">
                                            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                                Track
                                            </button>
                                            <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                                                Details
                                            </button>
                                        </div>
                                    </div>

                                    {/* Desktop View */}
                                    <div className="hidden lg:flex items-center justify-between">
                                        <div className="flex items-center space-x-6">
                                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-3xl">
                                                📦
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{parcel.id}</h3>
                                                <p className="text-gray-600 text-sm">To: {parcel.receiverName}</p>
                                                <p className="text-gray-500 text-sm">{parcel.receiverPhone}</p>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-gray-500 text-sm">Destination</p>
                                            <p className="font-semibold text-gray-800">{parcel.destination}</p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-gray-500 text-sm">Weight</p>
                                            <p className="font-semibold text-gray-800">{parcel.weight}</p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-gray-500 text-sm">Sent Date</p>
                                            <p className="font-semibold text-gray-800">{parcel.date}</p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-gray-500 text-sm">Est. Delivery</p>
                                            <p className="font-semibold text-gray-800">{parcel.estimatedDelivery}</p>
                                        </div>

                                        <div className="flex flex-col items-end space-y-2">
                                            <span className={`px-4 py-1.5 rounded-full text-sm font-semibold border flex items-center space-x-1 ${getStatusStyle(parcel.status)}`}>
                                                <span>{getStatusIcon(parcel.status)}</span>
                                                <span>{parcel.statusText}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="px-6 pb-4">
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className={`h-2 rounded-full transition-all ${parcel.status === 'delivered' ? 'bg-green-500' :
                                                parcel.status === 'in_transit' ? 'bg-blue-500' :
                                                    parcel.status === 'pending' ? 'bg-yellow-500' :
                                                        'bg-red-500'
                                                }`}
                                            style={{ width: `${(parcel.trackingSteps / parcel.totalSteps) * 100}%` }}
                                        ></div>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Progress: {parcel.trackingSteps} of {parcel.totalSteps} steps
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div >
    );
};

export default MyParcels;