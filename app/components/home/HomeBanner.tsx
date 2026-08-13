/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeBanner({ slides, contentBottom = false }: any) {
    return (
        <div className="flex flex-col">
            <div className='lg:p-4 overflow-hidden relative'>
                <div className="relative group flex-grow w-full lg:rounded-lg pb-50 md:pt-160 py-65 overflow-hidden text-white">
                    <div className={`absolute inset-0 transition-opacity duration-1000`}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GtUV31OiCf4?autoplay=1&mute=1&controls=0&loop=1&playlist=GtUV31OiCf4&si=dipA1RH3jPdhMY1S"
                            title="YouTube video player"
                            allow="autoplay; encrypted-media; gyroscope; web-share"
                            allowFullScreen
                        ></iframe>

                        <div className={`absolute flex inset-0 bg-black/60 md:px-20 px-10 transition-all duration-500 z-10 justify-end pb-16 md:pb-25 flex-col`}>
                            <div className={`max-w-7xl w-full`}>
                                <div className="md:text-5xl text-3xl font-bold mb-4 font-urbanist delay-300">Dubai AC Duct Cleaning</div>
                                <div className="max-w-4xl mb-6 md:text-base text-sm">As a British company, we bring expertise and excellence to ensure your indoor air quality is at its best.</div>
                                <Link href={"https://web.whatsapp.com/send?phone=971528389414&text=Hello!"} className="bg-primary px-6 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block">
                                    Get a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}