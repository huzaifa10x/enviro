import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DisinfectionSection() {
    const featurePoints = [
        "Eliminates Mould & Bacteria",
        "Kills Odours at the Source",
        "Environmentally Friendly",
        "Designed for AC System",
        "EPA Registered"
    ];

    return (
        <section className="w-full bg-white py-12 md:py-16 px-6 md:px-0">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center p-6">
                    <Image
                        src="/images/iioio.webp"
                        alt="EnviroCON Disinfection Product"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain"
                    />
                </div>

                <div className="flex flex-col items-start">
                    <span className="text-primary text-xs md:text-sm font-urbanist font-bold uppercase tracking-wider mb-2 block">
                        AC Cleaning & Disinfection
                    </span>

                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 mb-6">
                        Disinfection
                    </h2>

                    <p className="font-extralight text-sm md:text-base text-[#333333] leading-relaxed mb-6">
                        Our disinfection is designed specifically for AC/HVAC systems only. EnviroCON is highly effective in eliminating odour causing microorganisms as well as those associated with mould, mildew, and bacteria growth.
                    </p>

                    <div className="flex flex-col gap-3.5 mb-8 w-full">
                        {featurePoints.map((point, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="flex-shrink-0 text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.14-.1l4.14-5.5a.75.75 0 0 0-.1-.1l-.1-.12Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="text-base md:text-lg font-urbanist font-medium text-zinc-900 tracking-wide">
                                    {point}
                                </h4>
                            </div>
                        ))}
                    </div>

                    <Link href={'tel:+971800368476'} className="bg-primary hover:bg-[#0f994b] text-white font-urbanist font-medium py-2.5 px-8 rounded-lg text-base transition-colors duration-200 tracking-wide shadow-sm">
                        Call Now
                    </Link>
                </div>

            </div>
        </section>
    );
}