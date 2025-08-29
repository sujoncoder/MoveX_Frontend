import React from "react";
import { motion } from "framer-motion";
import { Package, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import ParcelAnimate from "../../components/home/parcelAnimate";



export default function Hero({ onTrack }: { onTrack?: (code: string) => void }) {
    const [code, setCode] = React.useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (onTrack) onTrack(code.trim());
    };

    return (
        <section className="relative isolate overflow-hidden min-h-screen flex items-center">
            {/* Background Gradient Shapes */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-purple-500/15 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tr from-emerald-400/10 to-cyan-400/10 blur-2xl" />
            </div>

            {/* Content Grid */}
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:gap-20 lg:py-28">

                {/* Left: Hero Text + Form */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col justify-center text-center md:text-left"
                >
                    {/* Heading */}
                    <h1 className="text-3xl font-bold tracking-tight text-slate-700 sm:text-5xl lg:text-6xl leading-tight">
                        We Carry Your Trust,
                        <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                            Not Just Parcels
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
                        Easy tracking, fast payments, safe deliveries.
                    </p>

                    {/* Tracking Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 relative w-full sm:w-4/5 md:w-2/3 max-w-lg mx-auto md:mx-0"
                    >
                        <label className="sr-only" htmlFor="tracking">Tracking code</label>
                        <input
                            id="tracking"
                            type="text"
                            inputMode="text"
                            placeholder="Enter tracking code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            className="w-full rounded-full border border-transparent bg-gradient-to-r from-blue-50 via-white to-indigo-50 px-6 py-3 pr-28 text-slate-500 placeholder:text-slate-400 shadow-md outline-none ring-1 ring-blue-200 focus:ring-2 focus:ring-blue-500/70 transition duration-300 hover:shadow-lg sm:py-3 sm:px-6 sm:text-base"
                        />
                        <button
                            type="submit"
                            className="absolute top-1/2 right-1.5 -translate-y-1/2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 active:scale-105 sm:px-5 sm:py-2 sm:text-base cursor-pointer"
                        >
                            Track <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                    </form>

                    {/* Features */}
                    <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
                        <span className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-600">
                            <Clock className="h-4 w-4 text-blue-500" /> On-time delivery
                        </span>
                        <span className="hidden h-1 w-1 rounded-full bg-blue-300 sm:block" />
                        <span className="inline-flex items-center gap-2 text-sm sm:text-base text-green-600">
                            <ShieldCheck className="h-4 w-4 text-green-500" /> Secure payments
                        </span>
                        <span className="hidden h-1 w-1 rounded-full bg-green-300 sm:block" />
                        <span className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-600">
                            <Package className="h-4 w-4 text-purple-500" /> Live tracking
                        </span>
                    </div>
                </motion.div>

                {/* Right: Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex h-full w-full items-center justify-center"
                >
                    <div className="w-full h-full max-w-md sm:max-w-lg lg:max-w-xl">
                        <ParcelAnimate />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
