import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EcoFriendlyServices() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image Container */}
                <div className="w-full relative h-full aspect-square  rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/images/coil-cleaning-3.jpeg" 
                        alt="EnviroClean technician working on AC unit"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Content Container */}
                <div className="space-y-6">
                    {/* Heading matching image_de7d62.jpg styling */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-950 font-urbanist leading-tight">
                        Our <span className="text-[#3CB474]">Eco-Friendly Services</span> will Clean your Coils
                    </h2>

                    {/* Descriptions */}
                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">
                                Coil Cleaning for Energy Efficiency:
                            </span>
                            Our AC coil cleaning service removes dirt, debris, and contaminants from coils inside your AC unit, ensuring optimal HVAC system performance. This translates to improved energy efficiency, lower utility bills, and enhanced indoor air quality.
                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">
                                Sustainable Maintenance Packages:
                            </span>
                            Choose from our sustainable maintenance packages, which encompass regular coil cleaning, filter replacement, and system inspections. Our packages are designed to prolong the lifespan of your HVAC system while minimizing the risk of breakdowns.
                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">
                                Eco-Conscious Solutions:
                            </span>
                            Our commitment to eco-friendly practices extends to every aspect of our services. From cleaning solutions to waste disposal, we prioritize sustainability, contributing to a healthier indoor environment, better air quality, and a greener planet.
                        </p>
                        <p>
                            EnviroClean Coil Cleaning is a premier choice for individuals and businesses seeking optimal HVAC performance through eco-friendly and efficient coil cleaning. Here’s why customers should choose us:
                        </p>
                    </div>

                    {/* CTA Button matching the green tone of the image */}
                    <div className="pt-2">
                        <Link
                            href="tel:+971800368476"
                            className="inline-block bg-[#4CAF78] hover:bg-[#3d9664] text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-xs cursor-pointer"
                        >
                            Call Now
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}