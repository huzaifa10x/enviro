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
                        src="/images/coil-cleaning-3.webp"
                        alt="EnviroClean technician working on AC unit"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Content Container */}
                <div className="space-y-6">
                    {/* Heading matching image_de7d62.webp styling */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-950 font-urbanist leading-tight">
                        Reasons to Choose <span className="text-[#3CB474]">EnviroClean Coil Cleaning</span> in Dubai
                    </h2>

                    {/* Descriptions */}
                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">
                                Eco-conscious
                            </span>
                            Our philosophy at EnviroClean is centred on sustainability. We use eco-friendly cleanings for a complete cleaning of your AC coils, with no harm to you or the environment.                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">
                                Effective Specialists
                            </span>
                            Our well-trained specialists have the expertise required to resolve different problems related to various types of HVAC systems efficiently. You can be assured that the coils will be cleaned according to your requirements.                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">
                                Modern Technologies:
                            </span>
                            Modern Technologies:
                            Modern cleaning technology is what we always employ. It enables us to provide businesses and homeowners with prompt, high-quality results.
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