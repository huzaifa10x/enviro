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
            question: "Why is coil cleaning important?",
            answer: "Maintenance coil cleaning is vital to maintaining HVAC system efficiency, ensuring optimal functioning, lower energy consumption while cooling, and improved air quality in your home."
        },
        {
            question: "How often is it recommended to get my coils checked and cleaned?",
            answer: "Regularly cleaning your coils depends on certain things, such as usage and the HVAC system. Generally, it is recommended to have coils cleaned annually."
        },
        {
            question: "Can I maintain the coils?",
            answer: "It’s best to leave it to the professionals. Our experienced team at EnviroClean Coil Cleaning possesses the expertise and equipment required for a thorough and safe cleaning process."
        },
        {
            question: "What are the benefits of regular coil cleaning?",
            answer: `Regular coil cleaning improves energy efficiency, reduces utility bills, enhances air quality, and extends the lifespan of your system. It is a sustainable and cost-effective way to ensure optimal system operation.

            EnviroClean Carpet Cleaning is your premier destination for a revolutionary approach to carpet care in Dubai.At EnviroClean, we provide comprehensive and sustainable carpet cleaning services that surpass traditional methods.Our mission is to transform your carpets into a source of renewed freshness and vitality while prioritizing environmental responsibility.`
        }
    ];

    return (
        <section className="w-full bg-[#F0FAF5] py-16 px-6 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-start">

                {/* Left Side: Features Checklist (4 Columns on Desktop) */}
                <div className="lg:col-span-5 space-y-5 lg:pt-14 lg:pl-10">
                    {checkItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            {/* SVG Green Check Icon matching image_df6620.webp */}
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
                                        <h5>{faq.question}</h5>
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