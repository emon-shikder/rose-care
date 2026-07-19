import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookAppointment = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        message: ''
    });

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('/api/frontend/departments');
                setDepartments(response.data);
            } catch (error) {
                console.error("Error fetching departments:", error);
            }
        };
        fetchDepartments();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccessMessage('');
        setErrorMessage('');
        
        try {
            await axios.post('/api/frontend/appointments/book', formData);
            setSuccessMessage('Appointment request submitted successfully! We will contact you soon to confirm.');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                department: '',
                message: ''
            });
        } catch (error) {
            console.error("Error booking appointment:", error);
            setErrorMessage('Failed to book appointment. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Book an Appointment</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Please fill out the form below to schedule your visit. Our team will get back to you promptly to confirm your appointment time.
                    </p>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                    {successMessage && (
                        <div className="mb-6 bg-green-50 text-green-700 border border-green-200 rounded-lg p-4">
                            {successMessage}
                        </div>
                    )}
                    {errorMessage && (
                        <div className="mb-6 bg-red-50 text-red-700 border border-red-200 rounded-lg p-4">
                            {errorMessage}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Personal Information */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Personal Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        id="phone" 
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Appointment Details */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">Appointment Details</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                                    <select 
                                        id="department" 
                                        name="department"
                                        required
                                        value={formData.department}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all bg-white"
                                    >
                                        <option value="">Select Department</option>
                                        {departments.map(dept => (
                                            <option key={dept.id} value={dept.id}>{dept.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                                            <input 
                                                type="date" 
                                                id="date" 
                                                name="date"
                                                required
                                                value={formData.date}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                                            <input 
                                                type="time" 
                                                id="time" 
                                                name="time"
                                                required
                                                value={formData.time}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes / Symptoms</label>
                                    <textarea 
                                        id="message" 
                                        name="message"
                                        rows="4" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                                        placeholder="Please describe your symptoms or reason for visit briefly..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className="w-full md:w-auto px-10 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 text-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    'Request Appointment'
                                )}
                            </button>
                            <p className="text-sm text-gray-500 mt-4 text-center md:text-left">
                                * Submitting this form does not guarantee the exact requested time. We will call you to confirm.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
