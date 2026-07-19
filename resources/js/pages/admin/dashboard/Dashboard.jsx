import React from 'react';
import { 
  Users, CalendarCheck, BedDouble, DollarSign, 
  ArrowUpRight, ArrowDownRight, MoreVertical 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar
} from 'recharts';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, colorClass, bgClass }) => (
  <div className="rounded-xl border border-slate-200 bg-white px-6 py-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-transform hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800">
    <div className={`flex h-12 w-12 items-center justify-center rounded-full ${bgClass} mb-4`}>
      <Icon className={`w-6 h-6 ${colorClass}`} />
    </div>
    <div className="flex items-end justify-between">
      <div>
        <h4 className="text-2xl font-bold text-slate-800 dark:text-white">{value}</h4>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</span>
      </div>
      <span className={`flex items-center gap-1 text-sm font-medium ${trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
        {trendValue}
        {trend === 'up' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
      </span>
    </div>
  </div>
);

const patientData = [
  { name: 'Jan', patients: 420 },
  { name: 'Feb', patients: 580 },
  { name: 'Mar', patients: 850 },
  { name: 'Apr', patients: 750 },
  { name: 'May', patients: 1100 },
  { name: 'Jun', patients: 1450 },
  { name: 'Jul', patients: 1800 },
];

const revenueData = [
  { name: 'Mon', revenue: 4200 },
  { name: 'Tue', revenue: 3800 },
  { name: 'Wed', revenue: 6500 },
  { name: 'Thu', revenue: 4900 },
  { name: 'Fri', revenue: 8100 },
  { name: 'Sat', revenue: 5200 },
  { name: 'Sun', revenue: 6700 },
];

const recentAppointments = [
  { id: '#APP-001', patient: 'Musharof Chowdhury', doctor: 'Dr. Sarah Smith', department: 'Cardiology', date: 'Oct 24, 2026', time: '10:00 AM', status: 'Confirmed' },
  { id: '#APP-002', patient: 'John Doe', doctor: 'Dr. Michael Chen', department: 'Neurology', date: 'Oct 24, 2026', time: '11:30 AM', status: 'Pending' },
  { id: '#APP-003', patient: 'Jane Smith', doctor: 'Dr. Emily Johnson', department: 'Pediatrics', date: 'Oct 24, 2026', time: '01:15 PM', status: 'Completed' },
  { id: '#APP-004', patient: 'Robert Brown', doctor: 'Dr. William Davis', department: 'Orthopedics', date: 'Oct 24, 2026', time: '03:45 PM', status: 'Cancelled' },
  { id: '#APP-005', patient: 'Linda Wilson', doctor: 'Dr. Sarah Smith', department: 'Cardiology', date: 'Oct 25, 2026', time: '09:00 AM', status: 'Confirmed' },
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

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Hospital Dashboard</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Welcome back, here is what's happening today.</p>
        </div>
        <div className="flex gap-3">
           <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-md shadow-sm hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors text-sm font-medium">
             Download Report
           </button>
           <button className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             New Appointment
           </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Total Patients" value="3,456" icon={Users} 
          trend="up" trendValue="4.35%" 
          colorClass="text-blue-600 dark:text-blue-400" bgClass="bg-blue-50 dark:bg-blue-500/10"
        />
        <StatCard 
          title="Appointments Today" value="142" icon={CalendarCheck} 
          trend="up" trendValue="12.5%" 
          colorClass="text-emerald-600 dark:text-emerald-400" bgClass="bg-emerald-50 dark:bg-emerald-500/10"
        />
        <StatCard 
          title="Available Beds" value="48 / 250" icon={BedDouble} 
          trend="down" trendValue="2.4%" 
          colorClass="text-amber-600 dark:text-amber-400" bgClass="bg-amber-50 dark:bg-amber-500/10"
        />
        <StatCard 
          title="Revenue (Monthly)" value="$45,231" icon={DollarSign} 
          trend="up" trendValue="8.2%" 
          colorClass="text-purple-600 dark:text-purple-400" bgClass="bg-purple-50 dark:bg-purple-500/10"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        
        {/* Patient Admissions Chart */}
        <div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
               <h3 className="font-semibold text-slate-800 dark:text-white text-lg">Patient Admissions</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400">Over the last 7 months</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={patientData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                   itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="patients" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPatients)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
               <h3 className="font-semibold text-slate-800 dark:text-white text-lg">Weekly Revenue</h3>
               <p className="text-sm text-slate-500 dark:text-slate-400">Last 7 days</p>
            </div>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" strokeOpacity={0.5} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                   cursor={{fill: 'rgba(226, 232, 240, 0.4)'}}
                   contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                   itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={24} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Grid for Tables & Occupancy */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
        
        {/* Recent Appointments Table */}
        <div className="xl:col-span-2 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-semibold text-slate-800 dark:text-white text-lg">Recent Appointments</h3>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400 text-sm">Patient</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400 text-sm">Doctor</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400 text-sm">Date & Time</th>
                  <th className="px-6 py-4 font-medium text-slate-500 dark:text-slate-400 text-sm">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {recentAppointments.map((app, index) => (
                  <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-800 dark:text-slate-200">{app.patient}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{app.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-slate-700 dark:text-slate-300">{app.doctor}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{app.department}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-700 dark:text-slate-300">{app.date}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{app.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide ${getStatusBadge(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-700">
            <Link to="/admin/appointments" className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              View All Appointments &rarr;
            </Link>
          </div>
        </div>

        {/* Department Occupancy / Stats */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-700">
            <h3 className="font-semibold text-slate-800 dark:text-white text-lg">Department Occupancy</h3>
            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6 space-y-7">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Cardiology</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">85%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 dark:bg-slate-700 overflow-hidden">
                <div className="bg-rose-500 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Neurology</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">60%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 dark:bg-slate-700 overflow-hidden">
                <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000" style={{ width: '60%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Pediatrics</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">45%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 dark:bg-slate-700 overflow-hidden">
                <div className="bg-emerald-500 h-2 rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Orthopedics</span>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">72%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 dark:bg-slate-700 overflow-hidden">
                <div className="bg-amber-500 h-2 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full py-2.5 rounded-lg border border-dashed border-slate-300 text-sm font-medium text-slate-600 hover:border-blue-500 hover:text-blue-600 dark:border-slate-600 dark:text-slate-400 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors">
                View All Departments
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
