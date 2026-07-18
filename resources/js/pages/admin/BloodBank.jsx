import React, { useState } from 'react';
import { Search, Plus, Filter, Droplet, Eye, Edit, Trash2 } from 'lucide-react';

const bloodData = [
  { id: 1, group: 'A+', bags: 25, status: 'Normal', lastUpdated: 'Oct 24, 2026' },
  { id: 2, group: 'A-', bags: 8, status: 'Low', lastUpdated: 'Oct 23, 2026' },
  { id: 3, group: 'B+', bags: 30, status: 'Normal', lastUpdated: 'Oct 24, 2026' },
  { id: 4, group: 'B-', bags: 5, status: 'Critical', lastUpdated: 'Oct 22, 2026' },
  { id: 5, group: 'AB+', bags: 15, status: 'Normal', lastUpdated: 'Oct 24, 2026' },
  { id: 6, group: 'AB-', bags: 2, status: 'Critical', lastUpdated: 'Oct 20, 2026' },
  { id: 7, group: 'O+', bags: 45, status: 'Normal', lastUpdated: 'Oct 24, 2026' },
  { id: 8, group: 'O-', bags: 10, status: 'Low', lastUpdated: 'Oct 21, 2026' },
];

const BloodBank = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBlood = bloodData.filter(b => 
    b.group.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Blood Bank Inventory</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage blood group stocks and donor records.</p>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-md shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
             Donor List
           </button>
           <button className="flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-md shadow-sm hover:bg-rose-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Blood Stock
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         {/* Summary Cards */}
         <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 rounded-full flex items-center justify-center">
               <Droplet className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Bags</p>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white">140</h3>
            </div>
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
              placeholder="Search blood group..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Blood Group</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Stock Available (Bags)</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status Level</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Last Updated</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredBlood.map((blood) => (
                <tr key={blood.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400 flex items-center justify-center font-bold text-lg">
                          {blood.group}
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200 text-base">{blood.bags}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      blood.status === 'Normal' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      blood.status === 'Critical' ? 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400' :
                      'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
                    }`}>
                      {blood.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{blood.lastUpdated}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="Edit Stock">
                        <Edit className="w-4 h-4" />
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

export default BloodBank;
