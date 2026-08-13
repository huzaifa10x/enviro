import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ImportantPositioning() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-950 font-urbanist leading-tight">
                        IMPORTANT <span className="text-[#3CB474]">POSITIONING</span>
                    </h2>

                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>Please do not position this page as general property or home maintenance.</p>
                        <p>We want Enviroclean positioned specifically as an AC specialist.</p>
                        <p>The overall brand message should become: </p>
                        <p>ENVIROCLEAN
                            AC Cleaning • Servicing • Repairs • Replacement
                        </p>
                    </div>

                    <div className="pt-2">
                        <Link
                            href="tel:+971800368476"
                            className="inline-block bg-[#4CAF78] hover:bg-[#3d9664] text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-xs cursor-pointer"
                        >
                            Call Now
                        </Link>
                    </div>
                </div>

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
            </div>
        </section>
    )
}