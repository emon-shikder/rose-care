import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit, Trash2, Eye, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const doctorsData = [
  { id: 'DR-001', name: 'Dr. Sarah Smith', specialization: 'Cardiologist', email: 'sarah.smith@rosecare.com', phone: '+1 234-567-8901', status: 'Active', image: 'https://ui-avatars.com/api/?name=Sarah+Smith&background=EFF6FF&color=1D4ED8' },
  { id: 'DR-002', name: 'Dr. Michael Chen', specialization: 'Neurologist', email: 'michael.chen@rosecare.com', phone: '+1 234-567-8902', status: 'Active', image: 'https://ui-avatars.com/api/?name=Michael+Chen&background=F0FDF4&color=15803D' },
  { id: 'DR-003', name: 'Dr. Emily Johnson', specialization: 'Pediatrician', email: 'emily.johnson@rosecare.com', phone: '+1 234-567-8903', status: 'On Leave', image: 'https://ui-avatars.com/api/?name=Emily+Johnson&background=FEFCE8&color=A16207' },
  { id: 'DR-004', name: 'Dr. William Davis', specialization: 'Orthopedic Surgeon', email: 'william.davis@rosecare.com', phone: '+1 234-567-8904', status: 'Active', image: 'https://ui-avatars.com/api/?name=William+Davis&background=F5F3FF&color=6D28D9' },
  { id: 'DR-005', name: 'Dr. Jessica Martinez', specialization: 'Dermatologist', email: 'jessica.m@rosecare.com', phone: '+1 234-567-8905', status: 'Inactive', image: 'https://ui-avatars.com/api/?name=Jessica+Martinez&background=FEF2F2&color=B91C1C' },
];

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDoctors = doctorsData.filter(doc => 
    doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    doc.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Doctor List</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage the hospital's medical staff.</p>
        </div>
        <div>
           <Link to="/admin/doctors/add" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add New Doctor
           </Link>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-b border-slate-200 dark:border-slate-700">
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or specialization..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
               <Filter className="w-4 h-4" />
               Filter
             </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Doctor Info</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Contact</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Specialization</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doc, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={doc.image} alt={doc.name} className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-600" />
                        <div>
                           <p className="font-medium text-slate-800 dark:text-slate-200">{doc.name}</p>
                           <p className="text-xs text-slate-500 dark:text-slate-400">{doc.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{doc.phone}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{doc.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                        {doc.specialization}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        doc.status === 'Active' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        doc.status === 'On Leave' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400' :
                        'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                      }`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="View Profile">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors rounded-md hover:bg-rose-50 dark:hover:bg-slate-700" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                    No doctors found matching "{searchTerm}".
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
