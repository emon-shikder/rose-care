import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Edit, Trash2, CalendarCheck, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

const appointmentsData = [
  { id: '#APP-001', patient: 'Musharof Chowdhury', phone: '+1 234-567-8900', doctor: 'Dr. Sarah Smith', department: 'Cardiology', date: 'Oct 24, 2026', time: '10:00 AM', status: 'Confirmed' },
  { id: '#APP-002', patient: 'John Doe', phone: '+1 234-567-8901', doctor: 'Dr. Michael Chen', department: 'Neurology', date: 'Oct 24, 2026', time: '11:30 AM', status: 'Pending' },
  { id: '#APP-003', patient: 'Jane Smith', phone: '+1 234-567-8902', doctor: 'Dr. Emily Johnson', department: 'Pediatrics', date: 'Oct 24, 2026', time: '01:15 PM', status: 'Completed' },
  { id: '#APP-004', patient: 'Robert Brown', phone: '+1 234-567-8903', doctor: 'Dr. William Davis', department: 'Orthopedics', date: 'Oct 24, 2026', time: '03:45 PM', status: 'Cancelled' },
  { id: '#APP-005', patient: 'Linda Wilson', phone: '+1 234-567-8904', doctor: 'Dr. Sarah Smith', department: 'Cardiology', date: 'Oct 25, 2026', time: '09:00 AM', status: 'Confirmed' },
  { id: '#APP-006', patient: 'James Taylor', phone: '+1 234-567-8905', doctor: 'Dr. Michael Chen', department: 'Neurology', date: 'Oct 25, 2026', time: '10:30 AM', status: 'Pending' },
  { id: '#APP-007', patient: 'Patricia Moore', phone: '+1 234-567-8906', doctor: 'Dr. Emily Johnson', department: 'Pediatrics', date: 'Oct 25, 2026', time: '02:00 PM', status: 'Confirmed' },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Confirmed': return 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400';
    case 'Pending': return 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400';
    case 'Completed': return 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400';
    case 'Cancelled': return 'bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400';
    default: return 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400';
  }
};

const Appointments = () => {
  const [filterStatus, setFilterStatus] = useState('All');
  
  const filteredAppointments = filterStatus === 'All' 
    ? appointmentsData 
    : appointmentsData.filter(app => app.status === filterStatus);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Appointments</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage and track all patient appointments.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <CalendarCheck className="w-4 h-4" />
             New Appointment
           </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        
        {/* Table Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 border-b border-slate-200 dark:border-slate-700">
          <div className="relative max-w-sm w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search patients, doctors..." 
              className="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Filter className="w-4 h-4" />
                <span>Filter by:</span>
             </div>
             <select 
               value={filterStatus}
               onChange={(e) => setFilterStatus(e.target.value)}
               className="py-1.5 px-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white text-sm"
             >
               <option value="All">All Status</option>
               <option value="Confirmed">Confirmed</option>
               <option value="Pending">Pending</option>
               <option value="Completed">Completed</option>
               <option value="Cancelled">Cancelled</option>
             </select>
          </div>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Patient</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Doctor</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Date & Time</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {filteredAppointments.length > 0 ? (
                filteredAppointments.map((app, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-800 dark:text-slate-200">{app.patient}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{app.id} • {app.phone}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-700 dark:text-slate-300">{app.doctor}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{app.department}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{app.date}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{app.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${getStatusBadge(app.status)}`}>
                        {app.status}
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
                    No appointments found matching the current filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing <span className="font-medium text-slate-700 dark:text-slate-200">1</span> to <span className="font-medium text-slate-700 dark:text-slate-200">{filteredAppointments.length}</span> of <span className="font-medium text-slate-700 dark:text-slate-200">12</span> results
          </p>
          <div className="flex items-center gap-1">
            <button className="p-1 rounded-md border border-slate-200 text-slate-400 bg-white hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-2.5 py-1 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">1</button>
            <button className="px-2.5 py-1 text-sm rounded-md border border-blue-600 bg-blue-600 text-white font-medium">2</button>
            <button className="p-1 rounded-md border border-slate-200 text-slate-400 bg-white hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
