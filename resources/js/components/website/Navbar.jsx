import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calendar, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 lg:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl text-primary font-bold">
                    <span className="text-secondary">Rose</span>Care Dental
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div className="hidden md:flex items-center gap-2 mr-4">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold">+1 (555) 123-4567</span>
                </div>
                <Link to="/book" className="btn btn-primary text-white">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="hidden sm:inline">Book Now</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
