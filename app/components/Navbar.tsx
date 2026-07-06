'use client'

import React, { useState } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false)

    const servicesItems = [
        { id: 1, title: 'AC Cleaning', icon: '/service-icons/enviro-01-scaled.webp', url: '/accleaning-servicing/', active: true },
        { id: 2, title: 'Coil Cleaning', icon: '/service-icons/enviro-02-scaled.webp', url: '/coil-cleaning/', active: false },
        { id: 3, title: 'Duct Cleaning', icon: '/service-icons/enviro-03-scaled.webp', url: '/duct-cleaning-service-dubai/', active: false },
        { id: 4, title: 'AC Sanitisation', icon: '/service-icons/enviro-04-scaled.webp', url: '/ac-sanitisation/', active: false },
    ]

    const navLinks = [
        { id: 2, title: 'Our Story', url: '/our-story/' },
        { id: 3, title: 'FAQ', url: '/faq/' },
        { id: 4, title: 'Blog', url: '/blog/' },
        { id: 5, title: 'Contact', url: '/contact/' },
    ]

    return (
        <nav className="absolute w-full px-10 py-8 z-50">
            <div className='max-w-7xl mx-auto flex items-center justify-between relative'>
                {/* Logo */}
                <Link href='/'>
                    <Image
                        src={'/images/logo.webp'}
                        width={150}
                        height={300}
                        alt='logo'
                    />
                </Link>

                {/* Nav Links Wrapper */}
                <div className="lg:flex hidden gap-8 font-urbanist font-medium text-white items-center">

                    {/* Services Trigger Group */}
                    <div
                        className="relative py-2 cursor-pointer"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <div className="flex items-center gap-1 hover:text-green-300 transition-colors">
                            <span>Services</span>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </div>

                        {/* Mega Dropdown Panel (image_cfe65d.jpg Styling matching) */}
                        {isServicesOpen && (
                            <div className="absolute top-full -left-6 w-[650px] bg-white rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-t-4 border-[#12b359] z-50">
                                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                    {servicesItems.map((item) => (
                                        <Link
                                            key={item.id}
                                            href={item.url}
                                            className="flex items-center gap-4 group transition-all duration-200"
                                        >
                                            {/* Icon Circle */}
                                            <div className="w-16 h-16 relative rounded-full border-zinc-900 flex items-center justify-center bg-white shrink-0">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            {/* Item Label */}
                                            <span className={`text-xl font-urbanist font-bold tracking-wide transition-colors group-hover:text-[#12b359] ${item.active ? 'text-[#12b359]' : 'text-zinc-900'}`}>
                                                {item.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Standard Pages Links */}
                    {navLinks.map(item => (
                        <Link
                            key={item.id}
                            href={item.url}
                            className="hover:text-green-300 transition-colors"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Call to Action Button */}
                <button className="lg:block hidden px-6 py-2 rounded font-urbanist font-medium bg-[#12b359] text-white hover:bg-[#0f994b] transition-colors">
                    Get In Touch
                </button>

                {/* Mobile Menu Icon */}
                <Menu className='lg:hidden text-white cursor-pointer' />
            </div>
        </nav>
    )
}