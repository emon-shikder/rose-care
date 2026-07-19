import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-md w-full relative z-10">
                <div className="mb-8 relative">
                    <h1 className="text-9xl font-black text-primary/20 select-none">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-base-100 p-4 rounded-xl shadow-lg border border-base-300">
                            <span className="text-4xl">🏥</span>
                        </div>
                    </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
                <p className="text-base-content/70 mb-8 text-lg">
                    Oops! It looks like the page you are looking for has been moved, deleted, or doesn't exist.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => window.history.back()} 
                        className="btn btn-outline gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                    <Link to="/" className="btn btn-primary gap-2">
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
