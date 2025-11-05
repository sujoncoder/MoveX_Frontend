import { ITrackingData, parcelData } from '@/data/trackParcelData';
import { useState, useCallback } from 'react';


const TrackParcel = () => {
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingData, setTrackingData] = useState<ITrackingData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleTrack = useCallback(async () => {
        const trimmedNumber = trackingNumber.trim();

        if (!trimmedNumber) {
            setError('Please enter a tracking number');
            return;
        }

        // Basic validation for tracking number format (MX followed by 9 digits)
        const trackingRegex = /^MX\d{9}$/;
        if (!trackingRegex.test(trimmedNumber)) {
            setError('Invalid tracking number format. Please use MX followed by 9 digits.');
            return;
        }

        setLoading(true);
        setError('');
        setTrackingData(null);

        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (trimmedNumber === 'MX000000000') {
                        reject(new Error('Parcel not found'));
                    } else {
                        resolve(parcelData);
                    }
                }, 1000);
            });

            setTrackingData(parcelData);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to track parcel. Please try again.');
        } finally {
            setLoading(false);
        }
    }, [trackingNumber]);

    const getStatusBadge = useCallback((status: string): string => {
        const badges: Record<string, string> = {
            'pending': 'bg-gray-100 text-gray-700 border-gray-300',
            'in-transit': 'bg-yellow-100 text-yellow-700 border-yellow-300',
            'out-for-delivery': 'bg-blue-100 text-blue-700 border-blue-300',
            'delivered': 'bg-green-100 text-green-700 border-green-300',
            'cancelled': 'bg-red-100 text-red-700 border-red-300'
        };
        return badges[status] || badges.pending;
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Track Your Parcel</h1>
                    <p className="text-sm sm:text-base text-gray-600">Enter your tracking number to see real-time updates</p>
                </div>

                {/* Search Section */}
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                            <input
                                type="text"
                                value={trackingNumber}
                                onChange={(e) => setTrackingNumber(e.target.value)}
                                placeholder="Enter tracking number (e.g., MX123456789)"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
                            />
                        </div>
                        <button
                            onClick={handleTrack}
                            disabled={loading || !trackingNumber.trim()}
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
                        >
                            {loading ? 'Tracking...' : 'Track Parcel'}
                        </button>
                    </div>
                </div>

                {/* Error State */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center">
                            <div className="text-red-500 mr-3">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <p className="text-red-700 font-medium">{error}</p>
                        </div>
                    </div>
                )}

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        <p className="ml-3 text-gray-600">Tracking your parcel...</p>
                    </div>
                )}

                {/* Tracking Results */}
                {!loading && trackingData && (
                    <div className="space-y-6">
                        {/* Status Overview */}
                        <div className="bg-linear-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-4xl">📦</span>
                                        <div>
                                            <p className="text-sm opacity-90">Tracking Number</p>
                                            <p className="text-2xl font-bold">{trackingData.trackingNumber}</p>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getStatusBadge(trackingData.status)} bg-white`}>
                                            {trackingData.status.replace('-', ' ').toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-left md:text-right">
                                    <p className="text-sm opacity-90 mb-1">Current Location</p>
                                    <p className="text-xl font-semibold mb-3">{trackingData.currentLocation}</p>
                                    <p className="text-sm opacity-90 mb-1">Estimated Delivery</p>
                                    <p className="text-lg font-bold">{trackingData.estimatedDelivery}</p>
                                </div>
                            </div>
                        </div>

                        {/* Info Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Sender Info */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">📤</span>
                                    <h3 className="font-semibold text-gray-900">Sender</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">
                                        <span className="font-medium text-gray-900">{trackingData.sender.name}</span>
                                    </p>
                                    <p className="text-gray-600">{trackingData.sender.location}</p>
                                    <p className="text-gray-500 text-xs">Sent: {trackingData.sender.date}</p>
                                </div>
                            </div>

                            {/* Receiver Info */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">📥</span>
                                    <h3 className="font-semibold text-gray-900">Receiver</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">
                                        <span className="font-medium text-gray-900">{trackingData.receiver.name}</span>
                                    </p>
                                    <p className="text-gray-600">{trackingData.receiver.location}</p>
                                    <p className="text-gray-500 text-xs">{trackingData.receiver.phone}</p>
                                </div>
                            </div>

                            {/* Parcel Info */}
                            <div className="bg-white rounded-lg shadow-sm p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">📋</span>
                                    <h3 className="font-semibold text-gray-900">Parcel Details</h3>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600">
                                        <span className="font-medium text-gray-900">{trackingData.parcel.type}</span>
                                    </p>
                                    <p className="text-gray-600">Weight: {trackingData.parcel.weight}</p>
                                    <p className="text-gray-500 text-xs">{trackingData.parcel.description}</p>
                                </div>
                            </div>
                        </div>

                        {/* Tracking Timeline */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                <span className="mr-2">🕐</span>
                                Tracking Timeline
                            </h2>

                            <div className="relative">
                                {/* Timeline Line */}
                                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                                {/* Timeline Items */}
                                <div className="space-y-6">
                                    {trackingData.timeline.map((item, index) => (
                                        <div key={`${item.status}-${item.date}-${index}`} className="relative flex gap-4">
                                            {/* Timeline Dot */}
                                            <div className="relative z-10 shrink-0">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.completed
                                                    ? item.current
                                                        ? 'bg-blue-500 ring-4 ring-blue-100'
                                                        : 'bg-green-500'
                                                    : 'bg-gray-300'
                                                    }`}>
                                                    {item.completed ? (
                                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    ) : (
                                                        <div className="w-3 h-3 rounded-full bg-white"></div>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Timeline Content */}
                                            <div className={`flex-1 pb-6 ${item.current ? 'bg-blue-50 -ml-2 -mt-2 pl-6 pt-2 pr-4 pb-4 rounded-lg' : ''}`}>
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                                    <div>
                                                        <h3 className={`font-semibold ${item.current ? 'text-blue-900' : 'text-gray-900'}`}>
                                                            {item.status}
                                                        </h3>
                                                        <p className="text-sm text-gray-600">{item.location}</p>
                                                    </div>
                                                    <div className="text-sm text-gray-500 sm:text-right">
                                                        <p className="font-medium">{item.date}</p>
                                                        <p>{item.time}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm text-gray-600">{item.description}</p>
                                                {item.current && (
                                                    <div className="mt-3 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                                        Current Status
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="bg-gray-100 rounded-lg p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                    onClick={() => alert('Receipt download feature coming soon!')}
                                >
                                    Download Receipt
                                </button>
                                <button
                                    className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                    onClick={() => {
                                        if (navigator.share) {
                                            navigator.share({
                                                title: 'Parcel Tracking',
                                                text: `Track my parcel: ${trackingData.trackingNumber}`,
                                                url: window.location.href
                                            });
                                        } else {
                                            navigator.clipboard.writeText(`${window.location.href}?tracking=${trackingData.trackingNumber}`);
                                            alert('Tracking link copied to clipboard!');
                                        }
                                    }}
                                >
                                    Share Tracking
                                </button>
                                <button
                                    className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                    onClick={() => window.open('mailto:support@movex.com?subject=Support Request&body=Tracking Number: ' + trackingData.trackingNumber)}
                                >
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Empty State */}
                {!loading && !trackingData && (
                    <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Track Your Parcel</h3>
                        <p className="text-gray-600 mb-6">Enter your tracking number above to see the delivery status</p>
                        <div className="max-w-md mx-auto">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
                                <p className="text-sm font-semibold text-blue-900 mb-2">📌 Quick Tips:</p>
                                <ul className="text-sm text-blue-800 space-y-1">
                                    <li>• Tracking numbers are usually 10-15 characters</li>
                                    <li>• Format: MX followed by 9 digits</li>
                                    <li>• Check your email for the tracking number</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackParcel;