/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Send } from 'lucide-react';
import Link from 'next/link';

export default function HomeBanner() {
    return (
        <div className="flex flex-col">
            <div className='lg:p-4 overflow-hidden relative'>
                <div className="relative group flex-grow w-full lg:rounded-lg max-h-[100%] h-[90vh] overflow-hidden text-white">
                    <div className={`absolute inset-0 transition-opacity duration-1000`}>
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GtUV31OiCf4?autoplay=1&mute=1&controls=0&loop=1&playlist=GtUV31OiCf4&si=dipA1RH3jPdhMY1S"
                            title="YouTube video player"
                            allow="autoplay; encrypted-media; gyroscope; web-share"
                            className='md:scale-150 scale-y-[2.8] scale-x-150'
                            allowFullScreen
                        ></iframe>

                        <div className={`absolute flex inset-0 bg-black/60 md:px-10 px-10 transition-all duration-500 z-10 justify-end pb-16 md:pb-10 flex-col`}>
                            <div className={`max-w-7xl w-full`}>
                                <div className="md:text-[50px] text-3xl font-semibold mb-4 font-urbanist delay-300">Dubai AC Duct Cleaning</div>
                                <div className="max-w-4xl mb-6 md:text-base text-sm">As a British company, we bring expertise and excellence to ensure your indoor air quality is at its best.</div>

                                <div className='flex items-center gap-4'>
                                    <Link href={"https://web.whatsapp.com/send?phone=971528389414&text=Hello!"} className="border px-6 py-2 w-fit rounded-md text-white font-medium hover:border-primary hover:bg-green-700 transition flex items-center gap-3 duration-300">
                                        Book Free Inspection
                                        <Send size={17} />
                                    </Link>

                                    <Link href={"https://web.whatsapp.com/send?phone=971528389414&text=Hello!"} className="bg-primary flex items-center gap-3 px-6 py-2 w-fit rounded-md text-white font-medium hover:bg-green-700 transition">
                                        Get a Quote
                                        <img className='w-4' src="/images/whatsapp-white-icon-1.webp" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}