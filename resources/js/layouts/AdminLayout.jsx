import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/Admin/AdminSidebar';
import AdminHeader from '../components/Admin/AdminHeader';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false); // For desktop

    return (
        <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-900 font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300">
            {/* Sidebar */}
            <AdminSidebar 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                sidebarCollapsed={sidebarCollapsed}
                setSidebarCollapsed={setSidebarCollapsed}
            />

            {/* Content Area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                {/* Header */}
                <AdminHeader 
                    sidebarOpen={sidebarOpen} 
                    setSidebarOpen={setSidebarOpen} 
                    sidebarCollapsed={sidebarCollapsed}
                    setSidebarCollapsed={setSidebarCollapsed}
                />

                {/* Main Content */}
                <main className="p-4 md:p-6 2xl:p-10 flex-grow transition-all duration-300">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
