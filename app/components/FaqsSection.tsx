/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'

import React, { useState } from 'react';

const FaqsSection = ({ faqs }: any) => {
    const [activeId, setActiveId] = useState(null);
    const toggleAccordion = (id: any) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="w-full py-16 px-4 md:px-0">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8 relative pb-3 inline-block left-1/2 -translate-x-1/2">
                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-black tracking-wide">
                        Frequently Asked Questions
                    </h2>
                    <div className="absolute bottom-0 left-0 right-0 h-[2px]" />
                </div>

                {/* Accordions List Container */}
                <div className="flex flex-col gap-4 mt-8">
                    {faqs && faqs.map((faq: any) => {
                        const isOpen = activeId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden transition-all duration-300"
                            >
                                <button
                                    onClick={() => toggleAccordion(faq.id)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none transition-colors duration-200"
                                >
                                    <span className="text-base md:text-lg font-urbanist font-medium text-zinc-900 tracking-wide pr-4">
                                        {faq.question}
                                    </span>

                                    <span className="text-xl font-light text-zinc-500 w-6 h-6 flex items-center justify-center select-none transform transition-transform duration-300">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] border-t border-zinc-100' : 'max-h-0'
                                        } overflow-hidden`}
                                >
                                    <div className="p-5 md:p-6 text-sm md:text-base font-extralight text-[#333333] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FaqsSection;