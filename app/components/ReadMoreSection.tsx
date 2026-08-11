'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function SustainabilityCommitment({ text, expandedText }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Content Block */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 font-urbanist leading-tight">
                            Commitment to Sustainability for <br /> your AC Coil:
                        </h2>
                        <div className="border-b-2 border-cyan-100 w-full pt-1"></div>
                    </div>

                    <div className={`text-gray-700 space-y-4 text-sm md:text-base duration-300 leading-relaxed ${isExpanded === true ? 'h-[300px] overflow-y-scroll' : ''} `}>
                        {text}
                        <div className="pt-2">
                            {!isExpanded ? (
                                <p>Our team consists of experienced technicians with a wealth of...</p>
                            ) : (
                                <div className="space-y-6 transition-all duration-500 ease-in-out">
                                    {expandedText}
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
                        src="/images/coil-cleaning-4.webp" // Referencing mockup "image_df53b6.webp" visual layout
                        alt="HVAC system and AC Coils installation"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale" // Mockup monochrome style matching
                        priority
                    />
                </div>
            </div>
        </section >
    )
}