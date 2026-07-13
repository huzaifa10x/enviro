"use client"

import Image from "next/image";
import { useState } from "react";

export default function RegularACDuctCleaningDubai() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Content Block */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 font-urbanist leading-tight">
                            About Regular AC Duct Cleaning Dubai
                        </h2>
                        <div className="border-b-2 border-cyan-100 w-full pt-1"></div>
                    </div>

                    {/* Initial & Expandable Content Box */}
                    <div className={`text-gray-700 space-y-4 text-sm md:text-base duration-300 leading-relaxed ${isExpanded === true ? 'h-[300px] overflow-y-scroll' : ''} `}>
                        <p>
                            Regular duct cleaning in Dubai is essential for ensuring the optimal performance, energy efficiency, and longevity of your air conditioning system. Neglecting these routine tasks can lead to reduced efficiency, increased energy costs, and a shortened lifespan for your AC unit. Here are some key reasons why regular AC cleaning should be a priority:
                        </p>
                        <p>
                            Improved performance: Over time, dust, dirt, and debris can accumulate on the filters, coils, and other components of your AC system. Regular cleaning helps remove these build-ups, ensuring that your system can operate at its full capacity and effectively cool your space.
                        </p>

                        <div className="pt-2">
                            {/* Agar expanded nahi hai toh incomplete line dikhegi jaisa mockup "image_df53b6.webp" mein hai */}
                            {!isExpanded ? (
                                <p></p>
                            ) : (
                                <div className="space-y-6 transition-all duration-500 ease-in-out">
                                    <p> Enhanced energy efficiency: A dirty or poorly maintained AC unit has to work harder to maintain the desired temperature, which can lead to increased energy consumption. By keeping your system clean and well-maintained, you can improve its energy efficiency, thereby reducing your energy bills.
                                    </p>
                                    <p>Extended system lifespan: Regular cleaning helps identify potential issues before they become major problems, which can prevent costly repairs or even system breakdowns. By addressing minor issues early, you can extend the life of your AC unit and protect your investment.
                                    </p>
                                    <p>Better indoor air quality: A clean AC system ensures that the air circulating throughout your Dubai home or office is free of dust, allergens, and other contaminants. This can contribute to a healthier indoor environment and help prevent respiratory issues or other health problems caused by poor air quality.
                                    </p>
                                    <p>Reduced repair costs: Regular AC cleaning helps identify and fix small issues before they escalate into more significant, costly problems. By proactively addressing these concerns, you can minimize the need for expensive repairs or system replacements.
                                    </p>
                                    <p>Maintaining manufacturer warranties: Many AC manufacturers require cleaning to keep their warranties valid. By adhering to the recommended schedule, you can ensure that your system remains covered by its warranty in case of any issues.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="pt-2">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-900 transition-colors shadow-xs cursor-pointer"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                </div>

                {/* Right Side: Image Holder */}
                <div className="w-full relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xs">
                    <Image
                        src="/images/About-Regular-AC-Maintenance-.webp" // Referencing mockup "image_df53b6.webp" visual layout
                        alt="HVAC system and AC Coils installation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover" // Mockup monochrome style matching
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
