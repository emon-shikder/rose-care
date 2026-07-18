import React from 'react';
import { Plus, Edit, Trash2, BedDouble } from 'lucide-react';

const categoryData = [
  { id: 1, name: 'General Ward', description: 'Standard beds in shared rooms with basic monitoring facilities.', bedsTotal: 150, bedsAvailable: 45 },
  { id: 2, name: 'Private Room', description: 'Single occupancy rooms with attached washrooms and premium amenities.', bedsTotal: 50, bedsAvailable: 12 },
  { id: 3, name: 'ICU (Intensive Care Unit)', description: 'Highly equipped beds for critically ill patients requiring constant monitoring.', bedsTotal: 25, bedsAvailable: 3 },
  { id: 4, name: 'Maternity', description: 'Specialized beds for expecting mothers and postnatal care.', bedsTotal: 30, bedsAvailable: 8 },
];

const BedCategories = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Bed Categories</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage ward types and bed capacities.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Category
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Category Name</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm w-1/2">Description</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Capacity (Avail / Total)</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {categoryData.map((cat) => (
                <tr key={cat.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-cyan-50 text-cyan-600 dark:bg-slate-700 dark:text-cyan-400 flex items-center justify-center flex-shrink-0">
                          <BedDouble className="w-4 h-4" />
                       </div>
                       <p className="font-medium text-slate-800 dark:text-slate-200">{cat.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{cat.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {cat.bedsAvailable} / {cat.bedsTotal} Beds
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors" title="Delete">
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

export default BedCategories;
