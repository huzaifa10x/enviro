/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavbarCarousel({ slides, contentBottom = false }: any) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col ">
            <div className='p-4 overflow-hidden relative'>

                <div className="relative flex-grow w-full rounded-2xl pb-50 pt-90 overflow-hidden text-white">
                    {
                        slides?.map((slide: any, index: number) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url('${slide.image}')` }}
                                >
                                    <div className={`absolute flex inset-0 bg-black/60 md:px-20 px-10 transition-all duration-500 ${contentBottom ? 'justify-end pb-16 md:pb-24' : 'justify-center'} flex-col`}>
                                        <div className={`${contentBottom ? 'max-w-7xl' : 'max-w-5xl'}  w-full mx-auto`}>
                                            {slide?.subTitle ? <p className='text-[#1CAE59] mb-2'>{slide?.subTitle}</p> : ""}
                                            <h1 className="md:text-5xl text-3xl font-bold mb-4 font-urbanist">
                                                {slide.title}
                                            </h1>
                                            <div
                                                className="max-w-4xl mb-6 md:text-base"
                                                dangerouslySetInnerHTML={{ __html: slide.desc }}
                                            />
                                            <Link
                                                href={slide.actionUrl}
                                                className="bg-primary px-4 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block"
                                            >
                                                {slide.actionTitle}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {slides.length > 1 ?
                        <>
                            <button
                                onClick={() => setCurrent(prev => (prev - 1 + slides.length) % slides.length)}
                                className="absolute md:left-8 left-2 top-1/2 rounded-full z-20"
                            > <ChevronLeft size={40} /></button>
                            <button
                                onClick={() => setCurrent(prev => (prev + 1) % slides.length)}
                                className="absolute md:right-8 right-2 top-1/2 rounded-full z-20"
                            >
                                <ChevronRight size={40} />
                            </button>
                        </> : ""
                    }
                </div >
            </div >
        </div >
    );
}