import Logo from "../shared/Logo";


export default function Footer() {
    return (
        <footer className="bg-slate-100 text-slate-700 py-12 border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <Logo />
                        <p className="text-slate-600">Fast, reliable, and secure parcel delivery service across the globe.</p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-slate-600 hover:text-slate-500 transition">Home</a></li>
                            <li><a href="/about" className="text-slate-600 hover:text-slate-500 transition">About Us</a></li>
                            <li><a href="/tracking" className="text-slate-600 hover:text-slate-500 transition">Track Parcel</a></li>
                            <li><a href="/contact" className="text-slate-600 hover:text-slate-500 transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-slate-600 hover:text-slate-500 transition">Fast Delivery</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-slate-500 transition">Secure Payment</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-slate-500 transition">Live Tracking</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-slate-500 transition">Customer Support</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                        <p className="text-slate-600 mb-4">Get the latest news and updates about our services.</p>
                        <form className="flex flex-col sm:flex-row gap-2">
                            <input type="email" placeholder="Enter your email" className="w-full rounded-full border border-slate-500 px-4 py-2 text-slate-900 placeholder-slate-500 focus:outline-none" />

                            <button className="rounded-full bg-blue-600 px-4 py-1 text-white hover:bg-blue-500 transition">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-10 border-t border-slate-800 pt-6 text-center text-slate-600 text-sm">
                    &copy; {new Date().getFullYear()} MoveX. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
