const CTA = () => {
    return (
        <section className="px-4 mb-10">
            <div className="max-w-6xl mx-auto">
                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-2xl text-center py-16 px-6 sm:px-12 shadow-xl">

                    {/* Title */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
                        Take Your Business Further with{" "}
                        <span className="text-yellow-300">MoveX</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-3 text-sm sm:text-base text-indigo-100">
                        Seamless deliveries, trusted solutions, and growth by your side.
                    </p>

                    {/* Button */}
                    <div className="mt-8">
                        <button className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-lg shadow-md hover:shadow-xl hover:bg-indigo-50 transition transform hover:scale-105">
                            Get Started Today
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;