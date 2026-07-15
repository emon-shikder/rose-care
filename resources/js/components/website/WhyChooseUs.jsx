import React from 'react';
import { Play, CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

const WhyChooseUs = () => {
    return (
        <section className="py-10 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="text-center mb-16">
                    <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
                        <div className="w-8 h-[2px] bg-emerald-600"></div>
                        WHY CHOOSE US
                        <div className="w-8 h-[2px] bg-emerald-600"></div>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 flex items-center justify-center flex-col gap-6">
                        We Provide The Best Dental Care
                        <div className="relative w-16 h-[2px] bg-slate-200 flex items-center justify-center">
                            <div className="absolute w-3 h-3 bg-emerald-600 rounded-full border-[3px] border-white"></div>
                        </div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-stretch">
                    
                    {/* Left - Image */}
                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl min-h-[400px] lg:min-h-full h-full group">
                        <img src="/images/clinic-room.png" alt="Dental Clinic" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className="absolute bottom-8 right-8 z-10">
                            <button className="bg-emerald-600 text-white rounded-full p-4 shadow-xl border-4 border-white hover:bg-emerald-700 transition-all hover:scale-110 flex items-center justify-center">
                                <Play className="w-6 h-6 fill-current ml-1" />
                            </button>
                        </div>
                    </div>

                    {/* Middle - Why Choose Us Content */}
                    <div className="lg:py-4 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">
                            Commitment to Your Smile
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed text-[15px]">
                            At RoseCare, we combine advanced technology with compassionate care to deliver the best dental experience tailored just for you.
                        </p>
                        <p className="text-slate-600 mb-8 leading-relaxed text-[15px]">
                            Our dedicated team of professionals ensures that every visit is comfortable, safe, and completely pain-free, setting a new standard in modern dentistry.
                        </p>
                        
                        <ul className="space-y-4 mb-10">
                            {[
                                'Modern & Advanced Equipment',
                                'Certified & Experienced Dentists',
                                'Pain-Free & Comfortable Treatment',
                                'Affordable Pricing for Everyone',
                                'Digital X-Ray & 3D Scanning'
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-700 font-semibold text-[15px]">
                                    <CheckCircle2 className="w-[22px] h-[22px] text-emerald-600 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div>
                            <button className="btn bg-[#0f4c3a] hover:bg-[#0a3629] text-white border-none rounded-xl px-8 h-[52px] shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5 transition-all text-[15px]">
                                Learn More About Us
                            </button>
                        </div>
                    </div>

                    {/* Right - Booking Form */}
                    <div className="bg-[#f2faf6] rounded-[2rem] p-8 lg:p-10 shadow-sm border border-emerald-100/50 relative overflow-hidden">
                        {/* Decorative leaf SVG matching the screenshot vibe */}
                        <div className="absolute -bottom-12 -right-12 text-emerald-700/80 pointer-events-none">
                            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M50 100 C50 70, 70 60, 90 40 C70 50, 60 70, 50 100" fill="#2d6a4f" opacity="0.8"/>
                                <path d="M50 100 C40 80, 20 70, 10 50 C30 60, 40 80, 50 100" fill="#40916c" opacity="0.9"/>
                                <path d="M50 100 C50 60, 80 40, 100 20 C70 40, 50 70, 50 100" fill="#1b4332"/>
                            </svg>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-8 relative z-10">
                            <div className="bg-white p-2.5 rounded-xl text-emerald-600 border border-emerald-100 shadow-sm">
                                <Calendar className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800">Book Your Appointment</h3>
                        </div>

                        <form className="space-y-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" className="w-full bg-white border border-emerald-50 rounded-[14px] px-5 py-[14px] text-[15px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow placeholder:text-slate-400" />
                            
                            <input type="text" placeholder="Phone Number" className="w-full bg-white border border-emerald-50 rounded-[14px] px-5 py-[14px] text-[15px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow placeholder:text-slate-400" />
                            
                            <input type="email" placeholder="Email Address" className="w-full bg-white border border-emerald-50 rounded-[14px] px-5 py-[14px] text-[15px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow placeholder:text-slate-400" />
                            
                            <div className="relative">
                                <select className="w-full bg-white border border-emerald-50 rounded-[14px] px-5 py-[14px] text-[15px] text-slate-500 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow cursor-pointer">
                                    <option value="">Select Treatment</option>
                                    <option value="whitening">Teeth Whitening</option>
                                    <option value="cleaning">Dental Cleaning</option>
                                    <option value="implants">Dental Implants</option>
                                    <option value="orthodontics">Orthodontics</option>
                                </select>
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                            
                            <div className="relative">
                                <input type="text" placeholder="Preferred Date" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => {if(!e.target.value) e.target.type = 'text'}} className="w-full bg-white border border-emerald-50 rounded-[14px] px-5 py-[14px] text-[15px] text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow cursor-pointer placeholder:text-slate-400 [&::-webkit-calendar-picker-indicator]:opacity-0" />
                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-600">
                                    <Calendar className="w-[18px] h-[18px]" />
                                </div>
                            </div>

                            <textarea placeholder="Message (Optional)" rows="2" className="w-full bg-white border border-emerald-50 rounded-[14px] px-5 py-[14px] text-[15px] text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-shadow resize-none placeholder:text-slate-400"></textarea>
                            
                            <button className="w-full btn bg-[#168962] hover:bg-[#127251] text-white border-none rounded-xl h-[52px] text-[15px] font-semibold flex items-center justify-center gap-2 group transition-all hover:shadow-lg mt-2">
                                Book Now 
                                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1.5 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
