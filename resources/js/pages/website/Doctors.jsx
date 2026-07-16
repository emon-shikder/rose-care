import React from 'react';

const Doctors = () => {
    const doctors = [
        {
            name: "Dr. Sarah Jenkins",
            specialty: "Cardiology",
            experience: "15+ Years",
            initials: "SJ",
            color: "bg-blue-100 text-blue-600"
        },
        {
            name: "Dr. Michael Chen",
            specialty: "Neurology",
            experience: "12+ Years",
            initials: "MC",
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            name: "Dr. Emily Roberts",
            specialty: "Pediatrics",
            experience: "8+ Years",
            initials: "ER",
            color: "bg-rose-100 text-rose-600"
        },
        {
            name: "Dr. James Wilson",
            specialty: "Orthopedics",
            experience: "20+ Years",
            initials: "JW",
            color: "bg-purple-100 text-purple-600"
        },
        {
            name: "Dr. Olivia Martinez",
            specialty: "Dermatology",
            experience: "10+ Years",
            initials: "OM",
            color: "bg-amber-100 text-amber-600"
        },
        {
            name: "Dr. Robert Taylor",
            specialty: "General Surgery",
            experience: "18+ Years",
            initials: "RT",
            color: "bg-indigo-100 text-indigo-600"
        }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Specialists</h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Meet our team of experienced and dedicated healthcare professionals, committed to providing you with the highest standard of care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.map((doctor, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="p-8 text-center border-b border-gray-50">
                                <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-5 ${doctor.color}`}>
                                    {doctor.initials}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                                <p className="text-rose-600 font-medium">{doctor.specialty}</p>
                            </div>
                            <div className="p-6 bg-gray-50 flex justify-between items-center">
                                <span className="text-gray-600 text-sm font-medium">Exp: {doctor.experience}</span>
                                <button className="text-sm font-semibold text-rose-600 hover:text-rose-700 transition-colors">
                                    Book Visit →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
