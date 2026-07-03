"use client";
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function LayoutSection() {
    const [current, setCurrent] = useState(0);
    const slides = [
        {
            id: 1, title: "AC Cleaning Dubai",
            desc: `<p>Welcome to enviroclean, your premier choice for professional AC duct cleaning services in<br>Dubai and Abu Dhabi. As a British company, we bring expertise and excellence to ensure<br>your indoor air quality is at its best. Discover the difference of our top-notch services for a<br>healthier and more comfortable living or working environment.</p>`,
            image: "/images/home-banner/banner1.webp"
        },
        {
            id: 2,
            title: "AC Cleaning Dubai",

            desc: `<p>Welcome to enviroclean, your premier choice for professional AC duct cleaning services in<br>Dubai and Abu Dhabi. As a British company, we bring expertise and excellence to ensure<br>your indoor air quality is at its best. Discover the difference of our top-notch services for a<br>healthier and more comfortable living or working environment.</p>`,

            image: "/images/home-banner/banner2.webp"
        },
        {
            id: 3,
            title: "AC Cleaning Dubai",
            desc: `<p>Welcome to enviroclean, your premier choice for professional AC duct cleaning services in<br>Dubai and Abu Dhabi. As a British company, we bring expertise and excellence to ensure<br>your indoor air quality is at its best. Discover the difference of our top-notch services for a<br>healthier and more comfortable living or working environment.</p>`,
            image: "/images/home-banner/banner3.webp"
        },
        {
            id: 4,
            title: "AC Cleaning Dubai",
            desc: `<p>Welcome to enviroclean, your premier choice for professional AC duct cleaning services in<br>Dubai and Abu Dhabi. As a British company, we bring expertise and excellence to ensure<br>your indoor air quality is at its best. Discover the difference of our top-notch services for a<br>healthier and more comfortable living or working environment.</p>`,
            image: "/images/home-banner/banner4.webp"
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col ">
            <div className='p-4 overflow-hidden relative'>
                <nav className="absolute w-full shadow-sm px-10 py-10 z-50">
                    <div className='max-w-7xl mx-auto flex items-center justify-between'>
                        <Image
                            src={'/images/logo.webp'}
                            width={150}
                            height={300}
                            alt='logo'
                        />
                        <div className="lg:flex hidden gap-6 font-medium text-white">
                            {['Services', 'Our Story', 'FAQ', 'Blog', 'Contact'].map(link => (
                                <a key={link} href="#" className="hover:text-green-300">{link}</a>
                            ))}
                        </div>
                        <button className="lg:block hidden px-4 py-1 rounded font-medium bg-secondary">Get In Touch</button>
                        <Menu className='lg:hidden text-white' />
                    </div>
                </nav >

                <div className="relative flex-grow w-full rounded-2xl min-h-[700px] overflow-hidden text-white">
                    {
                        slides.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{ backgroundImage: `url('${slide.image}')` }}
                                >
                                    <div className="absolute flex justify-around inset-0 bg-black/50 md:px-20 px-10">
                                        <div className='flex flex-col justify-center max-w-5xl'>
                                            <h1 className="md:text-5xl text-3xl font-bold mb-4 font-urbanist">{slide.title}</h1>
                                            <div className="max-w-4xl mb-6 md:text-base" dangerouslySetInnerHTML={{ __html: slide.desc }} />
                                            <button className=" bg-primary px-4 py-1 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition">
                                                Get a Quote
                                            </button>
                                        </div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

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
                </div >
            </div >
        </div >
    );
}