import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebsiteLayout from './layouts/WebsiteLayout';

const Home = () => (
    <div className="hero min-h-[70vh] bg-base-200">
        <div className="hero-content text-center">
            <div className="max-w-2xl">
                <h1 className="text-5xl font-bold text-primary mb-6">Beautiful Smiles,<br/>Exceptional Care</h1>
                <p className="py-6 text-lg text-base-content/80">
                    Welcome to RoseCare Dental. We provide comprehensive dental services for your entire family in a comfortable and relaxing environment.
                </p>
                <div className="flex gap-4 justify-center mt-4">
                    <button className="btn btn-primary text-white">Book an Appointment</button>
                    <button className="btn btn-outline btn-primary">Our Services</button>
                </div>
            </div>
        </div>
    </div>
);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WebsiteLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

const rootElement = document.getElementById('app');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
}
