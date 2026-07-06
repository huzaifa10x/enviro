import React from 'react';

export default function BenefitsSection() {
    const benefitsData = [
        {
            id: 1,
            title: "HEALTHIER LIVING ENVIRONMENT",
            content: "Coil cleaning will significantly improve your indoor air quality, helping you to enjoy a cleaner, healthier living environment. Coil cleaning in Dubai & Abu Dhabi.",
            icon: "/images/air-filter.png" 
        },
        {
            id: 2,
            title: "REDUCED EXPOSURE TO ALLERGENS",
            content: "Living with allergies can be difficult, but you can minimise your exposure to those allergens that cause you to suffer. Coil cleaning removes many of the most common allergens from the coil, allowing the cold air to pass through freely.",
            icon: "/images/cleaning.png" 
        },
        {
            id: 3,
            title: "ENERGY BILLS",
            content: "Coil cleaning will significantly reduce the cost of your energy bills. If your coils are blocked then your AC system is working twice as hard to cool the property. Coil cleaning Dubai & Abu Dhabi.",
            icon: "/images/coils.png" 
        }
    ];

    return (
        <section className="w-full bg-[#f0fff7] py-16 px-6 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Heading Block */}
                <div className="text-center mb-12">
                    <span className="text-[#12b359] text-sm md:text-base font-urbanist font-semibold tracking-wide mb-2 block">
                        LEARN ABOUT BENEFITS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 tracking-wide">
                       Benefits of our <span className='text-[#12b359]'>AC Coil Cleaning Services</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl mt-4">
                    {benefitsData.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="bg-white rounded-xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-gray-100/50 flex flex-col items-start text-left min-h-[360px]"
                        >
                            <div className="mb-6 w-14 h-14 text-[#12b359] flex items-center justify-center">
                                <img
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-urbanist font-bold text-zinc-900 mb-4 tracking-wide leading-snug">
                                {benefit.title}
                            </h3>
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