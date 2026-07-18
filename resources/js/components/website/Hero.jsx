import React from 'react';
import { Calendar, Play, CheckCircle2, Star, Users, Smile, Award } from 'lucide-react';

const Hero = () => {
    return (
        <div className="bg-emerald-50/50 min-h-screen pt-20 pb-12 overflow-hidden flex flex-col justify-center">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-8 z-10 relative">
                        {/* Decorative subtle background circle */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
                        
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                            Smile With <br />
                            <span className="text-emerald-600 flex items-center gap-3 mt-2">
                                Confidence 
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-500 animate-pulse">
                                    <path d="M12 22c-2.5 0-4.5-2-4.5-4.5V17c0-.5-.5-1-1-1s-1 .5-1 1v.5C5.5 20 3.5 18 3.5 15.5V9C3.5 6 6 3.5 9 3.5h6c3 0 5.5 2.5 5.5 5.5v6.5c0 2.5-2 4.5-4.5 4.5v-.5c0-.5-.5-1-1-1s-1 .5-1 1v.5c0 2.5-2 4.5-4.5 4.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 22v-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17.5 4.5l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21.5 7.5l-2-1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21.5 3.5l-1 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </h1>
                        
                        <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                            Advanced medical care with a gentle touch. <br />
                            We provide comprehensive healthcare that lasts a lifetime.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
                            {[
                                'Cardiology', 'Neurology', 
                                'Pediatrics', 'Emergency Care', 
                                'Orthopedics'
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-slate-700 font-semibold text-sm">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                    {feature}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-6">
                            <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-xl px-8 h-14 flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all hover:scale-105">
                                Book Appointment
                                <Calendar className="w-4 h-4 ml-1" />
                            </button>
                            <button className="btn bg-white hover:bg-gray-50 text-slate-700 border-none rounded-xl px-8 h-14 flex items-center gap-3 shadow-lg shadow-slate-200/50 transition-all hover:scale-105">
                                <span className="bg-emerald-50 p-2 rounded-full text-emerald-600">
                                    <Play className="w-4 h-4 fill-current ml-0.5" />
                                </span>
                                Watch Video
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative mt-12 lg:mt-0 pl-0 lg:pl-10">
                        {/* Background subtle curve */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-100/30 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -inset-4 bg-emerald-50 rounded-full blur-2xl -z-10 opacity-70"></div>
                        
                        <div className="relative z-10 w-full max-w-md mx-auto lg:max-w-none">
                            {/* Main image container */}
                            <div className="relative rounded-b-[100px] rounded-t-[40px] overflow-hidden border-[12px] border-white shadow-2xl bg-emerald-50 aspect-[4/5]">
                                <img src="/images/hero-hospital.png" alt="Doctor examining patient" className="w-full h-full object-cover" />
                            </div>

                            {/* Floating Cards */}
                            <div className="absolute -top-6 -right-6 lg:-right-12 bg-white p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4s'}}>
                                <div className="bg-amber-100 p-2.5 rounded-xl text-amber-500">
                                    <Star className="w-6 h-6 fill-current" />
                                </div>
                                <div>
                                    <div className="font-extrabold text-slate-800 text-xl flex items-center gap-1">
                                        4.9
                                    </div>
                                    <div className="text-xs font-semibold text-slate-500">Patient Rating</div>
                                    <div className="flex gap-0.5 mt-0.5">
                                        {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />)}
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 -translate-y-1/2 -right-8 lg:-right-16 bg-white p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                                <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-extrabold text-slate-800 text-xl">20+</div>
                                    <div className="text-xs font-semibold text-slate-500">Experienced<br/>Doctors</div>
                                </div>
                            </div>

                            <div className="absolute bottom-8 -right-4 lg:-right-12 bg-white p-4 pr-6 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}>
                                <div className="bg-emerald-500 p-2 rounded-full text-white">
                                    <Smile className="w-6 h-6 fill-current" />
                                </div>
                                <div>
                                    <div className="font-extrabold text-slate-800 text-xl">15K+</div>
                                    <div className="text-xs font-semibold text-slate-500">Happy<br/>Patients</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Stats Bar */}
                <div className="mt-20 lg:mt-28 bg-white rounded-3xl p-8 lg:p-10 shadow-2xl shadow-emerald-900/5 relative z-20 border border-slate-50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center lg:text-left">
                            <div className="bg-emerald-50 p-4 rounded-full text-emerald-600">
                                <Smile className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-slate-800">15K+</div>
                                <div className="text-sm font-semibold text-slate-500 mt-1">Happy Patients</div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center lg:text-left">
                            <div className="bg-emerald-50 p-4 rounded-full text-emerald-600">
                                <Users className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-slate-800">25+</div>
                                <div className="text-sm font-semibold text-slate-500 mt-1">Medical Experts</div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center lg:text-left">
                            <div className="bg-emerald-50 p-4 rounded-full text-emerald-600">
                                <Award className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-slate-800">12+</div>
                                <div className="text-sm font-semibold text-slate-500 mt-1">Years Experience</div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-4 text-center lg:text-left">
                            <div className="bg-emerald-50 p-4 rounded-full text-emerald-600">
                                <Star className="w-8 h-8" />
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-slate-800">98%</div>
                                <div className="text-sm font-semibold text-slate-500 mt-1">Patient Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
