'use client'

import React, { useState } from 'react'

export default function CoilCleaningFAQ() {
    // Accordion State Management (Null means all closed, index number means that specific FAQ is open)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const checkItems = [
        "Redcuce Energy Bills",
        "Improve Indoor Air Quality",
        "Keep Your Home Cooler",
        "Reduce Allergies",
        "Coil Cleaning Dubai & Abu Dhabi."
    ];

    const faqData = [
        {
            question: "How often should I have AC sanitization?",
            answer: "Every 6-12 months, depending on indoor air quality, and use."
        },
        {
            question: "Does sanitization improve cooling?",
            answer: "Definitely, the deep cleaning improves cooling, and electricity costs by allowing the AC to cool quicker."
        },
        {
            question: "Is the sanitization process safe for my family?",
            answer: "Yes. All products engineered are non-toxic and eco-safe, and safe for homes with children and pets. "
        },
        {
            question: "How long does the process take?",
            answer: "The service typically takes 45-90 minutes. It depends on the condition and size of the AC unit."
        }
    ];

    return (
        <section className="w-full bg-[#F0FAF5] py-16 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                {/* Left Side: Features Checklist (4 Columns on Desktop) */}
                <div className="lg:col-span-5 space-y-5 lg:pt-14 lg:pl-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-urbanist tracking-tight mb-8">
                        Our Comprehensive AC Sanitation Service
                    </h2>
                    <p>EnviroClean uses a detailed sanitization method consisting of coil cleaning, filter treatment, drain line clearing and full disinfection. This promotes healthy airflow, electricity-saving consumption, and cooling efficiency. Our process works for homes and businesses, and is a level of cleanliness you’ll certainly appreciate for a long time!
                    </p>
                </div>

                {/* Right Side: Heading & Accordion FAQs (7 Columns on Desktop) */}
                <div className="lg:col-span-7 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 font-urbanist tracking-tight mb-8">
                        FAQs - EnviroClean Coil Cleaning Explained
                    </h2>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-xs border border-gray-100 overflow-hidden transition-all duration-300"
                                >
                                    {/* Accordion Trigger Header */}
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full p-5 flex items-center justify-between text-left font-medium text-gray-800 text-sm md:text-base hover:text-gray-900 transition-colors focus:outline-hidden cursor-pointer"
                                    >
                                        <span>{faq.question}</span>
                                        <span className="text-xl font-light text-gray-500 ml-4 select-none">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>

                                    {/* Accordion Content Panel */}
                                    <div
                                        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-gray-50 bg-gray-50/50' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="p-5 text-gray-600 text-sm md:text-base leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    )
}