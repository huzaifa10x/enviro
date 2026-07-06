"use client";
import Image from 'next/image';
import { useState } from 'react';

const faqData = [
    { title: "Expertise and experience", content: "EnviroClean AC Cleaning boasts a team of highly skilled and experienced technicians..." },
    { title: "Eco-friendly solutions", content: "We use environmentally safe cleaning products that are effective yet gentle." },
    { title: "Improved indoor air quality", content: "Our deep cleaning process removes dust, allergens, and pollutants from your ducts." },
    { title: "Enhanced system efficiency", content: "Clean coils and ducts allow your AC to run smoothly, reducing energy consumption." },
    { title: "Prolonged system lifespan", content: "Regular maintenance helps in preventing major breakdowns and extends unit life." },
    { title: "Customized solutions", content: "We provide tailored services based on your specific cooling system requirements." },
    { title: "Excellent customer service", content: "Our team is dedicated to providing prompt, professional, and friendly assistance." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-20 px-6 flex flex-col lg:flex-row gap-12 items-center">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl text-center font-bold text-gray-900 font-urbanist">
                    Why Choose EnviroClean AC Cleaning Services?
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
                                    {item.title}:
                                    <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
                                </button>

                                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <p className="p-5 pt-0 text-gray-600 border-t">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="">
                        <Image
                            src="/images/About-Regular-AC-Maintenance-.jpg"
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