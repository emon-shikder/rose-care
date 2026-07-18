import React, { useState } from 'react';
import { Search, Plus, MoreVertical, Edit, Trash2, Eye, Filter, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const patientsData = [
  { id: 'PT-001', name: 'John Doe', age: 45, gender: 'Male', phone: '+1 234-567-8901', email: 'john.doe@example.com', lastVisit: 'Oct 24, 2026', status: 'Admitted' },
  { id: 'PT-002', name: 'Jane Smith', age: 32, gender: 'Female', phone: '+1 234-567-8902', email: 'jane.smith@example.com', lastVisit: 'Oct 20, 2026', status: 'Discharged' },
  { id: 'PT-003', name: 'Robert Brown', age: 58, gender: 'Male', phone: '+1 234-567-8903', email: 'robert.b@example.com', lastVisit: 'Oct 15, 2026', status: 'In Treatment' },
  { id: 'PT-004', name: 'Emily Davis', age: 24, gender: 'Female', phone: '+1 234-567-8904', email: 'emily.davis@example.com', lastVisit: 'Oct 10, 2026', status: 'Discharged' },
  { id: 'PT-005', name: 'Michael Wilson', age: 67, gender: 'Male', phone: '+1 234-567-8905', email: 'm.wilson@example.com', lastVisit: 'Oct 05, 2026', status: 'Admitted' },
];

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatients = patientsData.filter(pt => 
    pt.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pt.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Patient List</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage and view hospital patient records.</p>
        </div>
        <div>
           <Link to="/admin/patients/add" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add New Patient
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
              placeholder="Search by name or patient ID..." 
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
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Patient Info</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Contact</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Age / Gender</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Last Visit</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredPatients.length > 0 ? (
                filteredPatients.map((pt, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border border-slate-200 dark:border-slate-600">
                           <User className="w-5 h-5 text-slate-400" />
                        </div>
                        <div>
                           <p className="font-medium text-slate-800 dark:text-slate-200">{pt.name}</p>
                           <p className="text-xs text-slate-500 dark:text-slate-400">{pt.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{pt.phone}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{pt.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{pt.age} Yrs</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{pt.gender}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{pt.lastVisit}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        pt.status === 'Admitted' ? 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400' :
                        pt.status === 'In Treatment' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400' :
                        'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
                      }`}>
                        {pt.status}
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
                  <td colSpan="6" className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                    No patients found matching "{searchTerm}".
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

export default PatientList;
