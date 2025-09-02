import { Target, Mountain } from "lucide-react";
import Stats from "../components/home/Stats";
import team from "../assets/images/movex-team.png"



const About = () => {
    return (
        <section className="w-full px-6 bg-gray-50 py-16" >
            <div className="max-w-6xl mx-auto">
                {/* About Us */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                    <div>
                        <p className="text-green-600 font-semibold mb-2">About Us</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
                            We Provide The <br />
                            Best Quality Courier Services
                        </h2>
                        <p className="text-gray-600 mb-6">
                            MoveX Courier is a leading courier service company in Bangladesh
                            dedicated to delivering reliable and efficient e-commerce logistics
                            solutions in time.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Daily pickups, no limitations
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Faster Payment Service
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-600">✔</span> Cash on Delivery
                            </li>
                        </ul>
                    </div>

                    {/* Team Image */}
                    <div>
                        <img
                            src={team}
                            alt="Our Team"
                            className="w-full rounded-md object-cover hover:rotate-2 duration-300"
                        />
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                        <Target className="w-10 h-10 text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Mission</h3>
                        <p className="text-gray-600">
                            To put a smile on your face by providing fast, secure, and hassle-free
                            deliveries. We’re here to connect people and e-commerce businesses
                            worldwide with top-notch service and reliability.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
                        <Mountain className="w-10 h-10 text-green-600 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Our Vision</h3>
                        <p className="text-gray-600">
                            Redefine the future of e-commerce logistics in Bangladesh through
                            innovative solutions powered by modern technologies and customer-first
                            values.
                        </p>
                    </div>
                </div>
            </div>

            <Stats />
        </section>
    );
}
export default About;