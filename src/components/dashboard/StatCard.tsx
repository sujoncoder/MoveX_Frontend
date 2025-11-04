
const StatCard = ({ title, value, children }: { title: string; value: string | number; children?: React.ReactNode }) => {
    return (
        <div className="flex-1 bg-white/90 dark:bg-card p-4 rounded-lg shadow-sm border">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <p className="text-sm text-gray-500">{title}</p>
                    <p className="text-2xl font-bold mt-1">{value}</p>
                </div>

                <div className="text-3xl">{children}</div>
            </div>
        </div>
    );
};

export default StatCard;