import { MapPin, Phone, Mail, PhoneCall } from "lucide-react";
import CTA from "../components/home/CTA";



const Contact = () => {
    return (
        <section className="w-full px-6 py-16 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Get in Touch with <span className="text-green-600">MoveX</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Have questions or need help? Reach out to us anytime.
                    We’re here to assist you with delivery, support, and business inquiries.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {/* Address */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                    <MapPin className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Address</h3>
                    <p className="text-gray-600">17/2, Dhanmondi 3/A, Dhaka-1209</p>
                </div>

                {/* Call Us */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                    <Phone className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Call Us</h3>
                    <p className="text-gray-600">01234-56789</p>
                </div>

                {/* Mail */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                    <Mail className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Mail</h3>
                    <p className="text-gray-600 break-words">info@movex.com.bd</p>
                </div>

                {/* Registration */}
                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                    <PhoneCall className="w-10 h-10 text-green-600 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-800 mb-2">Registration</h3>
                    <p className="text-gray-600">01999-986919</p>
                </div>
            </div>

            <div className="my-10">
                <CTA />
            </div>
        </section>
    );
}
export default Contact