import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About RoseCare</h1>
                <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
                    At RoseCare, we are dedicated to providing compassionate, high-quality care that you can trust. Our mission is to enhance the well-being of our community through personalized services and a commitment to excellence.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-semibold text-rose-600 mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To be the leading healthcare provider known for empathy, innovation, and outstanding patient outcomes. We strive to create a nurturing environment where everyone feels valued and cared for.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h2 className="text-2xl font-semibold text-rose-600 mb-4">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-600 space-y-3">
                            <li>Compassion & Empathy</li>
                            <li>Integrity & Trust</li>
                            <li>Excellence in Care</li>
                            <li>Community Focus</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                        Founded with a simple belief that healthcare should be accessible and human-centric, RoseCare has grown from a small practice to a comprehensive care provider. Every step of our journey is guided by the people we've had the privilege to help.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
