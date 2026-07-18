import React from 'react';
import { Plus, Edit, Trash2, Building } from 'lucide-react';

const specsData = [
  { id: 1, name: 'Cardiology', description: 'Deals with disorders of the heart as well as some parts of the circulatory system.', count: 4 },
  { id: 2, name: 'Neurology', description: 'Deals with disorders of the nervous system, including the brain and spinal cord.', count: 3 },
  { id: 3, name: 'Pediatrics', description: 'Medical care of infants, children, and adolescents.', count: 5 },
  { id: 4, name: 'Orthopedics', description: 'Surgery concerned with conditions involving the musculoskeletal system.', count: 2 },
  { id: 5, name: 'Dermatology', description: 'Medicine dealing with the skin and its diseases.', count: 1 },
];

const Specializations = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Specializations</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage doctor specialties and hospital departments.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Specialization
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Specialization Name</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm w-1/2">Description</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Total Doctors</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {specsData.map((spec) => (
                <tr key={spec.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded bg-blue-50 text-blue-600 dark:bg-slate-700 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                          <Building className="w-4 h-4" />
                       </div>
                       <p className="font-medium text-slate-800 dark:text-slate-200">{spec.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">{spec.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {spec.count} Doctors
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

export default Specializations;
