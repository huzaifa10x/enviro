/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // LCP Fix: Imported Next.js dynamic image optimizer
import { useState, useEffect, Key } from 'react';
import ReactDOM from 'react-dom'; // LCP Fix: React 19/Next 15 specific resource preloader

export default function NavbarCarousel({ slides, contentBottom = false }: any) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!slides || slides.length <= 1) return;
        const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, [slides]);

    // LCP CRITICAL FIX: Browser ko page request hote hi instruct karo active image preload karne ke liye
    const activeSlide = slides?.[current];
    if (activeSlide?.image) {
        ReactDOM.preload(activeSlide.image, { as: 'image', fetchPriority: 'high' });
    }

    return (
        <div className="flex flex-col">
            <div className='p-4 overflow-hidden relative'>
                <div className="relative group flex-grow w-full rounded-lg pb-50 pt-90 overflow-hidden text-white">
                    {
                        slides?.map((slide: any, index: number) => {
                            const isActive = index === current;

                            return (
                                <div
                                    key={slide.id || index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                >
                                    {/* --- LCP FIX: Removed background-image inline styles, using Next.js Image Component --- */}
                                    {slide.image && (
                                        <Image
                                            src={slide.image}
                                            alt={slide.title ? slide.title.replace(/<[^>]*>/g, '') : "EnviroClean UAE Banner"}
                                            fill
                                            sizes="100vw"
                                            priority={index === 0} // Pehli layout slide ko extreme priority do background load par
                                            className="object-cover object-center"
                                            quality={85}
                                        />
                                    )}

                                    {/* Content layer containing text. Added z-10 so it stays above the absolute Next.js <Image /> */}
                                    <div className={`absolute flex inset-0 bg-black/60 md:px-20 px-10 transition-all duration-500 z-10 ${contentBottom ? 'justify-end pb-16 md:pb-24' : 'justify-center'} flex-col`}>
                                        <div className={`${contentBottom ? 'max-w-7xl' : 'max-w-5xl'} w-full mx-auto`}>
                                            {slide?.subTitle ? <p className='text-[#1CAE59] mb-2'>{slide?.subTitle}</p> : ""}

                                            <div className="md:text-5xl text-3xl font-bold mb-4 font-urbanist delay-300" dangerouslySetInnerHTML={{ __html: slide.title }} />

                                            <div
                                                className="max-w-4xl mb-6 md:text-base"
                                                dangerouslySetInnerHTML={{ __html: slide.desc }}
                                            />
                                            {slide.actionTitle &&
                                                <Link
                                                    href={slide.actionUrl}
                                                    className="bg-primary px-4 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block"
                                                >
                                                    {slide.actionTitle}
                                                </Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                    {slides && slides.length > 1 ?
                        <div className='group-hover:opacity-100 opacity-0 '>
                            <button
                                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                                className="absolute group-hover:md:left-8 md:-left-8 duration-300 left-2 top-1/2 -translate-y-1/2 rounded-full z-20 text-white"
                            > <ChevronLeft size={40} /></button>
                            <button
                                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                                className="absolute group-hover:md:right-8 md:-right-8 duration-300 right-2 top-1/2 -translate-y-1/2 rounded-full z-20 text-white"
                            >
                                <ChevronRight size={40} />
                            </button>
                        </div> : ""
                    }

                    {/* Bottom Indicators navigation dot layer */}
                    <div className='absolute z-20 bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2'>
                        {slides?.map((i: any, key: number) => (
                            <div
                                onClick={() => setCurrent(key)}
                                key={key}
                                className={`w-2 h-2 cursor-pointer ${key === current ? 'bg-white' : 'bg-white/70'} rounded-full`}
                            ></div>
                        ))}
                    </div>
                </div >
            </div >
        </div >
    );
}