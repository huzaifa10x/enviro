"use client"
import Image from 'next/image';
import React, { useState } from 'react'

export default function AboutOurServices() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <section className="w-full bg-secondary py-16 px-6 md:px-12  font-sans">
            <div className='max-w-7xl mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Content Block */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold text-gray-900 font-urbanist leading-tight">
                                About Our Services:
                            </h2>
                            <div className="border-b-2 border-cyan-100 w-full pt-1"></div>
                        </div>

                        {/* Initial & Expandable Content Box */}
                        <div className={`text-gray-700 space-y-4 text-sm md:text-base duration-300 leading-relaxed ${isExpanded === true ? 'h-[300px] overflow-y-scroll' : ''} `}>
                            <div className='font-bold text-2xl'>AC Cleaning UAE</div>
                            <p>Air conditioning units are essential for maintaining comfortable indoor temperatures, especially in Dubai’s hot climate. However, over time, dirt, dust, and other contaminants can accumulate within the units, reducing their efficiency and negatively impacting air quality.
                            </p>
                            <p>
                                EnviroClean’s Duct cleaning in Dubai involves:
                            </p>
                            <ul className='list-disc pl-6'>
                                <li>A thorough inspection of your air conditioning units</li>
                                <li>Cleaning of the evaporator and condenser coils</li>
                            </ul>

                            <div className="">
                                {/* Agar expanded nahi hai toh incomplete line dikhegi jaisa mockup "image_df53b6.jpg" mein hai */}
                                {!isExpanded ? (
                                    <p></p>
                                ) : (
                                    <div className="space-y-6 transition-all duration-500 ease-in-out">
                                        <ul className='list-disc pl-6'>
                                            <li>Removal of accumulated dirt, debris, and mold from filters, drain pans, and other components</li>
                                            <li>Checking refrigerant levels and addressing potential leaks</li>
                                            <li>Ensuring the proper functioning of electrical components</li>
                                        </ul>
                                        <div className='font-bold text-2xl'>Duct Cleaning</div>
                                        <p>Ductwork plays a crucial role in the distribution of conditioned air throughout your home or office. However, dust, allergens, mold, and other contaminants can accumulate within the ducts over time, impacting air quality and HVAC system efficiency. Our AC duct cleaning services Dubai includes:</p>
                                        <ul className='list-disc pl-6'>
                                            <li>A thorough inspection of your air duct system</li>
                                            <li>Utilization of state-of-the-art equipment and techniques to remove accumulated debris, allergens, and  contaminants</li>
                                            <li>Cleaning of all duct components, including vents, grills, and air handlers</li>
                                            <li>Application of eco-friendly sanitizing solutions to eliminate bacteria and mold growth</li>
                                            <li>Ensuring proper airflow and system efficiency</li>
                                        </ul>
                                        <p>As a trusted Dubai duct cleaning company, EnviroClean helps maintain clean air, improves system efficiency, and prolongs the lifespan of your HVAC system.</p>
                                        <p>Additional Services</p>
                                        <p>In addition to AC and duct cleaning, EnviroClean offers other services to ensure the optimal functioning of your HVAC system, such as:</p>
                                        <ul className='list-disc pl-6'>
                                            <li>AC servicing and tune-ups</li>
                                            <li>Indoor air quality assessments</li>
                                            <li>Air filter replacement and cleaning</li>
                                            <li>Preventative service plans for ongoing system care</li>
                                        </ul>

                                        <p>EnviroClean’s comprehensive range of services, including AC cleaning and duct cleaning, make them a reliable choice for maintaining a clean, healthy, and efficient indoor environment in Dubai. Their team of skilled technicians, advanced equipment, eco-friendly approach, and commitment to customer satisfaction ensure that your HVAC system receives the care and attention it needs to perform optimally. By choosing our air duct cleaning Dubai, you can trust that you are investing in the long-term health, comfort, and efficiency of your home or office space.</p>
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
            </div>
        </section >
    )
}
