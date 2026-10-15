'use client'

import React, { useState } from 'react'

export default function CoilCleaningService() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="space-y-6">
                    <div className="space-y-2">
                        <span className="text-emerald-500 font-semibold text-sm block tracking-wide">
                            Importance of Coil Cleaning
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-urbanist">
                            Coil Cleaning Services for Air Conditioning
                        </h2>
                        <div className="border-b-2 border-cyan-100 w-full pt-2"></div>
                    </div>

                    <div className="text-gray-700 space-y-4 leading-relaxed text-sm md:text-base leading-5">
                        <p>
                            Get access to EnviroClean Coil Cleaning for efficient and environment-friendly coil cleaning
                        </p>
                        <p>
                            Regular coil cleaning is essential to preserving efficiency and longevity of your air conditioning systems. The coils in either AC become clogged with dirt, dust, and pollutants, reducing their heat transfer abilities. Reduced efficiency of the system leads to higher energy bills.
                        </p>

                        <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}>
                            <p>
                                Clean coils in turn are required for heat exchange in the HVAC system for its optimal working conditions. Efficiency improvement means lower energy expenses as well as extended lifetime of the unit with less need for eventual replacements.
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="bg-neutral-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-neutral-900 transition-colors shadow-xs cursor-pointer"
                    >
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                </div>

                <div className="w-full h-full relative rounded-2xl overflow-hidden shadow-lg bg-black group aspect-video">
                    <video
                        src="/coil-cleaning.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="w-full h-full object-contain"
                        poster="/images/coil-cleaning-poster.webp"
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </section>
    )
}