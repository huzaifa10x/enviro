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
                            Commitment to Sustainability for <br /> your AC Coil:
                        </h2>
                        <div className="border-b-2 border-cyan-100 w-full pt-1"></div>
                    </div>

                    {/* Initial & Expandable Content Box */}
                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            We prioritize sustainability in every aspect of our services, using eco-friendly 
                            cleaning solutions and adopting practices that contribute to a greener planet.
                        </p>
                        <p>
                            EnviroClean Coil Cleaning is dedicated to providing effective cleaning solutions 
                            for your HVAC system and being mindful of the environment.
                        </p>

                        <div className="pt-2">
                            <h3 className="font-bold text-gray-900 text-base mb-2">
                                Experienced and Skilled Air Conditioner Technicians in Dubai:
                            </h3>
                            
                            {/* Agar expanded nahi hai toh incomplete line dikhegi jaisa mockup "image_df53b6.jpg" mein hai */}
                            {!isExpanded ? (
                                <p>Our team consists of experienced technicians with a wealth of...</p>
                            ) : (
                                <div className="space-y-6 transition-all duration-500 ease-in-out">
                                    <p>
                                        Our team consists of experienced technicians with a wealth of knowledge handling diverse AC and HVAC systems.
                                    </p>
                                    <p>
                                        Trust our skilled professionals to deliver precise and effective coil cleaning tailored to the specific requirements of your system.
                                    </p>

                                    {/* Additional Full Content Sections */}
                                    <div className="space-y-2">
                                        <h4 className="font-bold text-gray-900 text-base">Cutting-Edge Tools and Technology:</h4>
                                        <p>We utilize state-of-the-art equipment and technology to ensure a thorough and efficient cleaning process for your AC.</p>
                                        <p>Our advanced tools reach even the most challenging areas, leaving your coils spotless and your HVAC system operating at peak efficiency.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-gray-900 text-base">Optimal HVAC Performance:</h4>
                                        <p>EnviroClean removes dirt, debris, and contaminants from coils, guaranteeing optimal AC and HVAC system performance.</p>
                                        <p>Experience improved energy efficiency, lower utility bills, and enhanced indoor air quality with our comprehensive coil cleaning services.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-gray-900 text-base">Sustainable Maintenance Packages:</h4>
                                        <p>Please choose from our sustainable maintenance packages, designed to prolong the lifespan of your AC or HVAC system while minimizing the risk of breakdowns.</p>
                                        <p>Our packages encompass regular coil cleaning, filter replacement, and system inspections, providing a holistic approach to system care.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-gray-900 text-base">Eco-Conscious Solutions:</h4>
                                        <p>Our commitment to eco-friendly practices extends beyond cleaning solutions to waste disposal and service delivery.</p>
                                        <p>EnviroClean Coil Cleaning ensures that every step of the process aligns with our mission of creating a healthier indoor environment and a sustainable future.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-gray-900 text-base">Cost-Effective and Transparent Pricing:</h4>
                                        <p>Enjoy cost-effective coil cleaning services with transparent pricing from EnviroClean.</p>
                                        <p>Our competitive rates ensure that you receive the best value for your investment in HVAC maintenance without compromising on quality.</p>
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="font-bold text-gray-900 text-base">Customer Satisfaction Guarantee:</h4>
                                        <p>We stand by the quality of our services with a customer satisfaction guarantee.</p>
                                        <p>If, for any reason, you are not completely satisfied with the results, we are committed to making it suitable and ensuring your peace of mind.</p>
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
                        src="/images/coil-cleaning-4.jpeg" // Referencing mockup "image_df53b6.jpg" visual layout
                        alt="HVAC system and AC Coils installation"
                        fill
                        className="object-cover grayscale" // Mockup monochrome style matching
                        priority
                    />
                </div>

            </div>
        </section>
    )
}