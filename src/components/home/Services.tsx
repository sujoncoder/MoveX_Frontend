import { motion } from "framer-motion";
import { services } from "../../lib/serviceData";



const Services = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-14 text-slate-900 tracking-tight">
                    Why you should choose <span className="text-indigo-600">MoveX?</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl border border-slate-100 group overflow-hidden"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-200 via-pink-100 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                            {/* Icon */}
                            <div className="relative z-10 bg-gradient-to-tr from-indigo-50 to-white p-4 rounded-xl shadow-sm w-fit">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 mt-6 text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="relative z-10 mt-3 text-slate-600 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;