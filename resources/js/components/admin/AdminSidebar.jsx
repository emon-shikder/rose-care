import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, CalendarCheck, Stethoscope, Users, Building2,
  Receipt, BedDouble, Pill, FlaskConical, Droplet, UserCog,
  Globe, Settings, ChevronDown, ChevronRight, FileText
} from 'lucide-react';

const menuGroups = [
  {
    title: 'MAIN',
    items: [
      { name: 'Dashboard', icon: LayoutDashboard, path: '/admin', iconColor: 'text-blue-400' },
      { name: 'Appointments', icon: CalendarCheck, path: '/admin/appointments', badge: '12', iconColor: 'text-emerald-400' },
      { 
        name: 'Doctors', icon: Stethoscope, path: '/admin/doctors', iconColor: 'text-indigo-400',
        subItems: [
           { name: 'Doctor List', path: '/admin/doctors/list' },
           { name: 'Add Doctor', path: '/admin/doctors/add' },
           { name: 'Specializations', path: '/admin/doctors/specializations' }
        ]
      },
      { 
        name: 'Patients', icon: Users, path: '/admin/patients', iconColor: 'text-pink-400',
        subItems: [
           { name: 'Patient List', path: '/admin/patients/list' },
           { name: 'Add Patient', path: '/admin/patients/add' }
        ]
      },
      { name: 'Departments', icon: Building2, path: '/admin/departments', iconColor: 'text-amber-400' },
    ]
  },
  {
    title: 'OPERATIONS',
    items: [
      { name: 'Billing', icon: Receipt, path: '/admin/billing', iconColor: 'text-green-400' },
      { 
        name: 'Bed Manager', icon: BedDouble, path: '/admin/beds', iconColor: 'text-cyan-400',
        subItems: [
           { name: 'Bed List', path: '/admin/beds/list' },
           { name: 'Bed Categories', path: '/admin/beds/categories' }
        ]
      },
      { name: 'Pharmacy', icon: Pill, path: '/admin/pharmacy', iconColor: 'text-rose-400' },
      { name: 'Pathology / Lab', icon: FlaskConical, path: '/admin/lab', iconColor: 'text-fuchsia-400' },
      { name: 'Blood Bank', icon: Droplet, path: '/admin/blood-bank', iconColor: 'text-red-400' },
      { name: 'Human Resources', icon: UserCog, path: '/admin/hr', iconColor: 'text-orange-400' },
    ]
  },
  {
    title: 'WEBSITE & SYSTEM',
    items: [
      { 
        name: 'Website CMS', icon: Globe, path: '/admin/website', iconColor: 'text-teal-400',
        subItems: [
           { name: 'Hero Section', path: '/admin/website/hero' },
           { name: 'Services', path: '/admin/website/services' },
           { name: 'Blogs', path: '/admin/website/blogs' },
           { name: 'Testimonials', path: '/admin/website/testimonials' },
           { name: 'Why Choose Us', path: '/admin/website/why-choose-us' }
        ]
      },
      { name: 'Reports', icon: FileText, path: '/admin/reports', iconColor: 'text-yellow-400' },
      { name: 'Settings', icon: Settings, path: '/admin/settings', iconColor: 'text-slate-400' },
    ]
  }
];

const SidebarItem = ({ item, isActive, isExpanded, toggleExpand, sidebarCollapsed }) => {
  const Icon = item.icon;
  const hasSubItems = !!item.subItems;
  const iconColorClass = item.iconColor || 'text-slate-400';

  return (
    <div className="mb-0">
      {hasSubItems ? (
        <button
          onClick={() => {
             if (sidebarCollapsed) return;
             toggleExpand();
          }}
          className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center px-0' : 'justify-between px-6'} py-2.5 transition-colors duration-200 group relative ${
            isActive || isExpanded 
              ? 'bg-blue-50/50 text-blue-600 font-medium dark:bg-slate-700 dark:text-white' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
          }`}
          title={sidebarCollapsed ? item.name : undefined}
        >
          <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
            <Icon className={`w-5 h-5 flex-shrink-0 ${isActive || isExpanded ? iconColorClass : `${iconColorClass} opacity-80 group-hover:opacity-100`}`} />
            {!sidebarCollapsed && <span className="text-[15px] truncate">{item.name}</span>}
            {!sidebarCollapsed && item.badge && (
              <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white bg-green-500 rounded-sm">
                {item.badge}
              </span>
            )}
          </div>
          {!sidebarCollapsed && (isExpanded ? <ChevronDown className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover:text-blue-500 dark:group-hover:text-white" /> : <ChevronRight className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-white" />)}
        </button>
      ) : (
        <Link
          to={item.path}
          className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center px-0' : 'px-6'} py-2.5 transition-colors duration-200 group relative ${
            isActive 
              ? 'bg-blue-50/50 text-blue-600 font-medium dark:bg-slate-700 dark:text-white' 
              : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white'
          }`}
          title={sidebarCollapsed ? item.name : undefined}
        >
          <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? iconColorClass : `${iconColorClass} opacity-80 group-hover:opacity-100`}`} />
          {!sidebarCollapsed && <span className="text-[15px] truncate">{item.name}</span>}
          {!sidebarCollapsed && item.badge && (
            <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-white bg-green-500 rounded-sm">
              {item.badge}
            </span>
          )}
        </Link>
      )}

      {/* Sub Items */}
      {hasSubItems && !sidebarCollapsed && (
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[400px]' : 'max-h-0'}`}
        >
          <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-700/50 border-t border-slate-100 dark:border-slate-700/50 bg-slate-50 dark:bg-slate-800/80 pl-14 pr-6 text-sm text-slate-500 dark:text-slate-400">
            {item.subItems.map((subItem, idx) => {
               return (
                  <Link 
                    key={idx} 
                    to={subItem.path}
                    className="py-1.5 hover:text-blue-600 dark:hover:text-white transition-colors truncate"
                  >
                    {subItem.name}
                  </Link>
               );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const AdminSidebar = ({ sidebarOpen, setSidebarOpen, sidebarCollapsed }) => {
  const location = useLocation();
  const [expandedMenus, setExpandedMenus] = useState({});

  const toggleMenu = (name) => {
    setExpandedMenus(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/50 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transform transition-all duration-300 ease-in-out flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-auto ${
          sidebarCollapsed ? 'w-[80px]' : 'w-[280px]'
        }`}
      >
        {/* Logo */}
        <div className={`flex items-center h-[72px] ${sidebarCollapsed ? 'justify-center px-0' : 'px-6'}`}>
          <Link to="/admin" className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
                <span className="text-white font-bold text-xl leading-none">R</span>
             </div>
             {!sidebarCollapsed && <span className="text-[22px] font-bold text-slate-800 dark:text-white truncate">RoseCare</span>}
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto py-4 px-0 scrollbar-thin scrollbar-thumb-slate-200 hover:scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-600">
          {menuGroups.map((group, index) => (
            <div key={index} className="mb-6">
              {!sidebarCollapsed ? (
                <h3 className="mb-4 ml-6 text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-[0.15em]">
                  {group.title}
                </h3>
              ) : (
                <div className="mb-4 flex justify-center text-slate-300 dark:text-slate-600">
                  <span className="w-4 border-b-2 border-slate-200 dark:border-slate-700 rounded"></span>
                </div>
              )}
              <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-700/50 border-y border-slate-100 dark:border-slate-700/50">
                {group.items.map((item, idx) => {
                  // A very simple active check for demonstration
                  const isActive = location.pathname === item.path || (location.pathname !== '/admin' && location.pathname.startsWith(item.path));
                  return (
                    <SidebarItem 
                      key={idx} 
                      item={item} 
                      isActive={isActive} 
                      isExpanded={expandedMenus[item.name]}
                      toggleExpand={() => toggleMenu(item.name)}
                      sidebarCollapsed={sidebarCollapsed}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
