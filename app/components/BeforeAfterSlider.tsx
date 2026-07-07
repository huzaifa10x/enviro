/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useRef, useEffect } from 'react';

// 1. Ek chota reusable single slider component banaya hai
interface SingleSliderProps {
    beforeImage: string;
    afterImage: string;
}

function SingleSliderItem({ beforeImage, afterImage }: SingleSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let position = (x / rect.width) * 100;
        if (position < 0) position = 0;
        if (position > 100) position = 100;
        setSliderPosition(position);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        if (e.touches.length > 0) {
            handleMove(e.touches[0].clientX);
        }
    };

    useEffect(() => {
        const handleMouseUp = () => setIsDragging(false);
        if (isDragging) {
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchend', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            className="w-full aspect-[10/8] relative rounded-2xl overflow-hidden shadow-md border-4 border-white select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
        >
            {/* After Image */}
            <img
                src={afterImage}
                alt="After Cleaning"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            <span className="absolute bottom-1/2 right-4 bg-black/40 text-white font-medium text-xs sm:text-sm px-3 py-1 rounded-md backdrop-blur-sm z-10">
                AFTER
            </span>

            {/* Before Image Area */}
            <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
            >
                <div
                    className="absolute inset-0 h-full"
                    style={{ width: containerRef.current ? `${containerRef.current.getBoundingClientRect().width}px` : '100%' }}
                >
                    <img
                        src={beforeImage}
                        alt="Before Cleaning"
                        className="absolute inset-0 w-full h-full object-cover max-w-none"
                    />
                </div>
            </div>
            <span className="absolute bottom-1/2 left-4 bg-black/40 text-white font-medium text-xs sm:text-sm px-3 py-1 rounded-md backdrop-blur-sm z-10">
                BEFORE
            </span>

            {/* Slider Handle Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 group"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#12b359] text-gray-600 transition-transform duration-100 group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-[#12b359]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" className="rotate-90 origin-center" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

// 2. Main Wrapper Component
interface BeforeAfterSliderProps {
    showTwo?: boolean; // Agar true bhejenge to 2 sections dikhenge
    beforeImage1?: string;
    afterImage1?: string;
    beforeImage2?: string;
    afterImage2?: string;
}

export default function BeforeAfterSlider({
    showTwo = false, // Default: single slider
    beforeImage1 = "/images/recent-work/img5.jpg",
    afterImage1 = "/images/recent-work/img6.jpg",
    beforeImage2 = "/images/recent-work/img5.jpg", // Dusre section ki default images
    afterImage2 = "/images/recent-work/img6.jpg"
}: BeforeAfterSliderProps) {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 font-urbanist bg-[#f2faf7]">
            <div className="max-w-6xl mx-auto">
                {showTwo ? (
                    /* Jab dono show karne hon (Responsive Grid Layout) */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <SingleSliderItem beforeImage={beforeImage1} afterImage={afterImage1} />
                        <SingleSliderItem beforeImage={beforeImage2} afterImage={afterImage2} />
                    </div>
                ) : (
                    /* Jab sirf ek show karna ho to centered aur max-w-4xl layout */
                    <div className="max-w-4xl mx-auto">
                        <SingleSliderItem beforeImage={beforeImage1} afterImage={afterImage1} />
                    </div>
                )}
            </div>
        </section>
    );
}