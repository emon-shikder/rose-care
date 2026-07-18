import React from 'react';

const Gallery = () => {
    // Array of placeholder images with varied sizes for a masonry-like feel
    const images = [
        { src: "/images/hospital-room.png", alt: "Modern Facilities", span: "md:col-span-2 md:row-span-2" },
        { src: "/images/clinic-room.png", alt: "Patient Rooms", span: "md:col-span-1 md:row-span-1" },
        { src: "/images/hero-dentist.png", alt: "Advanced Equipment", span: "md:col-span-1 md:row-span-1" },
        { src: "/images/hero-hospital.png", alt: "Our Dedicated Team", span: "md:col-span-2 md:row-span-1" },
        { src: "/images/blog_1.png", alt: "Waiting Area", span: "md:col-span-1 md:row-span-1" },
        { src: "/images/blog_2.png", alt: "Emergency Wing", span: "md:col-span-1 md:row-span-1" },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Gallery</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Take a virtual tour of our state-of-the-art facilities, designed to provide a comfortable, healing environment for all our patients.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {images.map((img, index) => (
                        <div key={index} className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${img.span}`}>
                            <img 
                                src={img.src} 
                                alt={img.alt} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
