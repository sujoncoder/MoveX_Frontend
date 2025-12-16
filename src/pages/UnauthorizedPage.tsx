import { ShieldX, Lock, AlertTriangle, ArrowLeft, Home } from 'lucide-react';


const UnauthorizedPage = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-2xl w-full">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
                    {/* Icon with animation */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-red-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            <div className="relative bg-linear-to-br from-red-500 to-red-700 p-6 rounded-full">
                                <ShieldX className="w-16 h-16 text-white" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    {/* Error code */}
                    <div className="text-center mb-4">
                        <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-400 mb-2">
                            403
                        </h1>
                    </div>

                    {/* Main heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
                        Access Denied
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 text-center text-lg mb-8 leading-relaxed">
                        You don't have permission to access this resource. Please contact your administrator if you believe this is an error.
                    </p>

                    {/* Warning boxes */}
                    <div className="space-y-3 mb-8">
                        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                            <Lock className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-red-300 text-sm font-medium mb-1">Restricted Area</p>
                                <p className="text-red-200/70 text-xs">This section requires special access privileges</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4">
                            <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                            <div>
                                <p className="text-yellow-300 text-sm font-medium mb-1">Security Notice</p>
                                <p className="text-yellow-200/70 text-xs">Unauthorized access attempts are logged and monitored</p>
                            </div>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="flex items-center justify-center gap-2 bg-linear-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </button>

                        <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 border border-white/20 hover:border-white/30 hover:scale-105">
                            <Home className="w-5 h-5" />
                            Home Page
                        </button>
                    </div>

                    {/* Footer text */}
                    <div className="mt-8 pt-6 border-t border-white/10 text-center">
                        <p className="text-gray-400 text-sm">
                            Error Code: <span className="text-white font-mono">ERR_FORBIDDEN_403</span>
                        </p>
                    </div>
                </div>

                {/* Additional info card */}
                <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm">
                        Need access? Contact{' '}
                        <span className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors">
                            support@movex.com
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UnauthorizedPage;