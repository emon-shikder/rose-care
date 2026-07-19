import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Ahmed',
        role: 'Businessman',
        content: '"The best hospital experience I\'ve ever had. Very friendly and professional."',
        avatar: 'https://i.pravatar.cc/150?img=5',
        rating: 5
    },
    {
        name: 'Marjia Islam',
        role: 'Teacher',
        content: '"RoseCare\'s surgical team saved my life! Highly recommended."',
        avatar: 'https://i.pravatar.cc/150?img=9',
        rating: 5
    },
    {
        name: 'Rahat Hossain',
        role: 'Engineer',
        content: '"Clean hospital, modern equipment and excellent patient care. Satisfied!"',
        avatar: 'https://i.pravatar.cc/150?img=11',
        rating: 5
    },
    {
        name: 'Farhana Akter',
        role: 'Designer',
        content: '"The pediatric department is amazing. My kids love visiting their doctors here."',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5
    },
    {
        name: 'Tariq Rahman',
        role: 'Accountant',
        content: '"Quick emergency response and very clear communication from the staff."',
        avatar: 'https://i.pravatar.cc/150?img=12',
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-white relative overflow-hidden">
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-250px * 5 - 1rem * 5)); }
                }
                .marquee-container {
                    display: flex;
                    width: calc(250px * 10 + 1rem * 10);
                    animation: scroll 20s linear infinite;
                }
                .marquee-container:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
            
            {/* Decorative circle with rose */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-50/50 rounded-full -translate-x-1/2 -z-10 flex items-center justify-end pr-16">
                <svg width="80" height="120" viewBox="0 0 100 150" fill="none" className="text-emerald-100 opacity-80 mix-blend-multiply">
                    <path d="M50 140 C50 120, 45 100, 45 80" stroke="#7ebc89" strokeWidth="3" fill="none" strokeLinecap="round"/>
                    <path d="M45 110 C35 110, 20 105, 15 90 C15 90, 30 100, 45 100" fill="#7ebc89"/>
                    <path d="M45 90 C55 90, 70 85, 75 70 C75 70, 60 80, 45 80" fill="#7ebc89"/>
                    <path d="M45 80 C25 80, 10 60, 20 40 C30 20, 60 20, 70 40 C80 60, 65 80, 45 80" fill="#fff" stroke="#d4af37" strokeWidth="1"/>
                    <path d="M45 75 C30 75, 20 60, 25 45 C30 30, 60 30, 65 45 C70 60, 60 75, 45 75" fill="#fff" stroke="#d4af37" strokeWidth="1"/>
                    <path d="M45 70 C35 70, 25 55, 30 45 C35 35, 55 35, 60 45 C65 55, 55 70, 45 70" fill="#fff" stroke="#d4af37" strokeWidth="1"/>
                    <path d="M45 60 C40 60, 35 50, 40 45 C45 40, 50 40, 50 45 C50 50, 50 60, 45 60" fill="#fff" stroke="#d4af37" strokeWidth="1"/>
                </svg>
            </div>

            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] overflow-hidden">
                <div className="text-center mb-10">
                    <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-[13px] mb-2">
                        TESTIMONIALS
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                        What Our Patients Say
                    </h2>
                </div>

                <div className="relative max-w-[100vw] overflow-hidden -mx-4 px-4 pb-8">
                    {/* Left and right fade gradients for smooth entering/exiting */}
                    <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
                    
                    <div className="marquee-container gap-4">
                        {/* We duplicate the array to make the marquee loop seamlessly */}
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div key={index} className="w-[250px] shrink-0 bg-white rounded-xl border border-slate-100 shadow-[0_2px_10px_rgb(0,0,0,0.04)] p-5 relative flex flex-col hover:shadow-md transition-shadow z-10 cursor-default">
                                <Quote className="absolute top-4 left-4 w-8 h-8 text-emerald-100 opacity-70 rotate-180" />
                                
                                <div className="flex gap-1 mb-3 pl-8">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                                    ))}
                                </div>
                                
                                <p className="text-slate-600 font-medium leading-snug mb-5 flex-grow pl-8 text-[13px]">
                                    {testimonial.content}
                                </p>
                                
                                <div className="flex items-center gap-3 mt-auto">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-9 h-9 rounded-full object-cover" />
                                    <div>
                                        <h4 className="font-bold text-slate-800 text-[13px] leading-tight">{testimonial.name}</h4>
                                        <span className="text-[11px] text-slate-500 font-medium">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
