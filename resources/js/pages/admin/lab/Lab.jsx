import React, { useState } from 'react';
import { Search, Plus, Filter, FlaskConical, FileText, Eye, Edit, Trash2 } from 'lucide-react';

const labData = [
  { id: 'LAB-101', testName: 'Complete Blood Count', patient: 'John Doe', date: 'Oct 24, 2026', doctor: 'Dr. Sarah Smith', status: 'Completed', result: 'Available' },
  { id: 'LAB-102', testName: 'Lipid Profile', patient: 'Jane Smith', date: 'Oct 24, 2026', doctor: 'Dr. Michael Chen', status: 'In Progress', result: 'Pending' },
  { id: 'LAB-103', testName: 'Liver Function Test', patient: 'Robert Brown', date: 'Oct 23, 2026', doctor: 'Dr. Emily Johnson', status: 'Completed', result: 'Available' },
  { id: 'LAB-104', testName: 'Thyroid Panel', patient: 'Emily Davis', date: 'Oct 22, 2026', doctor: 'Dr. Sarah Smith', status: 'Cancelled', result: 'N/A' },
];

const Lab = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Pathology / Lab</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage laboratory tests, patient reports, and diagnostic results.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Lab Test
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
              placeholder="Search by patient, test name or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
            <Filter className="w-4 h-4" />
            Filter Status
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Test Information</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Patient & Doctor</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {labData.map((test, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-500 flex items-center justify-center">
                          <FlaskConical className="w-4 h-4" />
                       </div>
                       <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">{test.testName}</p>
                          <p className="text-xs text-slate-500">{test.id}</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                     <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{test.patient}</p>
                     <p className="text-xs text-slate-500 dark:text-slate-400">Ref: {test.doctor}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{test.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      test.status === 'Completed' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      test.status === 'In Progress' ? 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400' :
                      'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                    }`}>
                      {test.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="View Report">
                        <FileText className="w-4 h-4" />
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

export default Lab;
