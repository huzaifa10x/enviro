/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeBanner() {
    const whatsappUrl = "https://wa.me/971528389414?text=Hello!";

    return (
        <div className="flex flex-col">
            <div className="lg:p-4 overflow-hidden relative">
                <div className="relative group flex-grow w-full lg:rounded-lg md:pt-[300px] md:pb-[250px] pt-[150px] pb-[100px] overflow-hidden text-white">
                    
                    {/* HTML5 Video Layer - Instant Load & Fast LCP */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/images/hero-poster.webp" // Fast LCP trigger ke liye poster image zarur add karein
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
                    >
                        <source src="/banner-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Content Overlay */}
                    <div className="absolute flex inset-0 bg-black/60 px-6 sm:px-10 transition-all duration-500 z-10 justify-end pb-10 md:pb-16 flex-col">
                        <div className="max-w-7xl w-full">
                            <h1 className="text-2xl sm:text-3xl md:text-[50px] leading-tight font-semibold mb-2 sm:mb-4 font-urbanist">
                                AC Cleaning in Dubai
                            </h1>
                            <p className="max-w-4xl mb-4 sm:mb-6 text-xs sm:text-sm md:text-base text-gray-200">
                                As a British company, we bring expertise and excellence to ensure your indoor air quality is at its best.
                            </p>

                            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                                <Link 
                                    href={whatsappUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-white/80 px-4 sm:px-6 py-2 w-fit rounded-md text-white text-xs sm:text-sm font-medium hover:border-primary hover:bg-green-700 transition flex items-center gap-2 sm:gap-3 duration-300"
                                >
                                    Book Free Inspection
                                    <Send size={15} />
                                </Link>

                                <Link 
                                    href={whatsappUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 w-fit rounded-md text-white text-xs sm:text-sm font-medium hover:bg-green-700 transition"
                                >
                                    Get a Quote
                                    <Image 
                                        width={16} 
                                        height={16} 
                                        className="w-4 h-4 object-contain" 
                                        src="/images/whatsapp-white-icon-1.webp" 
                                        alt="WhatsApp Icon" 
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}