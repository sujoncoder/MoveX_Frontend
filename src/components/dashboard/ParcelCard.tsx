import React from "react"

interface ParcelCardProps {
    title: string;
    parcelCount: number;
    icon: any;
};

const ParcelCard: React.FC<ParcelCardProps> = ({ title, parcelCount, icon }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm border p-5">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-gray-600 text-sm sm:text-lg">{title}</p>
                    <p className="text-2xl font-bold text-gray-800 mt-1">{parcelCount}</p>
                </div>

                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">
                    {icon}
                </div>
            </div>
        </div>
    )
};

export default ParcelCard;