import { SearchX, Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <SearchX className="w-16 h-16 text-gray-400" strokeWidth={1.5} />
                </div>

                {/* 404 */}
                <h1 className="text-6xl font-bold text-gray-800 mb-3">
                    404
                </h1>

                {/* Heading */}
                <h2 className="text-2xl font-semibold text-gray-700 mb-3">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mb-8">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-2.5 rounded-lg transition-colors"
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </button>

                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-700 font-medium px-6 py-2.5 rounded-lg border border-gray-300 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
export default NotFoundPage;