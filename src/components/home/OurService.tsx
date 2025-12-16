import { ourServices } from "../../data/serviceData";


const OurService = () => {
    return (
        <section className="py-16 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-700 mb-12">
                    Our Service
                </h2>

                {/* Responsive Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {ourServices.map((service, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Icon container */}
                            <div className="p-4 rounded-2xl flex items-center justify-center transition transform duration-300 border border-slate-200 hover:shadow">
                                <img src={service.icon} alt={service.title} />
                            </div>

                            {/* Title */}
                            <h3 className="mt-4 text-sm sm:text-base font-medium text-slate-600">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurService;