'use client'

import React, { useState } from 'react'

export default function AcRepairFAQ() {
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
            question: "How much does an AC inspection cost?",
            answer: "Our AC diagnostic inspection is AED 250. If you approve and complete the recommended repair works with Enviroclean, the inspection charge can be deducted from the final repair invoice."
        },
        {
            question: "Can you repair FCUs?",
            answer: "Yes. We diagnose FCU faults and can replace components including motors, blowers, valves, actuators, thermostats and other parts depending on the system and availability."
        },
        {
            question: "Can you replace a complete FCU?",
            answer: "Yes. Where an existing FCU is no longer economical to repair, we can assess the unit and provide a quotation for replacement."
        },
        {
            question: "Why is my AC not cooling?",
            answer: "Poor cooling can have several causes including airflow restrictions, dirty coils, valve or actuator problems, thermostat/control faults, blower issues or chilled-water-related problems. An inspection is required to identify the actual cause."
        },
        {
            question: "Why is my AC leaking water?",
            answer: "Common causes can include blocked drainage, drain tray issues, condensation, insulation problems and other FCU-related faults. Our technician will inspect the system to identify the cause."
        },
        {
            question: "Do you provide AC cleaning as well?",
            answer: "Yes. Enviroclean provides professional AC cleaning alongside servicing, fault diagnosis, repairs and replacement."
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
                        FAQs - EnviroClean AC Repair & Maintenance Dubai Explained
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