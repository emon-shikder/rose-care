import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0b4d3c] text-white pt-16 pb-6 mt-20">
            <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-8 xl:gap-6 mb-12">
                    {/* Brand */}
                    <div className="xl:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="text-white">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22c-2.5 0-4.5-2-4.5-4.5V17c0-.5-.5-1-1-1s-1 .5-1 1v.5C5.5 20 3.5 18 3.5 15.5V9C3.5 6 6 3.5 9 3.5h6c3 0 5.5 2.5 5.5 5.5v6.5c0 2.5-2 4.5-4.5 4.5v-.5c0-.5-.5-1-1-1s-1 .5-1 1v.5c0 2.5-2 4.5-4.5 4.5z"/>
                                    <path d="M12 22v-3"/>
                                    <path d="M12 13.5c-2.5-3-3-4.5-3-6 0-1.5 1.5-2.5 3-1 1.5-1.5 3-.5 3 1 0 1.5-.5 3-3 6z" fill="currentColor"/>
                                </svg>
                            </div>
                            <div className="text-2xl font-bold leading-tight tracking-tight">
                                RoseCare<br/>
                                <span className="text-[9px] font-medium tracking-[0.2em] text-emerald-100 block uppercase">General Hospital</span>
                            </div>
                        </Link>
                        
                        <p className="text-[13px] text-emerald-50/80 mb-6 leading-relaxed pr-4">
                            Providing comprehensive healthcare. Your well-being is our priority.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" className="w-7 h-7 rounded-full bg-white text-[#0b4d3c] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                                <i className="fa-brands fa-facebook-f text-xs"></i>
                            </a>
                            <a href="#" className="w-7 h-7 rounded-full bg-white text-[#0b4d3c] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                                <i className="fa-brands fa-instagram text-xs"></i>
                            </a>
                            <a href="#" className="w-7 h-7 rounded-full bg-white text-[#0b4d3c] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                                <i className="fa-brands fa-linkedin-in text-xs"></i>
                            </a>
                            <a href="#" className="w-7 h-7 rounded-full bg-white text-[#0b4d3c] flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                                <i className="fa-brands fa-youtube text-xs"></i>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="xl:col-span-1">
                        <h4 className="text-base font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-[13px] text-emerald-50/80 font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
                            <li><Link to="/doctors" className="hover:text-white transition-colors">Our Doctors</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="xl:col-span-1">
                        <h4 className="text-base font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-[13px] text-emerald-50/80 font-medium">
                            <li><a href="#" className="hover:text-white transition-colors">Cardiology</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Neurology</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Orthopedics</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pediatrics</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Emergency Care</a></li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div className="xl:col-span-1">
                        <h4 className="text-base font-bold mb-6">Working Hours</h4>
                        <ul className="space-y-3 text-[13px] text-emerald-50/80 font-medium mb-6 pr-4">
                            <li className="flex justify-between"><span>Mon - Fri</span> <span>09.00 - 07.00</span></li>
                            <li className="flex justify-between"><span>Saturday</span> <span>09.00 - 05.00</span></li>
                            <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                        </ul>
                        <div className="border border-emerald-500/40 rounded-xl p-2.5 flex items-center gap-3 w-fit">
                            <div className="bg-emerald-800/60 p-2 rounded-lg">
                                <Phone className="w-4 h-4 text-emerald-300" />
                            </div>
                            <div>
                                <div className="font-bold text-sm leading-tight">+880 1234 567 890</div>
                                <div className="text-[11px] text-emerald-200/80 mt-0.5">Emergency 24/7</div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="xl:col-span-1">
                        <h4 className="text-base font-bold mb-6">Newsletter</h4>
                        <p className="text-[13px] text-emerald-50/80 mb-4 leading-relaxed pr-2">
                            Subscribe to get our latest news & updates.
                        </p>
                        <form className="relative">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full bg-white text-slate-800 text-sm rounded-xl py-3 pl-4 pr-12 outline-none focus:ring-2 focus:ring-emerald-500"
                                required
                            />
                            <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#0b4d3c] hover:bg-[#083a2d] text-white rounded-lg px-2.5 transition-colors flex items-center justify-center">
                                <Send className="w-4 h-4 -ml-0.5" />
                            </button>
                        </form>
                    </div>

                    {/* Our Location */}
                    <div className="xl:col-span-1">
                        <h4 className="text-base font-bold mb-6">Our Location</h4>
                        <div className="rounded-xl overflow-hidden mb-4 border border-emerald-500/40 h-[88px] bg-emerald-800/50 relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-30 mix-blend-overlay"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-[#0b4d3c] p-1.5 rounded-full shadow-lg">
                                    <MapPin className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 text-[13px] text-emerald-50/80 font-medium leading-relaxed">
                            <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                            <span>Road 27, House 12,<br/>Dhanmondi, Dhaka 1205</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-emerald-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-emerald-100/60 font-medium">
                    <div>
                        © {new Date().getFullYear()} RoseCare General Hospital. All Rights Reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span>|</span>
                        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
