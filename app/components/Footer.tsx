import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Link className="fixed right-0 bg-primary grid rounded-full md:p-4 md:m-8 md:bottom-18 bottom-14 p-2 m-2 z-20" href='tel:+971505160610'>
                <span className="sr-only">Call us at +971505160610</span>
                <button className="btn rounded btn-warning border-warning rounded-5">
                    <Phone className="text-white" size={26} />
                    <span className="sr-only">Call Button</span>
                </button>
            </Link>
            <Link className="fixed right-0 bg-primary grid rounded-full md:p-4 md:m-8 md:bottom-0 bottom-0 p-2 m-2 z-20" href={'https://wa.me/+971505160610'}>
                <span className="sr-only">Whatsaap us at +971505160610</span>
                <button className="btn rounded btn-warning border-warning rounded-5 shadow">
                    <Image src={'/images/whatsapp-white-icon-1.webp'} width={25} height={25} alt="WPICon" />
                    <span className="sr-only">Whatsapp Button</span>
                </button>
            </Link>
            <footer className="bg-[#1a1a1ae6] text-white relative overflow-hidden">
                <div className="bg-[url('/images/footer-bg.webp')] w-full h-full absolute bg-contain bg-center bg-no-repeat brightness-20"></div>
                <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-5 py-20">
                    <div className="space-y-4">
                        <Image
                            src={'/images/logo.webp'}
                            width={200}
                            height={300}
                            alt='logo'
                        />
                        <p className="text-white text-sm leading-relaxed">
                            Welcome to enviroclean, your premier choice for professional AC duct cleaning services in Dubai and Abu Dhabi.
                        </p>
                        <div className="flex gap-5 text-zinc-400">
                            {/* Facebook */}
                            <Link href="https://m.facebook.com/envirocleanuae/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                <span className="sr-only">Our Facebook page link facebook.com/envirocleanuae</span>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M17 2H14C12.6739 2 11.4021 2.52678 10.4645 3.46447C9.52678 4.40215 9 5.67392 9 7V10H6V14H9V22H13V14H16L17 10H13V7C13 6.73478 13.1054 6.48043 13.2929 6.29289C13.4804 6.10536 13.7348 6 14 6H17V2Z" />
                                </svg>
                            </Link>

                            {/* Instagram */}
                            <Link href="https://www.instagram.com/envirocleanuae/?hl=en"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                <span className="sr-only">Our instagram page link instagram.com/envirocleanuae/?hl=en</span>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                                    <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" />
                                    <path d="M17.5 6.51L17.51 6.49889" />
                                </svg>
                            </Link>

                            {/* YouTube */}
                            <Link href="https://www.youtube.com/channel/UCG0mBHHt0bURaDQxwOs03qw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors"
                            >
                                <span className="sr-only">Our youtube channel link youtube.com/channel/UCG0mBHHt0bURaDQxwOs03qw</span>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M14 12L10.5 14V10L14 12Z" className="fill-current" />
                                    <path d="M2 12.7075V11.2924C2 8.39705 2 6.94939 2.90549 6.01792C3.81099 5.08645 5.23656 5.04613 8.08769 4.96549C9.43873 4.92728 10.8188 4.8999 12 4.8999C13.1812 4.8999 14.5613 4.92728 15.9123 4.96549C18.7634 5.04613 20.189 5.04613 21.0945 6.01792C22 6.94939 22 8.39705 22 11.2924V12.7075C22 15.6028 22 17.0505 21.0945 17.9819C20.189 18.9134 18.7635 18.9537 15.9124 19.0344C14.5613 19.0726 13.1812 19.1 12 19.1C10.8188 19.1 9.43867 19.0726 8.0876 19.0344C5.23651 18.9537 3.81097 18.9134 2.90548 17.9819C2 17.0505 2 15.6028 2 12.7075Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-3xl font-urbanist font-medium text-primary mb-6">Quick Access</div>
                        <ul className="space-y-3 text-white text-sm">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'Our Story', href: '/our-story' },
                                { label: 'Blog', href: '/blog' },
                                { label: 'Abu Dhabi', href: '/duct-cleaning-abu-dhabi' },
                                { label: 'Contact', href: '/contact' }
                            ].map(item => (
                                <li key={item.label} className="hover:text-white transition">
                                    <Link className="cursor-pointer" href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-3xl font-urbanist font-medium text-primary mb-6">Our Services</div>
                        <ul className="space-y-3 text-white text-sm">
                            {[
                                { label: 'AC Cleaning', href: '/accleaning-servicing/' },
                                { label: 'Duct Cleaning', href: '/duct-cleaning-service-dubai/' },
                                { label: 'Coil Cleaning', href: '/coil-cleaning/' },
                                { label: 'AC Sanitisation', href: '/ac-sanitisation/' }
                            ].map(item => (
                                <li key={item.label} className="hover:text-white transition">
                                    <Link className="cursor-pointer" href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="text-3xl font-urbanist font-medium text-primary mb-6">Follow Us</div>
                        <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57765.36557119436!2d55.28446!3d25.191911!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f691d1aa5dc8b%3A0x2a6eefb3878c4bb!2sEnviro%20Clean%20UAE!5e0!3m2!1sen!2s!4v1783338169208!5m2!1sen!2s" width="600" height="450" loading="lazy"
                                className="w-full h-full"
                                title="Location"
                            />
                        </div>
                    </div>
                </div>

                <div className="relative z-10 bg-black text-center border-t border-gray-800 py-8 text-white text-sm">
                    Copyright © 2026 Enviro-Clean. All rights reserved.
                </div>
            </footer>
        </>
    );
}