import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Save, Building, Mail, Phone, MapPin } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Settings</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage your hospital system preferences and profile.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Save className="w-4 h-4" />
             Save Changes
           </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <nav className="flex flex-col p-2 space-y-1">
              <button 
                onClick={() => setActiveTab('general')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'general' 
                    ? 'bg-blue-50 text-blue-600 dark:bg-slate-700 dark:text-white' 
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-300'
                }`}
              >
                <Building className={`w-5 h-5 ${activeTab === 'general' ? 'text-blue-600 dark:text-white' : 'text-slate-400'}`} />
                General Information
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'profile' 
                    ? 'bg-blue-50 text-blue-600 dark:bg-slate-700 dark:text-white' 
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-300'
                }`}
              >
                <User className={`w-5 h-5 ${activeTab === 'profile' ? 'text-blue-600 dark:text-white' : 'text-slate-400'}`} />
                My Profile
              </button>
              <button 
                onClick={() => setActiveTab('security')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'security' 
                    ? 'bg-blue-50 text-blue-600 dark:bg-slate-700 dark:text-white' 
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-300'
                }`}
              >
                <Lock className={`w-5 h-5 ${activeTab === 'security' ? 'text-blue-600 dark:text-white' : 'text-slate-400'}`} />
                Security & Password
              </button>
              <button 
                onClick={() => setActiveTab('notifications')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'notifications' 
                    ? 'bg-blue-50 text-blue-600 dark:bg-slate-700 dark:text-white' 
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-300'
                }`}
              >
                <Bell className={`w-5 h-5 ${activeTab === 'notifications' ? 'text-blue-600 dark:text-white' : 'text-slate-400'}`} />
                Notifications
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8">
            
            {/* General Settings */}
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Hospital Information</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Update your hospital's basic information and contact details.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Hospital Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" defaultValue="RoseCare Hospital" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Contact Email</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="email" defaultValue="admin@rosecare.com" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" defaultValue="+1 (555) 123-4567" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Website URL</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Globe className="h-5 w-5 text-slate-400" />
                      </div>
                      <input type="text" defaultValue="https://rosecare.com" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Address</label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-slate-400" />
                      </div>
                      <textarea rows="3" defaultValue="123 Health Avenue, Medical District, NY 10001" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">My Profile</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Update your personal account information.</p>
                </div>
                
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 dark:border-slate-700">
                    <img src="https://ui-avatars.com/api/?name=Musharof&background=F1F5F9&color=334155" alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md shadow-sm hover:bg-blue-100 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-colors text-sm font-medium mb-2">
                      Upload New Photo
                    </button>
                    <p className="text-xs text-slate-500 dark:text-slate-400">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                    <input type="text" defaultValue="Musharof" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                    <input type="text" defaultValue="Chowdhury" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                    <input type="email" defaultValue="musharof@example.com" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
                    <input type="text" defaultValue="Super Administrator" disabled className="w-full px-3 py-2 border border-slate-200 rounded-md bg-slate-50 text-slate-500 cursor-not-allowed dark:bg-slate-900/50 dark:border-slate-800" />
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Security & Password</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Manage your password and security settings.</p>
                </div>
                
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Current Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Confirm New Password</label>
                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Notification Preferences</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Choose what notifications you want to receive.</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg dark:border-slate-700">
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white">New Appointment Alerts</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications when a new appointment is booked.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg dark:border-slate-700">
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white">Weekly Reports</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Get a weekly summary of hospital performance.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg dark:border-slate-700">
                    <div>
                      <h4 className="font-medium text-slate-800 dark:text-white">System Updates</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Receive notifications about system maintenance and updates.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" value="" className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
