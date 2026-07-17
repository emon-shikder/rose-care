import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
                    <Link to="/" className="text-blue-500 hover:text-blue-700">Back to Website</Link>
                </div>
            </header>
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
