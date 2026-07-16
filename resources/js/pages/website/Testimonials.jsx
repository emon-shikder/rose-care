import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Eleanor Pena",
            date: "May 12, 2026",
            text: "The care I received at RoseCare was absolutely phenomenal. The nurses were attentive and the doctors took the time to explain everything to me clearly. I truly felt like I was in the best hands.",
            rating: 5
        },
        {
            name: "Wade Warren",
            date: "April 28, 2026",
            text: "From the moment I walked into the lobby, I felt at ease. The facility is spotless and modern. Dr. Jenkins was incredible during my procedure. Highly recommend their services!",
            rating: 5
        },
        {
            name: "Jenny Wilson",
            date: "March 15, 2026",
            text: "My children have always been terrified of hospitals, but the pediatric wing here is magical. The staff is so gentle and patient. We won't go anywhere else.",
            rating: 5
        },
        {
            name: "Guy Hawkins",
            date: "February 22, 2026",
            text: "Fast, efficient, and deeply caring. The emergency room staff saved my life. Words cannot express how grateful my family and I are for the RoseCare team.",
            rating: 5
        },
        {
            name: "Bessie Cooper",
            date: "January 10, 2026",
            text: "Excellent follow-up care. They actually check on you after you go home. It shows that they care about your full recovery, not just treating you and sending you away.",
            rating: 4
        },
        {
            name: "Ralph Edwards",
            date: "December 05, 2025",
            text: "Booking appointments is a breeze, and I rarely wait more than a few minutes past my scheduled time. Respecting a patient's time is rare in healthcare these days.",
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
        ));
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Patient Stories</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Don't just take our word for it. Read what our patients have to say about their experiences and the care they received at RoseCare.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                            <div className="flex items-center mb-4">
                                {renderStars(review.rating)}
                            </div>
                            <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">"{review.text}"</p>
                            <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                                <h3 className="font-bold text-gray-800">{review.name}</h3>
                                <span className="text-sm text-gray-500">{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
