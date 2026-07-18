import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        title: '5 Tips for a Healthy Heart',
        category: 'Cardiology',
        date: 'June 10, 2024',
        image: '/images/blog_1.png'
    },
    {
        title: 'How Regular Checkups Can Save Your Life',
        category: 'Wellness',
        date: 'June 8, 2024',
        image: '/images/blog_2.png'
    },
    {
        title: 'Foods That Boost Your Immune System',
        category: 'Nutrition',
        date: 'June 5, 2024',
        image: '/images/blog_3.png'
    }
];

const Blogs = () => {
    return (
        <section className="py-10 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="flex flex-col items-center justify-center mb-12 relative">
                    {/* The small pill navigation dots at the top */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-4 h-2 rounded-full bg-emerald-600"></div>
                        <div className="w-4 h-2 rounded-full bg-slate-200"></div>
                    </div>

                    <div className="text-center flex flex-col items-center">
                        <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-[13px] mb-3">
                            OUR BLOG
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                            Latest Medical Tips & News
                        </h2>
                    </div>
                    
                    <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group absolute right-0 bottom-2">
                        View All Posts 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden flex h-44 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all p-2">
                            <div className="w-[40%] rounded-xl overflow-hidden bg-slate-100 shrink-0">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-[60%] p-4 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[11px] font-bold text-emerald-600 px-2 py-0.5 rounded border border-emerald-600/30">
                                        {blog.category}
                                    </span>
                                    <span className="text-[11px] text-slate-400 font-medium">
                                        {blog.date}
                                    </span>
                                </div>
                                <h4 className="text-[15px] font-extrabold text-slate-800 mb-3 leading-snug line-clamp-2">
                                    {blog.title}
                                </h4>
                                <a href="#" className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
                                    Read More 
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors group">
                        View All Posts 
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
