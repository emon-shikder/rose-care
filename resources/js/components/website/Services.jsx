import React from 'react';
import { ArrowRight, Sparkles, Smile, Droplets, ShieldPlus, Activity, BriefcaseMedical } from 'lucide-react';

const services = [
    {
        title: 'Teeth Whitening',
        description: 'Brighten your smile with safe & effective whitening.',
        icon: Sparkles
    },
    {
        title: 'Smile Makeover',
        description: 'Transform your smile with our experts.',
        icon: Smile
    },
    {
        title: 'Dental Cleaning',
        description: 'Professional cleaning for healthy teeth & gums.',
        icon: Droplets
    },
    {
        title: 'Dental Implants',
        description: 'Restore your missing teeth with implants.',
        icon: ShieldPlus
    },
    {
        title: 'Orthodontics',
        description: 'Straighten your teeth with modern braces.',
        icon: Activity
    },
    {
        title: 'Emergency Care',
        description: '24/7 care for your dental emergencies.',
        icon: BriefcaseMedical
    }
];

const Services = () => {
    return (
        <section className="py-14 bg-white">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="text-center mb-16">
                    <h3 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4 flex items-center justify-center gap-2">
                        <div className="w-8 h-[2px] bg-emerald-600"></div>
                        OUR SERVICES
                        <div className="w-8 h-[2px] bg-emerald-600"></div>
                    </h3>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 flex items-center justify-center flex-col gap-6">
                        Complete Dental Care for Your Healthy Smile
                        <div className="relative w-16 h-[2px] bg-slate-200 flex items-center justify-center">
                            <div className="absolute w-3 h-3 bg-emerald-600 rounded-full border-[3px] border-white"></div>
                        </div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
                                <div className="text-emerald-600 mb-6">
                                    <Icon className="w-12 h-12 stroke-[1.5]" />
                                </div>
                                <h4 className="text-[17px] font-bold text-slate-800 mb-3">{service.title}</h4>
                                <p className="text-[13px] text-slate-500 mb-6 flex-grow leading-relaxed">{service.description}</p>
                                <a href="#" className="flex items-center gap-2 text-sm font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors mt-auto">
                                    Learn More 
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
