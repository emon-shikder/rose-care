import React, { useState } from 'react';
import { Search, Plus, Edit, Trash2, Building2, Users, BedDouble, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const departmentsData = [
  { id: 'DEP-01', name: 'Cardiology', head: 'Dr. Sarah Smith', doctors: 12, bedsTotal: 50, bedsAvailable: 15, status: 'Active', description: 'Specialized care for heart and cardiovascular system.' },
  { id: 'DEP-02', name: 'Neurology', head: 'Dr. Michael Chen', doctors: 8, bedsTotal: 30, bedsAvailable: 5, status: 'Active', description: 'Diagnosis and treatment of nervous system disorders.' },
  { id: 'DEP-03', name: 'Pediatrics', head: 'Dr. Emily Johnson', doctors: 15, bedsTotal: 40, bedsAvailable: 22, status: 'Active', description: 'Medical care for infants, children, and adolescents.' },
  { id: 'DEP-04', name: 'Orthopedics', head: 'Dr. William Davis', doctors: 10, bedsTotal: 35, bedsAvailable: 8, status: 'Active', description: 'Treatment of the musculoskeletal system.' },
  { id: 'DEP-05', name: 'Emergency', head: 'Dr. Robert Wilson', doctors: 20, bedsTotal: 60, bedsAvailable: 10, status: 'Active', description: '24/7 urgent medical care and trauma response.' },
  { id: 'DEP-06', name: 'Dermatology', head: 'Dr. Jessica Martinez', doctors: 5, bedsTotal: 10, bedsAvailable: 6, status: 'Inactive', description: 'Treatment of skin, hair, and nail conditions.' },
];

const Departments = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDepartments = departmentsData.filter(dep => 
    dep.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    dep.head.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Departments</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage hospital departments, capacities, and staff allocations.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Department
           </button>
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
              placeholder="Search departments or HOD..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
            />
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Department</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Head of Dept.</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-center">Staff & Capacity</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredDepartments.length > 0 ? (
                filteredDepartments.map((dep, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700 flex items-center justify-center border border-blue-100 dark:border-slate-600">
                           <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                           <p className="font-medium text-slate-800 dark:text-slate-200">{dep.name}</p>
                           <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px]">{dep.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-700 dark:text-slate-300">{dep.head}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">ID: {dep.id}</p>
                    </td>
                    <td className="px-6 py-4">
                       <div className="flex items-center justify-center gap-6">
                         <div className="flex flex-col items-center" title="Total Doctors">
                           <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                             <Users className="w-4 h-4" />
                             <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{dep.doctors}</span>
                           </div>
                           <span className="text-[10px] text-slate-500 uppercase tracking-wider">Doctors</span>
                         </div>
                         <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                         <div className="flex flex-col items-center" title="Beds Available / Total">
                           <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                             <BedDouble className="w-4 h-4" />
                             <span className="font-medium text-sm text-emerald-600 dark:text-emerald-400">{dep.bedsAvailable}</span>
                             <span className="text-xs">/ {dep.bedsTotal}</span>
                           </div>
                           <span className="text-[10px] text-slate-500 uppercase tracking-wider">Beds</span>
                         </div>
                       </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                        dep.status === 'Active' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                        'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                      }`}>
                        {dep.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1">
                        <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="View Details">
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
                    No departments found matching "{searchTerm}".
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

export default Departments;
