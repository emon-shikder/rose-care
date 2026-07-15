import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content">
            <div className="footer p-10 max-w-7xl mx-auto">
                <aside>
                    <div className="text-2xl font-bold text-primary mb-2">
                        <span className="text-secondary">Rose</span>Care Dental
                    </div>
                    <p className="max-w-xs text-base">
                        Providing exceptional dental care with a gentle touch. Your smile is our top priority.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="text-base-content hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-base-content hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-base-content hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                    </div>
                </aside> 
                <nav>
                    <h6 className="footer-title">Quick Links</h6> 
                    <Link to="/" className="link link-hover">Home</Link>
                    <Link to="/services" className="link link-hover">Our Services</Link>
                    <Link to="/about" className="link link-hover">About Clinic</Link>
                    <Link to="/contact" className="link link-hover">Contact Us</Link>
                </nav> 
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a href="#" className="link link-hover">General Dentistry</a>
                    <a href="#" className="link link-hover">Cosmetic Dentistry</a>
                    <a href="#" className="link link-hover">Orthodontics</a>
                    <a href="#" className="link link-hover">Pediatric Dentistry</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Contact Info</h6>
                    <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 mt-1 text-primary shrink-0" />
                        <span>123 Smile Boulevard,<br/>Dental City, DC 12345</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4 text-primary shrink-0" />
                        <span>info@rosecaredental.com</span>
                    </div>
                    <div className="flex items-start gap-2">
                        <Clock className="w-4 h-4 mt-1 text-primary shrink-0" />
                        <span>Mon - Fri: 8am - 6pm<br/>Sat: 9am - 2pm</span>
                    </div>
                </nav>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content font-medium">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by RoseCare Dental Clinic</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
