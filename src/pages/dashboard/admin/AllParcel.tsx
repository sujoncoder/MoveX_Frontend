import { useState, useMemo, useEffect } from 'react';
import FilterTab from '../../../components/dashboard/FilterTab';
import { parcels } from '../../../data/parcelData';

type TabType = 'all' | 'in_transit' | 'delivered' | 'pending' | 'cancelled';

const AllParcels = () => {
    const [activeTab, setActiveTab] = useState<TabType>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredParcels = useMemo(() => {
        let filtered = parcels;

        if (activeTab !== 'all') {
            filtered = filtered.filter(parcel => parcel.status === activeTab);
        }

        if (searchTerm) {
            filtered = filtered.filter(parcel =>
                parcel.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                parcel.receiverName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                parcel.destination.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        return filtered;
    }, [activeTab, searchTerm]);

    const totalPages = Math.ceil(filteredParcels.length / itemsPerPage);
    const paginatedParcels = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredParcels.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredParcels, currentPage, itemsPerPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm]);

    const tabCounts = useMemo(() => {
        const counts = {
            all: parcels.length,
            in_transit: parcels.filter(p => p.status === 'in_transit').length,
            delivered: parcels.filter(p => p.status === 'delivered').length,
            pending: parcels.filter(p => p.status === 'pending').length,
            cancelled: parcels.filter(p => p.status === 'cancelled').length,
        };
        return counts;
    }, []);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'in_transit': return 'bg-blue-100 text-blue-800';
            case 'delivered': return 'bg-green-100 text-green-800';
            case 'pending': return 'bg-yellow-100 text-yellow-800';
            case 'cancelled': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="p-4 md:p-6 bg-white rounded-xl min-h-full">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">All Parcels</h1>
                <p className="text-gray-600">Manage and track all parcels in the system</p>
            </div>

            {/* Search Bar */}
            <div className="mb-6">
                <div className="relative max-w-md">
                    <input
                        type="text"
                        placeholder="Search by ID, receiver, or destination..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(tabCounts) as TabType[]).map((tab) => (
                        <FilterTab
                            key={tab}
                            tab={tab}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            parcels={tabCounts[tab]}
                        />
                    ))}
                </div>
            </div>

            {/* Parcels Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parcel ID</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receiver</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Phone</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Destination</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">Date</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">Est. Delivery</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {paginatedParcels.map((parcel) => (
                            <tr key={parcel.id} className="hover:bg-gray-50">
                                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{parcel.id}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{parcel.receiverName}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell">{parcel.receiverPhone}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:table-cell">{parcel.destination}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">{parcel.weight}</td>
                                <td className="px-4 py-4 whitespace-nowrap">
                                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(parcel.status)}`}>
                                        {parcel.statusText}
                                    </span>
                                </td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{parcel.date}</td>
                                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 hidden xl:table-cell">{parcel.estimatedDelivery}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {filteredParcels.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-gray-400 text-lg">No parcels found</div>
                    <div className="text-gray-500 mt-2">Try adjusting your search or filter criteria</div>
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                        Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredParcels.length)} of {filteredParcels.length} parcels
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            Previous
                        </button>
                        <span className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}

            {/* Results Count */}
            {totalPages <= 1 && (
                <div className="mt-4 text-sm text-gray-600">
                    Showing {filteredParcels.length} of {parcels.length} parcels
                </div>
            )}
        </div>
    );
};

export default AllParcels;