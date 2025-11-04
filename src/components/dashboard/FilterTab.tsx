import React from 'react';

type TabType = 'all' | 'in_transit' | 'delivered' | 'pending' | 'cancelled';

interface FilterTabProps {
    tab: TabType;
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    parcels: number;
};

const tabColorMap: Record<TabType, string> = {
    all: 'bg-green-600 text-white',
    in_transit: 'bg-blue-600 text-white',
    delivered: 'bg-green-600 text-white',
    pending: 'bg-yellow-600 text-white',
    cancelled: 'bg-red-600 text-white',
};

const FilterTab: React.FC<FilterTabProps> = ({ tab, activeTab, setActiveTab, parcels }) => {
    const isActive = activeTab === tab;
    const activeColor = tabColorMap[tab] || 'bg-gray-100 text-gray-700 hover:bg-gray-200';
    const defaultColor = 'bg-gray-100 text-gray-700 hover:bg-gray-200';

    const displayParcels = Number.isFinite(parcels) && parcels >= 0 ? parcels : 0;

    return (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${isActive ? activeColor : defaultColor
                }`}
            aria-pressed={isActive}
        >
            {tab.replace(/_/g, ' ').toUpperCase()} ({displayParcels})
        </button>
    );
};

export default FilterTab;