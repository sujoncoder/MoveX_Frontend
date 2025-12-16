import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { stats } from "../../data/statsData";



// simple count-up hook
const useCountUp = (end: any, duration = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return count;
};

const colors = [
    "from-pink-500 via-red-400 to-orange-400",
    "from-indigo-500 via-blue-400 to-cyan-400",
    "from-green-500 via-emerald-400 to-teal-400",
    "from-purple-500 via-violet-400 to-fuchsia-400",
    "from-yellow-500 via-amber-400 to-orange-400",
];

const Stats = () => {
    return (
        <section className="py-20 bg-linear-to-r from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, idx) => {
                        const count = useCountUp(stat.value, 2000 + idx * 500);
                        const gradient = colors[idx % colors.length];

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex flex-col items-center gap-3 p-6 rounded-2xl shadow-md hover:shadow-xl transition relative overflow-hidden`}
                            >
                                {/* Background Gradient Overlay */}
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${gradient} opacity-20`}
                                />

                                {/* Icon */}
                                <div
                                    className={`relative p-4 rounded-full bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-md`}
                                >
                                    {stat.icon}
                                </div>

                                {/* Number */}
                                <h3 className="relative text-3xl font-extrabold text-slate-900">
                                    {count.toLocaleString()}
                                    <span className="ml-1 text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500">
                                        {stat.suffix}
                                    </span>
                                </h3>

                                {/* Label */}
                                <p className="relative text-slate-600 text-sm font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;