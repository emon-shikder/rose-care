import React from 'react';
import { Save, Upload, User, Mail, Phone, MapPin, Building, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddDoctor = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Add New Doctor</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Register a new medical professional to the hospital system.</p>
        </div>
        <div className="flex gap-3">
           <Link to="/admin/doctors/list" className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-md shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
             Cancel
           </Link>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Save className="w-4 h-4" />
             Save Doctor
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Left Col: Photo & Status */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-4">Profile Photo</h3>
            <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer group">
               <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <User className="w-8 h-8 text-slate-400" />
               </div>
               <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">
                  <Upload className="w-4 h-4" />
                  <span>Click to upload image</span>
               </div>
               <p className="text-xs text-slate-500 text-center">SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800 dark:text-white mb-4">Account Status</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <input type="radio" name="status" id="status-active" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" defaultChecked />
                 <label htmlFor="status-active" className="text-sm font-medium text-slate-700 dark:text-slate-300">Active</label>
              </div>
              <div className="flex items-center gap-3">
                 <input type="radio" name="status" id="status-inactive" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
                 <label htmlFor="status-inactive" className="text-sm font-medium text-slate-700 dark:text-slate-300">Inactive / On Leave</label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Col: Details Form */}
        <div className="xl:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="text" placeholder="e.g. Sarah" className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="text" placeholder="e.g. Smith" className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="email" placeholder="doctor@rosecare.com" className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="text" placeholder="+1 (555) 000-0000" className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Specialization <span className="text-rose-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-4 w-4 text-slate-400" />
                  </div>
                  <select className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white appearance-none">
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="pediatrics">Pediatrics</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Experience (Years)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-4 w-4 text-slate-400" />
                  </div>
                  <input type="number" placeholder="e.g. 10" className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Biography / About</label>
                <textarea rows="4" placeholder="Brief description about the doctor's background, education, and expertise..." className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
