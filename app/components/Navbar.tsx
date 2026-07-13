'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // Is hook ko add kiya active link check karne ke liye

export default function Navbar() {
    const pathname = usePathname() // Current path read karne ke liye
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

    // Background scroll ko lock karne ke liye useEffect
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    // Menu band hone par uska accordion state bhi reset kar dete hain
    useEffect(() => {
        if (!isMobileMenuOpen) {
            setIsMobileServicesOpen(false)
        }
    }, [isMobileMenuOpen])

    const servicesItems = [
        { id: 1, title: 'AC Cleaning', icon: '/service-icons/enviro-01-scaled.webp', url: '/accleaning-servicing/' },
        { id: 2, title: 'Coil Cleaning', icon: '/service-icons/enviro-02-scaled.webp', url: '/coil-cleaning/' },
        { id: 3, title: 'Duct Cleaning', icon: '/service-icons/enviro-03-scaled.webp', url: '/duct-cleaning-service-dubai/' },
        { id: 4, title: 'AC Sanitisation', icon: '/service-icons/enviro-04-scaled.webp', url: '/ac-sanitisation/' },
    ]

    const navLinks = [
        { id: 2, title: 'Our Story', url: '/our-story/' },
        { id: 3, title: 'FAQ', url: '/faq/' },
        { id: 4, title: 'Blog', url: '/blog/' },
        { id: 5, title: 'Contact', url: '/contact/' },
    ]

    return (
        <nav className={`${isMobileMenuOpen ? 'fixed' : 'absolute'} top-0 left-0 w-full px-6 md:px-10 py-6 md:py-8 z-50`}>
            <div className='max-w-7xl mx-auto flex items-center justify-between relative'>
                {/* Logo */}
                <Link href='/' className="z-50">
                    <Image
                        src={'/images/logo.webp'}
                        width={130}
                        height={260}
                        alt='logo'
                        className="w-[120px] md:w-[150px] h-[40px] object-contain"
                    />
                </Link>

                {/* --- DESKTOP NAV LINKS --- */}
                <div className="lg:flex hidden gap-8 font-urbanist font-medium text-white items-center">
                    <div
                        className="relative py-2 cursor-pointer"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        {/* 
                          Agar user kisi bhi service page par ho, 
                          toh 'Services' main heading ko bhi active green color de sakte hain 
                        */}
                        <div className={`flex items-center gap-1 hover:text-green-300 transition-colors ${servicesItems.some(item => pathname === item.url) ? 'text-primary' : ''
                            }`}>
                            <span>Services</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Mega Dropdown Panel */}
                        {isServicesOpen && (
                            <div className="absolute top-full -left-6 w-[650px] bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-t-4 border-primary z-50">
                                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                    {servicesItems.map((item) => {
                                        // Dynamic Active Check (Current URL matches item URL)
                                        const isActive = pathname === item.url;

                                        return (
                                            <Link
                                                key={item.id}
                                                href={item.url}
                                                className="flex items-center gap-4 group transition-all duration-200"
                                            >
                                                <div className={`w-16 h-16 relative rounded-full flex items-center justify-center bg-white shrink-0 overflow-hidden ${isActive ? 'ring-2 ring-primary' : ''
                                                    }`}>
                                                    <Image
                                                        src={item.icon}
                                                        alt={item.title}
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <span className={`text-xl font-urbanist font-bold tracking-wide transition-colors group-hover:text-primary ${isActive ? 'text-primary' : 'text-zinc-900'
                                                    }`}>
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Standard Pages Links */}
                    {navLinks.map(item => {
                        const isActive = pathname === item.url;
                        return (
                            <Link
                                key={item.id}
                                href={item.url}
                                className={`transition-colors ${isActive ? 'text-primary' : 'hover:text-green-300'}`}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>

                {/* Call to Action Button */}
                <Link href={"tel:0585815833"}>
                    <button className="lg:block hidden cursor-pointer px-6 py-2 rounded font-urbanist bg-secondary font-semibold transition-colors">
                        Get In Touch
                    </button>
                </Link>

                {/* Hamburger Menu Icon (Mobile Only) */}
                <button
                    className='lg:hidden text-white cursor-pointer z-50 p-2'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                </button>
            </div>

            {/* --- MOBILE OVERLAY PANEL --- */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-zinc-950 pt-28 px-8 flex flex-col justify-between pb-10 z-40 overflow-y-auto">
                    <div className="flex flex-col gap-6 font-urbanist font-semibold text-2xl text-white">

                        {/* Mobile Services Dropdown Accordion */}
                        <div>
                            <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className={`flex items-center justify-between w-full py-2 text-left ${servicesItems.some(item => pathname === item.url) ? 'text-primary' : ''
                                    }`}
                            >
                                <span>Services</span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isMobileServicesOpen && (
                                <div className="mt-4 pl-4 grid grid-cols-1 gap-4 border-l border-zinc-700">
                                    {servicesItems.map((item) => {
                                        const isActive = pathname === item.url;

                                        return (
                                            <Link
                                                key={item.id}
                                                href={item.url}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center gap-3 py-1"
                                            >
                                                <div className="w-10 h-10 relative rounded-full overflow-hidden shrink-0 bg-white">
                                                    <Image src={item.icon} alt={item.title} fill className="object-cover" />
                                                </div>
                                                <span className={`text-lg font-bold ${isActive ? 'text-primary' : 'text-zinc-300'}`}>
                                                    {item.title}
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Mobile Standard Links */}
                        {navLinks.map(item => {
                            const isActive = pathname === item.url;
                            return (
                                <Link
                                    key={item.id}
                                    href={item.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`py-2 transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                                >
                                    {item.title}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile CTA Button */}
                    <div className="mt-8">
                        <button className="w-full py-4 rounded-xl font-urbanist font-bold text-xl bg-secondary text-white hover:bg-primary/10 transition-colors">
                            Get In Touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}