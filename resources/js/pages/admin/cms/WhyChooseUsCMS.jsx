import React from 'react';
import { Save, CheckCircle2, Shield, Clock, HeartPulse } from 'lucide-react';

const WhyChooseUsCMS = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Why Choose Us CMS</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage the key features and selling points of your hospital.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Save className="w-4 h-4" />
             Save Changes
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Feature 1 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
             <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <CheckCircle2 className="w-5 h-5" />
             </div>
             <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Feature 1</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
              <input type="text" defaultValue="Expert Doctors" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
              <textarea rows="3" defaultValue="Our hospital features some of the most renowned and experienced medical professionals in the country." className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
             <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-slate-700 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Shield className="w-5 h-5" />
             </div>
             <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Feature 2</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
              <input type="text" defaultValue="Advanced Technology" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
              <textarea rows="3" defaultValue="We use state-of-the-art medical equipment and technology to ensure accurate diagnosis and effective treatments." className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
             <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-slate-700 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <Clock className="w-5 h-5" />
             </div>
             <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Feature 3</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
              <input type="text" defaultValue="24/7 Emergency Care" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
              <textarea rows="3" defaultValue="Our emergency department is open around the clock to handle critical medical situations immediately." className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-700">
             <div className="w-10 h-10 rounded-lg bg-rose-50 dark:bg-slate-700 flex items-center justify-center text-rose-600 dark:text-rose-400">
                <HeartPulse className="w-5 h-5" />
             </div>
             <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Feature 4</h3>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Title</label>
              <input type="text" defaultValue="Compassionate Care" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Description</label>
              <textarea rows="3" defaultValue="We treat every patient like family, offering personalized and compassionate care tailored to their needs." className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WhyChooseUsCMS;
