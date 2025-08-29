import React, { useState, useMemo } from 'react';
import { Search, Download, Eye, Edit, Trash2, Package, Truck, CheckCircle, Clock, Plus, ChevronLeft, ChevronRight, LucideIcon } from 'lucide-react';

// TypeScript interfaces
interface Parcel {
    id: string;
    recipient: string;
    sender: string;
    destination: string;
    origin: string;
    status: ParcelStatus;
    weight: string;
    value: string;
    date: string;
    trackingCode: string;
}

type ParcelStatus = 'pending' | 'processing' | 'in-transit' | 'delivered';

interface StatusConfig {
    [key: string]: string;
}

interface StatusIconConfig {
    [key: string]: LucideIcon;
}

interface StatusBadgeProps {
    status: ParcelStatus;
}

interface ActionButtonProps {
    icon: LucideIcon;
    onClick: () => void;
    className?: string;
}

const AllParcelsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);

    // Mock data for parcels
    const [parcels] = useState<Parcel[]>([
        { id: 'PKG001', recipient: 'John Doe', sender: 'Amazon Store', destination: 'New York, NY', origin: 'Los Angeles, CA', status: 'delivered', weight: '2.5 kg', value: '$125.50', date: '2024-01-15', trackingCode: 'TRK123456789' },
        { id: 'PKG002', recipient: 'Jane Smith', sender: 'eBay Seller', destination: 'Chicago, IL', origin: 'Miami, FL', status: 'in-transit', weight: '1.2 kg', value: '$89.99', date: '2024-01-14', trackingCode: 'TRK987654321' },
        { id: 'PKG003', recipient: 'Mike Johnson', sender: 'Local Store', destination: 'Houston, TX', origin: 'Dallas, TX', status: 'processing', weight: '3.1 kg', value: '$245.00', date: '2024-01-13', trackingCode: 'TRK456789123' },
        { id: 'PKG004', recipient: 'Sarah Wilson', sender: 'Etsy Shop', destination: 'Seattle, WA', origin: 'Portland, OR', status: 'pending', weight: '0.8 kg', value: '$67.25', date: '2024-01-12', trackingCode: 'TRK789123456' },
        { id: 'PKG005', recipient: 'David Brown', sender: 'Walmart', destination: 'Phoenix, AZ', origin: 'Denver, CO', status: 'delivered', weight: '4.2 kg', value: '$156.80', date: '2024-01-11', trackingCode: 'TRK321654987' },
        { id: 'PKG006', recipient: 'Lisa Garcia', sender: 'Target', destination: 'Boston, MA', origin: 'Atlanta, GA', status: 'in-transit', weight: '1.8 kg', value: '$92.40', date: '2024-01-10', trackingCode: 'TRK654987321' },
        { id: 'PKG007', recipient: 'Tom Miller', sender: 'Best Buy', destination: 'San Diego, CA', origin: 'Las Vegas, NV', status: 'processing', weight: '2.9 kg', value: '$199.99', date: '2024-01-09', trackingCode: 'TRK147258369' },
        { id: 'PKG008', recipient: 'Anna Davis', sender: 'Home Depot', destination: 'Orlando, FL', origin: 'Tampa, FL', status: 'delivered', weight: '5.5 kg', value: '$310.75', date: '2024-01-08', trackingCode: 'TRK963852741' },
    ]);

    const statusColors: StatusConfig = {
        pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        processing: 'bg-blue-100 text-blue-800 border-blue-200',
        'in-transit': 'bg-purple-100 text-purple-800 border-purple-200',
        delivered: 'bg-green-100 text-green-800 border-green-200',
    };

    const statusIcons: StatusIconConfig = {
        pending: Clock,
        processing: Package,
        'in-transit': Truck,
        delivered: CheckCircle,
    };

    // Filter and search logic
    const filteredParcels = useMemo<Parcel[]>(() => {
        return parcels.filter((parcel: Parcel) => {
            const matchesSearch: boolean = parcel.recipient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                parcel.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                parcel.trackingCode.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus: boolean = statusFilter === 'all' || parcel.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [parcels, searchTerm, statusFilter]);

    // Pagination logic
    const totalPages: number = Math.ceil(filteredParcels.length / itemsPerPage);
    const paginatedParcels: Parcel[] = filteredParcels.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
        const Icon = statusIcons[status];
        return (
            <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}>
                <Icon className="w-3 h-3" />
                {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </span>
        );
    };

    const ActionButton: React.FC<ActionButtonProps> = ({ icon: Icon, onClick, className = "text-gray-600 hover:text-blue-600" }) => (
        <button
            onClick={onClick}
            className={`p-1 rounded-md transition-colors ${className}`}
        >
            <Icon className="w-4 h-4" />
        </button>
    );

    return (
        <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">All Parcels</h1>
                            <p className="text-gray-600 mt-1">Manage and track all parcel deliveries</p>
                        </div>
                        <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                            <Plus className="w-4 h-4" />
                            Add New Parcel
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <div className="flex items-center">
                            <div className="p-2 bg-blue-100 rounded-lg">
                                <Package className="w-6 h-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Total Parcels</p>
                                <p className="text-2xl font-bold text-gray-900">{parcels.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <div className="flex items-center">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Delivered</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {parcels.filter(p => p.status === 'delivered').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <div className="flex items-center">
                            <div className="p-2 bg-purple-100 rounded-lg">
                                <Truck className="w-6 h-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">In Transit</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {parcels.filter(p => p.status === 'in-transit').length}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm border">
                        <div className="flex items-center">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                                <Clock className="w-6 h-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium text-gray-600">Pending</p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {parcels.filter(p => p.status === 'pending').length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white rounded-xl p-6 shadow-sm border mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search by recipient, parcel ID, or tracking code..."
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={searchTerm}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Status Filter */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <select
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-[150px]"
                                value={statusFilter}
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatusFilter(e.target.value)}
                            >
                                <option value="all">All Status</option>
                                <option value="pending">Pending</option>
                                <option value="processing">Processing</option>
                                <option value="in-transit">In Transit</option>
                                <option value="delivered">Delivered</option>
                            </select>

                            <button className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                                <Download className="w-4 h-4" />
                                Export
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Parcel Details
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                                        Route
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                        Details
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {paginatedParcels.map((parcel: Parcel) => (
                                    <tr key={parcel.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                                        <Package className="h-5 w-5 text-blue-600" />
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-gray-900">{parcel.id}</div>
                                                    <div className="text-sm text-gray-500">{parcel.recipient}</div>
                                                    <div className="text-xs text-gray-400 lg:hidden">{parcel.trackingCode}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                                            <div className="text-sm text-gray-900">{parcel.origin}</div>
                                            <div className="text-sm text-gray-500">→ {parcel.destination}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                                            <div className="text-sm text-gray-900">{parcel.weight}</div>
                                            <div className="text-sm text-gray-500">{parcel.value}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <StatusBadge status={parcel.status} />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex items-center gap-2">
                                                <ActionButton icon={Eye} onClick={() => console.log('View', parcel.id)} />
                                                <ActionButton icon={Edit} onClick={() => console.log('Edit', parcel.id)} />
                                                <ActionButton
                                                    icon={Trash2}
                                                    onClick={() => console.log('Delete', parcel.id)}
                                                    className="text-gray-600 hover:text-red-600"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="bg-white px-6 py-3 border-t border-gray-200 flex items-center justify-between">
                            <div className="flex-1 flex justify-between sm:hidden">
                                <button
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                                        <span className="font-medium">
                                            {Math.min(currentPage * itemsPerPage, filteredParcels.length)}
                                        </span>{' '}
                                        of <span className="font-medium">{filteredParcels.length}</span> results
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                                        <button
                                            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                            disabled={currentPage === 1}
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            <ChevronLeft className="h-5 w-5" />
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i: number) => i + 1).map((page: number) => (
                                            <button
                                                key={page}
                                                onClick={() => setCurrentPage(page)}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === page
                                                    ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                                    }`}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                            disabled={currentPage === totalPages}
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                        >
                                            <ChevronRight className="h-5 w-5" />
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllParcelsPage;