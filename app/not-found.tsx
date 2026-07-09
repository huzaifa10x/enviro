import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#f2faf7] flex items-center justify-center px-4 sm:px-6 lg:px-8 font-urbanist">
            <div className="max-w-md w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">

                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#e6f7ef] rounded-full blur-xl opacity-70 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-primary/10 rounded-full blur-xl opacity-50 pointer-events-none"></div>

                <div className="space-y-4 relative z-10">
                    <h1 className="text-9xl font-extrabold text-primary tracking-tight animate-pulse">
                        404
                    </h1>

                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
                        Page Not Found
                    </h2>

                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium bg-primary text-white hover:bg-[#0f994b] transition-all duration-200 shadow-sm text-sm text-center"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}