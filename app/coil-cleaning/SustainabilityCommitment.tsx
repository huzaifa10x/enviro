'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function SustainabilityCommitment() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Side: Content Block */}
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 font-urbanist leading-tight">
                            Our Eco-Friendly Approach to Coil Cleaning Services
                        </h2>
                        <div className="border-b-2 border-cyan-100 w-full pt-1"></div>
                    </div>

                    {/* Initial & Expandable Content Box */}
                    <div className={`text-gray-700 space-y-4 text-sm md:text-base duration-300 leading-relaxed ${isExpanded === true ? 'h-[300px] overflow-y-scroll' : ''}`}>
                        <div className="space-y-2">
                            <p className="font-bold text-gray-900 text-base">Coil Cleaning Ensuring Energy Efficiency</p>
                            <p>With our air conditioning coil cleaning service, dirt, debris and other contaminants are eliminated completely from the coils installed in your entire HVAC system. This ensures that the HVAC appliances operate efficiently, which in turn must lead to greater energy efficiency, lower bills and good indoor air quality.</p>
                        </div>


                        <div className="pt-2">
                            <p className="font-bold text-gray-900 text-base mb-2">
                                Sustainability Approach to AC Coils
                            </p>

                            {!isExpanded ? (
                                <p>Our philosophy incorporates sustainability as part of our service delivery...</p>
                            ) : (
                                <div className="space-y-6 transition-all duration-500 ease-in-out">
                                    <p>
                                        Our philosophy incorporates sustainability as part of our service delivery. Therefore, we strictly follow green cleaning methods.
                                    </p>
                                    <p>
                                        EnviroClean Coil Cleaning is committed to providing effective coil cleaning services for your HVAC system.
                                    </p>

                                    {/* Additional Full Content Sections */}

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Eco-Friendly Maintenance Plans</p>
                                        <p>Select from our eco-friendly maintenance packages, which focus on regular cleaning of coils, filter replacements and equipment inspection in order to prolong the lifespan of your HVAC appliances.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Eco-Friendly Practices</p>
                                        <p>Our approach to being eco-friendly during all stages of our services is to incorporate eco-friendly practices. This means that all cleaning agents and wastes we use in the process of cleaning machines don’t harm the environment and this brings positive effects.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Professional and Expert AC Technicians in Dubai</p>
                                        <p>We have skilled and professional technicians who possess enough experience in the field to clean any kind of air conditioning and HVAC systems.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Utilization of Latest Cleaning Techniques</p>
                                        <p>With the help of the latest cleaning techniques and tools, we efficiently clean your air conditioning system.</p>
                                        <p>The systems we apply are capable of reaching any corner of the HVAC and air conditioning units, leaving them completely clean after the service is provided.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">The Best Possible Operation of HVAC System</p>
                                        <p>EnviroClean clears away dirt and pollution deposits from the coils to ensure the units work effectively.</p>
                                        <p>You will feel the difference in the effectiveness of the AC and HVAC systems depending on the quality of our coil cleaning service.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Packages for Sustainable Maintenance</p>
                                        <p>Select from our options for sustainable maintenance, designed to extend the life of your A/C or HVAC equipment and minimize the chance of failure.</p>
                                        <p>As part of our packages, we offer regular cleaning of coils, replacement of filters, and maintenance checks of your HVAC equipment, thus providing full care for the equipment.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Eco-Friendly Solutions:</p>
                                        <p>Our principles of eco-friendliness apply not only to our cleaning solutions but also to our waste disposal and service provision.</p>
                                        <p>With EnviroClean Coil Cleaning, we follow every step of the process in order to comply with our values of a clean environment made of healthier indoor environments.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Affordable and Transparent Rates:</p>
                                        <p>With EnviroClean, you receive affordable coil cleaning services at transparent rates.</p>
                                        <p>We provide you with the most competitive rates allowing you to maximize your money spent on HVAC maintenance.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="font-bold text-gray-900 text-base">Customer Satisfaction Assurance:</p>
                                        <p>We provide your clients with the quality of your services and customer satisfaction guarantee.</p>
                                        <p>We assure you that we will do our best for you to be happy and satisfied with the results.</p>
                                    </div>
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