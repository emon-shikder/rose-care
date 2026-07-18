import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import LogoImage from '../../assets/images/logos/logo.png';

const Navbar = () => {
    // We would use useLocation to detect active path in a real app,
    // mocking active state for 'Home' as per design
    const location = { pathname: '/' }; 
    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Doctors', path: '/doctors' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Testimonials', path: '/testimonials' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="navbar min-h-[4rem] lg:h-24 px-4 lg:px-8 container mx-auto max-w-[1400px] flex justify-between">
                {/* Left Section (Mobile Menu & Logo) */}
            <div className="navbar-start w-auto flex-1 lg:flex-none flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-sm lg:hidden mr-1 sm:mr-2 px-1">
                        <Menu className="h-6 w-6 text-slate-800" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-56 border border-gray-100">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className={`py-3 ${isActive(link.path) ? "text-[#009b72] font-semibold" : "text-slate-700 font-medium"}`}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <Link to="/" className="flex items-center gap-2 sm:gap-3">
                    <img 
                        src={LogoImage} 
                        alt="RoseCare General Hospital" 
                        className="h-10 sm:h-12 w-auto object-contain" 
                    />
                </Link>
            </div>

            {/* Center Navigation Links (Desktop) */}
            <div className="navbar-center hidden lg:flex flex-1 justify-center">
                <ul className="flex items-center gap-4 xl:gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link 
                                to={link.path} 
                                className={`text-sm xl:text-base font-semibold hover:text-[#009b72] transition-colors ${
                                    isActive(link.path) ? "text-[#009b72]" : "text-[#112A46]"
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side Actions */}
            <div className="navbar-end w-auto flex-none flex items-center gap-2 sm:gap-4 xl:gap-6">
                <div className="hidden lg:flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-[#009b72]" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500 font-semibold">Emergency Help</span>
                        <a href="tel:+8801234567890" className="text-sm xl:text-base font-bold text-[#009b72] whitespace-nowrap">
                            +880 1234 567 890
                        </a>
                    </div>
                </div>
                <Link 
                    to="/book-appointment" 
                    className="bg-[#009b72] hover:bg-[#00825f] text-white px-3 sm:px-5 xl:px-6 py-2 sm:py-2.5 xl:py-3 rounded-md font-semibold text-xs sm:text-sm xl:text-base transition-colors whitespace-nowrap"
                >
                    <span className="hidden sm:inline">Book Appointment</span>
                    <span className="sm:hidden">Book</span>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
