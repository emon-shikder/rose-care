import React, { useState } from 'react';
import { Search, Plus, Filter, FileText, Download, Eye, DollarSign } from 'lucide-react';

const billingData = [
  { id: 'INV-2026-001', patient: 'John Doe', date: 'Oct 24, 2026', amount: '$450.00', status: 'Paid' },
  { id: 'INV-2026-002', patient: 'Jane Smith', date: 'Oct 23, 2026', amount: '$1,250.00', status: 'Pending' },
  { id: 'INV-2026-003', patient: 'Robert Brown', date: 'Oct 22, 2026', amount: '$85.00', status: 'Paid' },
  { id: 'INV-2026-004', patient: 'Emily Davis', date: 'Oct 20, 2026', amount: '$3,400.00', status: 'Overdue' },
  { id: 'INV-2026-005', patient: 'Michael Wilson', date: 'Oct 19, 2026', amount: '$210.00', status: 'Paid' },
];

const Billing = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Billing & Invoices</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage patient payments, invoices, and financial records.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Create Invoice
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 rounded-full flex items-center justify-center">
               <DollarSign className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Revenue</p>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white">$45,231.00</h3>
            </div>
         </div>
         <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 rounded-full flex items-center justify-center">
               <FileText className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Pending Invoices</p>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white">24</h3>
            </div>
         </div>
         <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 rounded-full flex items-center justify-center">
               <DollarSign className="w-6 h-6" />
            </div>
            <div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Overdue Amount</p>
               <h3 className="text-2xl font-bold text-slate-800 dark:text-white">$8,450.00</h3>
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
              placeholder="Search invoice or patient..." 
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
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Invoice ID</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Patient</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Amount</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {billingData.map((inv, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200">{inv.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{inv.patient}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{inv.date}</td>
                  <td className="px-6 py-4 font-medium text-slate-800 dark:text-slate-200">{inv.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                      inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' :
                      inv.status === 'Overdue' ? 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400' :
                      'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
                    }`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors rounded-md hover:bg-blue-50 dark:hover:bg-slate-700" title="Download">
                        <Download className="w-4 h-4" />
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

export default Billing;
