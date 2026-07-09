import React from 'react';

export default function BenefitsSection({ benefitsData }) {
    return (
        <section className="w-full bg-[#f0fff7] py-16 px-6 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Heading Block */}
                <div className="text-center mb-12">
                    <span className="text-primary text-sm md:text-base font-urbanist font-semibold tracking-wide mb-2 block">
                        Learn About Ac Cleaning Benefits
                    </span>
                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 tracking-wide">
                        Benefits of AC Cleaning
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mt-4">
                    {benefitsData.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100/50 flex flex-col items-start text-left min-h-[360px]"
                        >
                            <div className="mb-6 w-14 h-14 text-primary flex items-center justify-center">
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h2 className="text-xl font-urbanist font-bold text-zinc-900 mb-4 tracking-wide leading-snug">
                                {benefit.title}
                            </h2>
                            <p className="font-extralight leading-5 text-sm md:text-base text-[#333333]">
                                {benefit.content}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}