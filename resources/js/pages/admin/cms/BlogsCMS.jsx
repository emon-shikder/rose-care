import React from 'react';
import { Plus, Edit, Trash2, Calendar, User } from 'lucide-react';

const blogsList = [
  { id: 1, title: '10 Tips for a Healthy Heart', author: 'Dr. Sarah Smith', date: 'Oct 24, 2026', status: 'Published' },
  { id: 2, title: 'Understanding Neurological Disorders', author: 'Dr. Michael Chen', date: 'Oct 20, 2026', status: 'Published' },
  { id: 3, title: 'Nutrition for Kids: What Parents Need to Know', author: 'Dr. Emily Johnson', date: 'Oct 15, 2026', status: 'Draft' },
];

const BlogsCMS = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Blogs CMS</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage news and articles for your hospital blog.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Create New Post
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm w-1/2">Post Title</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Author</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Date</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {blogsList.map((blog) => (
                <tr key={blog.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors cursor-pointer">{blog.title}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <User className="w-4 h-4 text-slate-400" />
                       <span className="text-sm text-slate-600 dark:text-slate-300">{blog.author}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-4 h-4 text-slate-400" />
                       <span className="text-sm text-slate-600 dark:text-slate-300">{blog.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      blog.status === 'Published' 
                        ? 'bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400' 
                        : 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
                    }`}>
                      {blog.status}
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

export default BlogsCMS;
