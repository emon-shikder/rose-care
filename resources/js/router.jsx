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
import Dashboard from './pages/admin/dashboard/Dashboard';
import Login from './pages/admin/auth/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Appointments from './pages/admin/appointments/Appointments';
import Settings from './pages/admin/Settings/Settings';
import HeroCMS from './pages/admin/cms/HeroCMS';
import ServicesCMS from './pages/admin/cms/ServicesCMS';
import BlogsCMS from './pages/admin/cms/BlogsCMS';
import TestimonialsCMS from './pages/admin/cms/TestimonialsCMS';
import WhyChooseUsCMS from './pages/admin/cms/WhyChooseUsCMS';
import DoctorList from './pages/admin/doctors/DoctorList';
import AddDoctor from './pages/admin/doctors/AddDoctor';
import Specializations from './pages/admin/doctors/Specializations';
import PatientList from './pages/admin/patients/PatientList';
import AddPatient from './pages/admin/patients/AddPatient';
import Departments from './pages/admin/departments/Departments';
import Billing from './pages/admin/billing/Billing';
import Pharmacy from './pages/admin/pharmacy/Pharmacy';
import Lab from './pages/admin/lab/Lab';
import BedList from './pages/admin/beds/BedList';
import BedCategories from './pages/admin/beds/BedCategories';
import BloodBank from './pages/admin/blood-bank/BloodBank';
import HumanResources from './pages/admin/human-resources/HumanResources';
import Reports from './pages/admin/reports/Reports';

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
        path: '/admin/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <ProtectedRoute />,
        children: [
            {
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />
                    },
                    {
                        path: 'appointments',
                        element: <Appointments />
                    },
                    {
                        path: 'settings',
                        element: <Settings />
                    },
                    {
                        path: 'doctors/list',
                        element: <DoctorList />
                    },
                    {
                        path: 'doctors/add',
                        element: <AddDoctor />
                    },
                    {
                        path: 'doctors/specializations',
                        element: <Specializations />
                    },
                    {
                        path: 'patients/list',
                        element: <PatientList />
                    },
                    {
                        path: 'patients/add',
                        element: <AddPatient />
                    },
                    {
                        path: 'departments',
                        element: <Departments />
                    },
                    {
                        path: 'billing',
                        element: <Billing />
                    },
                    {
                        path: 'pharmacy',
                        element: <Pharmacy />
                    },
                    {
                        path: 'lab',
                        element: <Lab />
                    },
                    {
                        path: 'beds/list',
                        element: <BedList />
                    },
                    {
                        path: 'beds/categories',
                        element: <BedCategories />
                    },
                    {
                        path: 'blood-bank',
                        element: <BloodBank />
                    },
                    {
                        path: 'hr',
                        element: <HumanResources />
                    },
                    {
                        path: 'reports',
                        element: <Reports />
                    },
                    {
                        path: 'website/hero',
                        element: <HeroCMS />
                    },
                    {
                        path: 'website/services',
                        element: <ServicesCMS />
                    },
                    {
                        path: 'website/blogs',
                        element: <BlogsCMS />
                    },
                    {
                        path: 'website/testimonials',
                        element: <TestimonialsCMS />
                    },
                    {
                        path: 'website/why-choose-us',
                        element: <WhyChooseUsCMS />
                    }
                ]
            }
        ]
    }
]);

export default router;
