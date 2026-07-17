import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import WebsiteLayout from './layouts/WebsiteLayout';
import Home from './pages/website/Home';
import About from './pages/website/About';
import Contact from './pages/website/Contact';
import Services from './pages/website/Services';
import Doctors from './pages/website/Doctors';
import Gallery from './pages/website/Gallery';
import Testimonials from './pages/website/Testimonials';
import BookAppointment from './pages/website/BookAppointment';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <WebsiteLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'doctors',
                element: <Doctors />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
            {
                path: 'testimonials',
                element: <Testimonials />
            },
            {
                path: 'book-appointment',
                element: <BookAppointment />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]
    }
]);

export default router;
