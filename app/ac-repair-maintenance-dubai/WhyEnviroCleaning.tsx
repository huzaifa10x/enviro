import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WhyEnviroCleaning() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="w-full h-full relative aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/images/355321.webp"
                        alt="EnviroClean technician working on AC unit"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-950 font-urbanist leading-tight">
                        WHY <span className="text-[#3CB474]">EnviroClean?</span>
                    </h2>

                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>Rather than simply cleaning the AC system, our services can extend to diagnosing faults, repairing components and replacing equipment where necessary.</p>
                        <p>Our objective is simple: clean, efficient and correctly operating air-conditioning.</p>
                    </div>

                    <ul className='list-disc pl-6'>
                        <li> ⁠Established AC specialist</li>
                        <li> ⁠Professional HVAC technicians</li>
                        <li> ⁠Clear diagnosis before repairs</li>
                        <li> ⁠Transparent quotations</li>
                        <li> ⁠Before and after documentation where applicable</li>
                        <li> ⁠Residential AC specialists</li>
                        <li> ⁠FCU cleaning, servicing, repair and replacement</li>
                        <li> ⁠Dubai-wide service</li>
                        <li> Reduce Energy Bills</li>
                        <li> Improve Indoor Air Quality</li>
                        <li> Keep Your Home Cooler</li>
                        <li> Reduce Allergies</li>
                    </ul>

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