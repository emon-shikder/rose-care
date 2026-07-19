import React, { useState, useEffect, useRef } from 'react';
import { Menu, Search, Moon, Sun, Bell, ChevronDown, AlignLeft, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminHeader = ({ sidebarOpen, setSidebarOpen, sidebarCollapsed, setSidebarCollapsed }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const [darkMode, setDarkMode] = useState(() => {
    // Default to light mode initially unless explicitly set to dark in local storage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <header className="sticky top-0 z-30 flex w-full bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="flex flex-grow items-center justify-between px-4 h-[72px] md:px-6 2xl:px-11">
        
        {/* Mobile menu toggle & Desktop collapse & Search */}
        <div className="flex items-center gap-4">
          {/* Mobile Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="z-50 block rounded-sm border border-slate-200 bg-white p-1.5 shadow-sm lg:hidden text-slate-500 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:block rounded-sm border border-slate-200 bg-white p-1.5 shadow-sm text-slate-500 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <AlignLeft className="w-5 h-5" />
          </button>
          
          <div className="hidden sm:block">
            <div className="relative">
              <button className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-500 px-4 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Search or type command..."
                className="w-full bg-transparent pl-12 pr-14 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none dark:text-white"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3 flex items-center">
                 <span className="flex items-center justify-center bg-slate-100 text-slate-400 text-xs font-medium px-1.5 py-0.5 rounded border border-slate-200 dark:bg-slate-700 dark:border-slate-600">
                   ⌘K
                 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          <ul className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <li>
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-300"
              >
                {darkMode ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>
            </li>
            
            {/* Notifications */}
            <li>
              <button className="relative flex items-center justify-center w-[34px] h-[34px] rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-300">
                <Bell className="w-[18px] h-[18px]" />
                <span className="absolute top-[2px] right-[2px] w-[9px] h-[9px] rounded-full bg-red-500 border-2 border-white dark:border-slate-700"></span>
              </button>
            </li>
          </ul>

          {/* User Profile */}
          <div ref={profileRef} className="relative pl-3 sm:pl-6 border-l border-slate-200 dark:border-slate-700">
            <div 
              onClick={() => setProfileOpen(!profileOpen)}
              className="flex items-center gap-3 cursor-pointer group"
            >
               <div className="hidden sm:flex flex-col items-end">
                   <span className="text-sm font-medium text-slate-700 dark:text-slate-200 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {user?.name || 'Admin'}
                   </span>
               </div>
               <div className="w-[42px] h-[42px] rounded-full overflow-hidden border border-slate-200 dark:border-slate-600 shadow-sm">
                  <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || 'Admin')}&background=F1F5F9&color=334155`} alt="User" className="w-full h-full object-cover" />
               </div>
               <ChevronDown className={`w-4 h-4 text-slate-500 dark:text-slate-400 hidden sm:block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg py-1 border border-slate-200 dark:border-slate-700 z-50">
                <div className="px-4 py-2 border-b border-slate-200 dark:border-slate-700 sm:hidden">
                   <p className="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">{user?.name || 'Admin'}</p>
                   <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{user?.email}</p>
                </div>
                <Link
                  to="/admin/settings"
                  onClick={() => setProfileOpen(false)}
                  className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <User className="w-4 h-4 mr-2" />
                  Profile Settings
                </Link>
                <button
                  onClick={async () => {
                    await logout();
                    navigate('/admin/login');
                  }}
                  className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:text-red-400 dark:hover:bg-slate-700 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
