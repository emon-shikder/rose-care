import React, { useState } from 'react';
import { FileText, Download, Filter, Calendar, Activity, DollarSign, Users } from 'lucide-react';

const reportsList = [
  { id: 'REP-001', name: 'Monthly Financial Summary', type: 'Financial', generatedBy: 'System Admin', date: 'Oct 24, 2026', size: '2.4 MB' },
  { id: 'REP-002', name: 'Patient Admission Rates', type: 'Operational', generatedBy: 'Dr. Sarah Smith', date: 'Oct 22, 2026', size: '1.1 MB' },
  { id: 'REP-003', name: 'Pharmacy Stock Alert', type: 'Inventory', generatedBy: 'System Admin', date: 'Oct 20, 2026', size: '0.8 MB' },
  { id: 'REP-004', name: 'Annual Staff Attendance', type: 'HR', generatedBy: 'HR Manager', date: 'Oct 15, 2026', size: '3.2 MB' },
  { id: 'REP-005', name: 'Department Revenue Analysis', type: 'Financial', generatedBy: 'Accountant', date: 'Oct 10, 2026', size: '4.5 MB' },
];

const Reports = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const filteredReports = activeTab === 'All' 
    ? reportsList 
    : reportsList.filter(rep => rep.type === activeTab);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Hospital Reports</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Generate, view, and download analytical reports.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <FileText className="w-4 h-4" />
             Generate New Report
           </button>
        </div>
      </div>

      {/* Quick Report Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
           <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center mb-3">
              <Activity className="w-5 h-5" />
           </div>
           <h3 className="font-semibold text-slate-800 dark:text-slate-200">Operational Reports</h3>
           <p className="text-xs text-slate-500 mt-1">Bed occupancy, admissions, ER visits.</p>
        </div>
        
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
           <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
           </div>
           <h3 className="font-semibold text-slate-800 dark:text-slate-200">Financial Reports</h3>
           <p className="text-xs text-slate-500 mt-1">Revenue, billing, unpaid invoices.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
           <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
           </div>
           <h3 className="font-semibold text-slate-800 dark:text-slate-200">HR Reports</h3>
           <p className="text-xs text-slate-500 mt-1">Staff attendance, payroll, shifts.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
           <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
           </div>
           <h3 className="font-semibold text-slate-800 dark:text-slate-200">Custom Reports</h3>
           <p className="text-xs text-slate-500 mt-1">Build reports using custom parameters.</p>
        </div>
      </div>

      {/* Generated Reports Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Toolbar & Tabs */}
        <div className="border-b border-slate-200 dark:border-slate-700 px-5 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4">
             <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Recently Generated</h3>
             <div className="flex items-center gap-3">
               <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 rounded-md text-sm text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
                 <Calendar className="w-4 h-4" />
                 Date Range
               </button>
             </div>
          </div>
          
          <div className="flex items-center gap-6 overflow-x-auto">
             {['All', 'Financial', 'Operational', 'Inventory', 'HR'].map(tab => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`pb-3 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                   activeTab === tab 
                    ? 'border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400' 
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                 }`}
               >
                 {tab}
               </button>
             ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Report Name</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Type</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Generated By</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredReports.map((report, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <FileText className="w-5 h-5 text-slate-400" />
                       <div>
                          <p className="font-medium text-slate-800 dark:text-slate-200">{report.name}</p>
                          <p className="text-xs text-slate-500">{report.size} • PDF</p>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{report.generatedBy}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">{report.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="flex items-center gap-2 ml-auto px-3 py-1.5 bg-blue-50 text-blue-600 rounded hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:hover:bg-blue-500/20 transition-colors text-xs font-medium">
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </td>
                </tr>
              ))}
              {filteredReports.length === 0 && (
                 <tr>
                   <td colSpan="5" className="px-6 py-8 text-center text-slate-500 dark:text-slate-400">
                     No reports found for this category.
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

export default Reports;
