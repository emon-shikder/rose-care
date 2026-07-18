import React from 'react';
import { Plus, Edit, Trash2, Star, Quote } from 'lucide-react';

const testimonialsList = [
  { id: 1, name: 'John Doe', role: 'Patient', text: 'The care I received at RoseCare was exceptional. The doctors were attentive and the facilities are top-notch.', rating: 5, status: 'Visible' },
  { id: 2, name: 'Jane Smith', role: 'Patient', text: 'Highly recommend the pediatric department. They made my child feel so comfortable during the entire visit.', rating: 5, status: 'Visible' },
  { id: 3, name: 'Robert Brown', role: 'Patient Family', text: 'Clean hospital, friendly staff, and great emergency response. Very satisfied with the service.', rating: 4, status: 'Hidden' },
];

const TestimonialsCMS = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Testimonials CMS</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Manage patient reviews and feedback shown on the website.</p>
        </div>
        <div>
           <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition-colors text-sm font-medium">
             <Plus className="w-4 h-4" />
             Add Testimonial
           </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Reviewer Info</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm w-1/2">Feedback</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Rating</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm">Status</th>
                <th className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300 text-sm text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {testimonialsList.map((testimonial) => (
                <tr key={testimonial.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-800 dark:text-slate-200">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.role}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                       <Quote className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5" />
                       <p className="text-sm text-slate-600 dark:text-slate-300 italic line-clamp-2">{testimonial.text}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                       {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300 dark:text-slate-600'}`} />
                       ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      testimonial.status === 'Visible' 
                        ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400' 
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'
                    }`}>
                      {testimonial.status}
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

export default TestimonialsCMS;
