import React, { useState } from 'react';
import { Search, Plus, Filter, UserCog, Edit, Trash2, Eye } from 'lucide-react';

const hrData = [
  { id: 'EMP-001', name: 'Alice Walker', role: 'Nurse', department: 'ICU', phone: '+1 234-567-8001', status: 'Active' },
  { id: 'EMP-002', name: 'James Harris', role: 'Pharmacist', department: 'Pharmacy', phone: '+1 234-567-8002', status: 'Active' },
  { id: 'EMP-003', name: 'Susan Lee', role: 'Receptionist', department: 'Administration', phone: '+1 234-567-8003', status: 'On Leave' },
  { id: 'EMP-004', name: 'David Miller', role: 'Lab Technician', department: 'Pathology', phone: '+1 234-567-8004', status: 'Active' },
  { id: 'EMP-005', name: 'Nancy Turner', role: 'Head Nurse', department: 'Maternity', phone: '+1 234-567-8005', status: 'Inactive' },
];

const HumanResources = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Human Resources</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage hospital staff, nurses, technicians, and administration.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Employee
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-b border-slate-200 dark:border-slate-700">
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search employee name or role..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
            <Filter className="w-4 h-4" />
            Filter Department
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Employee Name</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Role & Dept</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Contact</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {hrData.map((emp, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center">
                          <UserCog className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">{emp.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{emp.id}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{emp.role}</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">{emp.department}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                     {emp.phone}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      emp.status === 'Active' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      emp.status === 'On Leave' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400' :
                      'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                    }`}>
                      {emp.status}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HumanResources;
