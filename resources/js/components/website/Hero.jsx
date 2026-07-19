import React from 'react';
import { Calendar, Play, CheckCircle2, Star, Users, Smile, Award, Activity, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-slate-50 pt-24 pb-20 overflow-hidden flex flex-col justify-center font-sans">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-400/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/3"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    
                    {/* Text Content */}
                    <div className="lg:col-span-6 space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 border border-emerald-200/50 text-emerald-700 text-sm font-semibold backdrop-blur-sm shadow-sm mb-4 transition-transform hover:scale-105 duration-300">
                            <HeartPulse className="w-4 h-4" />
                            <span>Premium Healthcare Center</span>
                        </div>
                        
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Elevate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                                Wellbeing
                            </span>
                        </h1>
                        
                        <p className="text-lg text-slate-600 max-w-xl leading-relaxed text-justify sm:text-left">
                            Experience next-generation medical care where advanced technology meets compassionate expertise. Your health is our masterpiece.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link to="/book-appointment" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-emerald-600 rounded-2xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 overflow-hidden shadow-xl shadow-emerald-600/30">
                                <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                                <span className="relative flex items-center gap-2">
                                    Book Appointment
                                    <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            
                            <button className="group inline-flex items-center justify-center px-8 py-4 font-bold text-slate-700 transition-all duration-300 bg-white rounded-2xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 border border-slate-200/60 shadow-lg shadow-slate-200/40">
                                <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-emerald-100 text-emerald-600 group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-current ml-0.5" />
                                </div>
                                How We Work
                            </button>
                        </div>
                        
                        {/* Trust Indicators */}
                        <div className="pt-8 flex items-center gap-6 border-t border-slate-200/60">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <img key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" />
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-amber-500 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-sm font-semibold text-slate-700">Trusted by 15k+ patients</p>
                            </div>
                        </div>
                    </div>

                    {/* Image & Interactive Elements */}
                    <div className="lg:col-span-6 relative lg:ml-10 mt-12 lg:mt-0">
                        {/* Decorative Background Blob behind image */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-teal-100 rounded-full blur-[80px] opacity-60"></div>
                        
                        {/* Main Image Container */}
                        <div className="relative z-10 w-full rounded-[2.5rem] bg-white border border-white/50 shadow-2xl p-3 sm:p-4 overflow-visible">
                            <div className="relative w-full rounded-[2rem] overflow-hidden bg-slate-50 aspect-[4/5] flex items-end justify-center group">
                                <img 
                                    src="/images/hero_medical_team.png" 
                                    alt="Medical Team" 
                                    className="w-full h-full object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Soft overlay at bottom to anchor the image */}
                                <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none"></div>
                            </div>
                            
                            {/* Glassmorphic Floating Card 1 */}
                            <div className="absolute -left-2 sm:-left-6 lg:-left-12 top-10 sm:top-20 bg-white/90 backdrop-blur-md border border-white/60 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 animate-pulse" style={{animationDuration: '3s'}}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                                    <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Success Rate</p>
                                    <p className="text-lg sm:text-xl font-extrabold text-slate-800">99.8%</p>
                                </div>
                            </div>

                            {/* Glassmorphic Floating Card 2 */}
                            <div className="absolute -right-2 sm:-right-4 lg:-right-8 bottom-12 sm:bottom-24 bg-white/90 backdrop-blur-md border border-white/60 p-3 sm:p-4 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 animate-bounce" style={{animationDuration: '4s'}}>
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
                                    <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Award Winning</p>
                                    <p className="text-lg sm:text-xl font-extrabold text-slate-800">Clinic 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modern Features Strip */}
                <div className="mt-20 lg:mt-32">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: CheckCircle2, title: "Expert Doctors", desc: "Top medical specialists" },
                            { icon: Activity, title: "Modern Tech", desc: "Advanced equipment" },
                            { icon: HeartPulse, title: "24/7 Care", desc: "Always here for you" },
                            { icon: Smile, title: "Patient First", desc: "Comfortable experience" }
                        ].map((feature, idx) => (
                            <div key={idx} className="group p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-4 group-hover:scale-110 transition-transform group-hover:bg-emerald-600 group-hover:text-white">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-800 mb-1">{feature.title}</h3>
                                <p className="text-sm text-slate-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
