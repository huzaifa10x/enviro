/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from 'next/link';

export default function HomeBanner() {
    return (
        <div className="flex flex-col">
            <div className='lg:p-4 overflow-hidden relative'>
                <div className="relative group flex-grow w-full lg:rounded-lg pb-50 md:pt-160 py-65 overflow-hidden text-white">
                    <div className="absolute inset-0 transition-opacity duration-1000">
                        {/* Native video tag instead of iframe */}
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                            poster="/images/home-banner/banner1.webp'" // Fast loading fallback image
                        >
                            <source src="/banner-video.mp4" type="video/mp4" />
                        </video>

                        <div className="absolute flex inset-0 bg-black/60 md:px-20 px-10 transition-all duration-500 z-10 justify-end pb-16 md:pb-25 flex-col">
                            <div className="max-w-7xl w-full">
                                <h1 className="md:text-5xl text-3xl font-bold mb-4 font-urbanist delay-300">
                                    Dubai AC Duct Cleaning
                                </h1>
                                <p className="max-w-4xl mb-6 md:text-base text-sm">
                                    As a British company, we bring expertise and excellence to ensure your indoor air quality is at its best.
                                </p>
                                <Link 
                                    href="https://web.whatsapp.com/send?phone=971528389414&text=Hello!" 
                                    className="bg-primary px-6 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block"
                                >
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