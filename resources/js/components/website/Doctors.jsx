import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const doctors = [
    {
        name: 'Dr. Ayesha Rahman',
        specialty: 'Cardiologist',
        experience: '10+ Years Exp.',
        image: '/images/doctor_female.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Imran Hossain',
        specialty: 'Neurologist',
        experience: '12+ Years Exp.',
        image: '/images/doctor_male.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Nusrat Jahan',
        specialty: 'Pediatrician',
        experience: '8+ Years Exp.',
        image: '/images/doctor_female.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Tanvir Ahmed',
        specialty: 'General Surgeon',
        experience: '9+ Years Exp.',
        image: '/images/doctor_male.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Salma Begum',
        specialty: 'Gynecologist',
        experience: '15+ Years Exp.',
        image: '/images/doctor_female.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Kamal Hasan',
        specialty: 'Orthopedics',
        experience: '11+ Years Exp.',
        image: '/images/doctor_male.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Farhana Islam',
        specialty: 'Dermatologist',
        experience: '7+ Years Exp.',
        image: '/images/doctor_female.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    },
    {
        name: 'Dr. Asif Akbar',
        specialty: 'Psychiatrist',
        experience: '14+ Years Exp.',
        image: '/images/doctor_male.png',
        socials: { fb: '#', ln: '#', ig: '#' }
    }
];

const Doctors = () => {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
            
            // Check if we are at the end, and if so, loop back to the start
            if (direction === 'right' && current.scrollLeft + current.offsetWidth >= current.scrollWidth - 10) {
                current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    // Auto-slide effect
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            scroll('right');
        }, 3500); // Slide every 3.5 seconds
        
        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="py-10 bg-white relative">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="flex flex-col md:flex-row justify-center items-center mb-12 relative">
                    <div className="text-center">
                        <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-[13px] mb-3">
                            MEET OUR DOCTORS
                        </h3>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                            Our Expert Medical Team
                        </h2>
                    </div>
                    <div className="flex gap-3 md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 mt-6 md:mt-0">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors shadow-sm bg-white"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors shadow-sm bg-white"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                    className="flex overflow-x-auto gap-5 pb-8 snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {doctors.map((doctor, index) => (
                        <div 
                            key={index} 
                            className="flex-none w-[90%] sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] snap-start"
                        >
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] overflow-hidden flex h-full group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all p-2">
                                <div className="w-[45%] rounded-xl overflow-hidden bg-[#f0f4f8] shrink-0">
                                    <img 
                                        src={doctor.image} 
                                        alt={doctor.name} 
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                                <div className="w-[55%] p-4 flex flex-col justify-center">
                                    <h4 className="text-[16px] font-extrabold text-slate-800 mb-1 truncate" title={doctor.name}>{doctor.name}</h4>
                                    <div className="text-[13px] font-medium text-slate-500 mb-1">{doctor.specialty}</div>
                                    <div className="text-[12px] font-semibold text-slate-400 mb-4">{doctor.experience}</div>
                                    
                                    <div className="flex gap-2 mb-5">
                                        <a href={doctor.socials.fb} className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                                            <i className="fa-brands fa-facebook-f text-[11px]"></i>
                                        </a>
                                        <a href={doctor.socials.ln} className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                                            <i className="fa-brands fa-linkedin-in text-[11px]"></i>
                                        </a>
                                        <a href={doctor.socials.ig} className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                                            <i className="fa-brands fa-instagram text-[11px]"></i>
                                        </a>
                                    </div>

                                    <button className="w-full py-2 text-[13px] rounded-lg border border-emerald-600 text-emerald-600 font-bold hover:bg-emerald-600 hover:text-white transition-colors">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}} />
        </section>
    );
};

export default Doctors;
