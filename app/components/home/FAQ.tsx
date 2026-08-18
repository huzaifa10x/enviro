"use client";
import Image from 'next/image';
import { useState } from 'react';

const faqData = [
    { title: "Expertise and experience", content: "EnviroClean AC Cleaning boasts a team of highly skilled and experienced technicians who are well-versed in the intricacies of various air conditioning systems. Their expertise allows them to provide thorough and efficient cleaning services, ensuring that your AC unit operates at its full potential." },
    { title: "Eco-friendly solutions", content: "EnviroClean AC Cleaning is committed to protecting the environment and employs eco-friendly cleaning methods and products. By choosing their services, you can rest assured that your AC system is being cleaned in an environmentally responsible manner without compromising on quality." },
    { title: "Improved indoor air quality", content: "A clean AC system is crucial for maintaining healthy indoor air quality. EnviroClean AC cleaning UAE services remove dust, allergens, and contaminants from your air conditioning system, resulting in cleaner, fresher air that promotes a healthier living environment for you and your family." },
    { title: "Enhanced system efficiency", content: "Regular AC cleaning by professionals like EnviroClean ensures that your air conditioning system operates at peak efficiency. A clean and well-maintained AC unit consumes less energy, translating to lower utility bills and a reduced carbon footprint." },
    { title: "Prolonged system lifespan", content: "Routine AC cleaning can significantly extend the life of your air conditioning system. EnviroClean AC Cleaning’s expert technicians can detect and address potential issues before they escalate, saving you from costly repairs or premature system replacement." },
    { title: "Customized solutions", content: "EnviroClean AC Cleaning understands that each customer’s needs are unique. They offer customized cleaning solutions tailored to your specific requirements, ensuring that your AC system receives the care and attention it needs to perform optimally." },
    { title: "Excellent customer service", content: "EnviroClean AC Cleaning prides itself on providing exceptional customer service. Their friendly and professional staff are dedicated to ensuring your satisfaction and are always available to answer any questions or address any concerns you may have. Your air conditioning system plays a vital role in maintaining the comfort and health of your home or office.Choosing our AC duct cleaning services Dubai ensures that your system remains in top condition, offering optimal performance, energy efficiency, and improved indoor air quality.With their expertise, eco- friendly solutions, and commitment to customer satisfaction, EnviroClean AC Cleaning is the ideal choice for keeping your air conditioning system clean and functioning at its best." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="pt-20 px-6 flex flex-col lg:flex-row gap-12 items-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-900 font-urbanist">
                    Why Choose Our Dubai Duct Cleaning Company?
                    <div className="border-b-4 border-primary w-full my-4"></div>
                </h2>
                <div className='grid md:grid-cols-2 gap-10'>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-xl">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex justify-between items-center p-5 bg-white font-bold text-gray-800 hover:bg-gray-50 transition"
                                >
                                    <h5 className='text-sm md:text-lg'>{item.title}:</h5>
                                    <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
                                </button>

                                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="p-5 text-xs sm:text-sm md:text-base text-gray-600 border-t">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <Image
                            src="/images/About-Regular-AC-Maintenance-.webp"
                            height={500}
                            width={500}
                            alt="Technician checking AC"
                            className="rounded-2xl shadow-xl w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}