import React from 'react';
import Hero from '../../components/website/Hero';
import Services from '../../components/website/Services';
import WhyChooseUs from '../../components/website/WhyChooseUs';
import Doctors from '../../components/website/Doctors';
import Testimonials from '../../components/website/Testimonials';
import Blogs from '../../components/website/Blogs';

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Doctors />
            <Testimonials />
            <Blogs />
        </>
    );
};

export default Home;
