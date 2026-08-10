'use client'

import Image from "next/image";
import sapLogo from '@/public/images/sap.webp';
import hiltonLogo from '@/public/images/hilton.webp';
import radissonLogo from '@/public/images/radisson.webp';
import starbucksLogo from '@/public/images/starbucks.webp';
import crsLogo from '@/public/images/crs.webp';

export default function PartnersSection() {
    const partners = [
        { name: "SAP", src: sapLogo },
        { name: "Hilton", src: hiltonLogo },
        { name: "Radisson", src: radissonLogo },
        { name: "Starbucks", src: starbucksLogo },
        { name: "CRS", src: crsLogo },
    ];

    return (
        <section className="py-20 bg-[#F8FFF9] overflow-hidden">
            {/* Inline CSS Animation Style */}
            <style jsx>{`
                .marquee {
                    display: flex;
                    animation: scroll 20s linear infinite;
                }
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .marquee:hover { animation-play-state: paused; }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="text-3xl text-center font-bold text-gray-900 font-urbanist">
                    Our Trusted Partners
                    <div className="border-b-4 border-primary w-full my-4"></div>
                </div>
            </div>

            {/* Marquee Container */}
            <div className="max-w-7xl mx-auto flex w-full overflow-hidden">
                <div className="marquee gap-16 items-center">
                    {/* Logos list double krdi taake gap na aaye */}
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <Image
                            key={index}
                            src={partner.src}
                            height={500}
                            width={190}
                            alt={partner.name}
                            className="h-14 object-contain transition-all duration-300 flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}