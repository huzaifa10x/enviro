'use client'

import React, { useState } from 'react'

export default function CoilCleaningFAQ() {
    // Accordion State Management (Null means all closed, index number means that specific FAQ is open)
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const checkItems = [
        "Reduce Energy Bills",
        "Improve Indoor Air Quality",
        "Keep Your Home Cooler",
        "Reduce Allergies",
        "Coil Cleaning Dubai & Abu Dhabi."
    ];

    const faqData = [
        {
            question: "Is the cleaning of coils essential?",
            answer: "Coil cleaning is important to maintain HVAC equipment at peak efficiency. This process keeps the HVAC system operating efficiently. It also helps to save energy for household cooling. It also provides the best possible air quality in your home."
        },
        {
            question: "How frequently must coils be cleaned?",
            answer: "How often coils must be cleaned depends upon the functioning of the HVAC unit and the frequency of its operation. Most people recommend cleaning coils at least once a year."
        },
        {
            question: "Can I manage coil cleaning myself?",
            answer: "Coil cleaning should be performed by qualified personnel. The company has highly professional staff having all necessary tools for providing safety of coil cleaning procedure."
        },
        {
            question: "What are the benefits of coil cleaning regularly?",
            answer: "The benefits of coil cleaning are high efficiency of operation, low energy bill, good quality of air, and long lifespan of the equipment."
        }
    ];

    return (
        <section className="w-full bg-[#F0FAF5] py-16 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

                <div className="lg:col-span-5 space-y-5 lg:pt-14 lg:pl-10">
                    {checkItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981] flex items-center justify-center shadow-xs">
                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <h4 className="text-gray-800 font-medium text-base md:text-lg">
                                {item}
                            </h4>
                        </div>
                    ))}
                </div>

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
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full p-5 flex items-center justify-between text-left font-medium text-gray-800 text-sm md:text-base hover:text-gray-900 transition-colors focus:outline-hidden cursor-pointer"
                                    >
                                        <h5>{faq.question}</h5>
                                        <span className="text-xl font-light text-gray-500 ml-4 select-none">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>

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