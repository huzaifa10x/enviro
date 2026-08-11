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
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .animate-track {
                    display: flex;
                    flex-shrink: 0;
                    min-width: 100%;
                    gap: 4rem;
                    align-items: center;
                    justify-content: space-around;
                    animation: marquee 20s linear infinite;
                }
                .marquee-container:hover .animate-track {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="text-3xl text-center font-bold text-gray-900 font-urbanist">
                    Our Trusted Partners
                    <div className="border-b-4 border-primary w-full my-4"></div>
                </div>
            </div>

            <div className="marquee-container flex overflow-hidden w-full select-none gap-16">
                <div className="animate-track">
                    {partners.map((partner, index) => (
                        <Image
                            key={index}
                            src={partner.src}
                            height={60}
                            width={190}
                            alt={partner.name}
                            className="h-14 w-auto object-contain flex-shrink-0"
                        />
                    ))}
                </div>
                <div className="animate-track" aria-hidden="true">
                    {partners.map((partner, index) => (
                        <Image
                            key={`dup-${index}`}
                            src={partner.src}
                            height={60}
                            width={190}
                            alt={partner.name}
                            className="h-14 w-auto object-contain flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}