import React from 'react';
import { Plus, MoreVertical, Edit, Trash2 } from 'lucide-react';

const servicesList = [
  { id: 1, title: 'Cardiology', icon: 'HeartPulse', description: 'Advanced heart care and surgery.', status: 'Active' },
  { id: 2, title: 'Neurology', icon: 'Brain', description: 'Comprehensive neurological treatments.', status: 'Active' },
  { id: 3, title: 'Orthopedics', icon: 'Bone', description: 'Bone and joint care specialties.', status: 'Active' },
  { id: 4, title: 'Pediatrics', icon: 'Baby', description: 'Specialized healthcare for children.', status: 'Inactive' },
];

const ServicesCMS = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Services CMS</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage the medical services offered on your website.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add New Service
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Service Title</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Description</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Icon Class</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {servicesList.map((service) => (
                <tr key={service.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-800 dark:text-slate-200">{service.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400 truncate max-w-xs">{service.description}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                      {service.icon}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Active' 
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                    }`}>
                      {service.status}
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

export default ServicesCMS;
