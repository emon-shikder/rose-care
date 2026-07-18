import React from 'react';
import { Save, Image as ImageIcon, Link as LinkIcon, Type, FileText } from 'lucide-react';

const HeroCMS = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Hero Section CMS</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage the main landing area of your website.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Save className="w-4 h-4" />
             Save Changes
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Text Content</h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Main Headline</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                    <Type className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea rows="2" defaultValue="Your Health Is Our Top Priority" className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Sub-headline / Description</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-center pointer-events-none">
                    <FileText className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea rows="3" defaultValue="We are committed to providing the highest quality healthcare services to you and your family. Book an appointment today to experience world-class medical care." className="w-full pl-10 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white"></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Call to Action Buttons</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 border border-slate-100 dark:border-slate-700 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">Primary Button</h4>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500">Button Text</label>
                  <input type="text" defaultValue="Book Appointment" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500">Link URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <LinkIcon className="h-4 w-4 text-slate-400" />
                    </div>
                    <input type="text" defaultValue="/book-appointment" className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 border border-slate-100 dark:border-slate-700 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50">
                <h4 className="font-medium text-slate-700 dark:text-slate-300">Secondary Button</h4>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500">Button Text</label>
                  <input type="text" defaultValue="Learn More" className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-500">Link URL</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                      <LinkIcon className="h-4 w-4 text-slate-400" />
                    </div>
                    <input type="text" defaultValue="/about" className="w-full pl-8 pr-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-6">Hero Background Image</h3>
            
            <div className="space-y-4">
              <div className="w-full aspect-video rounded-lg overflow-hidden border-2 border-dashed border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors cursor-pointer group">
                <ImageIcon className="w-10 h-10 mb-3 text-slate-400 group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-medium group-hover:text-blue-500 transition-colors">Click to upload new image</span>
                <span className="text-xs mt-1 text-slate-400">1920x1080 recommended</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                This image will be displayed prominently at the top of your homepage. Make sure it's high quality and relevant to healthcare.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCMS;
