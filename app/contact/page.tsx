import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import ContactForm from "../components/home/ContactForm";
import { LocationEditIcon, Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
const slides = [
    {
        id: 1,
        subTitle: "",
        title: "<h1>Contact Us</h1>",
        desc: `Get in touch with our UK bookings team today.`,
        image: "/images/our-story.webp",
        actionTitle: 'Call Us',
        actionUrl: 'tel:+971800368476'
    },
];

const title = 'Contact - Enviro Clean UAE'
const description = 'Contact Us Get in touch with our UK bookings team today. Call Now  Email Address info@envirocleanuae.com  Phone no. TOLL FREE- 800 368 476  Address Empire Heights A, 09/13 Business Bay Dubai We Love To Hear From You Full Name Email Address Phone Number Location LocationDubaiArabian RanchesDubai MarinaPalm JumeirahEmirates HillsJumeriah Park Service You'
const canonical = 'https://envirocleanuae.com/contact'

export const metadata: Metadata = {
    title: title,
    description: description,
    alternates: {
        canonical: canonical,
    },

    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Open Graph / Facebook Meta Data
    openGraph: {
        title: title,
        description: description,
        url: canonical,
        siteName: 'EnviroClean UAE',
        images: [
            {
                url: 'https://envirocleanuae.com/images/og-main-banner.webp', // Is path par main meta banner image render karein
                width: 1200,
                height: 630,
                alt: 'EnviroClean AC Cleaning Services Dubai',
            },
        ],
        locale: 'en_AE',
        type: 'website',
    },

    // Twitter Cards Meta Data
    twitter: {
        card: 'summary_large_image',
        title: 'AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai',
        description: 'EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC\'s performance and efficiency.',
        images: ['https://envirocleanuae.com/images/og-main-banner.webp'],
    },
}

const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
        {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://envirocleanuae.com',
        },
        {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Contact',
            'item': 'https://envirocleanuae.com/contact',
        },
    ],
}

export default function contact() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="bg-secondary py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-2 flex flex-col justify-center space-y-5">
                            {/* Phone Card */}
                            <a
                                href="tel:971800368476"
                                className="group flex items-center rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:b">
                                    <Phone size={28} strokeWidth={2} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Call Us (Toll Free)
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 group-hover:text-primary">
                                        800 368 476
                                    </p>
                                </div>
                            </a>

                            {/* WhatsApp Card */}
                            <a
                                href="https://wa.me/+971528389414"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl p-2.5 transition-colors">
                                    <Image
                                        src="/images/whatsaap-icon-black.webp"
                                        alt="WhatsApp Icon"
                                        width={32}
                                        height={32}
                                        className="h-full w-full object-contain transition-all"
                                    />
                                </div>
                                <div className="ml-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        WhatsApp
                                    </p>
                                    <p className="text-lg font-bold text-gray-900 group-hover:text-emerald-600">
                                        052 838 9414
                                    </p>
                                </div>
                            </a>

                            {/* Email Card */}
                            <a
                                href="mailto:info@envirocleanuae.com"
                                className="group flex items-center rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:b">
                                    <Mail size={28} strokeWidth={2} />
                                </div>
                                <div className="ml-4 min-w-0">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Email Address
                                    </p>
                                    <p className="truncate text-lg font-bold text-gray-900 group-hover:text-primary">
                                        info@envirocleanuae.com
                                    </p>
                                </div>
                            </a>

                            {/* Address Card */}
                            <a
                                href="https://maps.google.com/?q=Empire+Heights+A+Business+Bay+Dubai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center rounded-2xl bg-white p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:b">
                                    <MapPin size={28} strokeWidth={2} />
                                </div>
                                <div className="ml-4">
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                        Location
                                    </p>
                                    <p className="text-sm font-semibold text-gray-900 group-hover:text-primary">
                                        Empire Heights A, 09/13 Business Bay, Dubai
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="md:col-span-3">
                            <ContactForm onlyForms={true} />
                        </div>
                    </div>
                </div>
            </section>

            <ContactCta
                title={'Have a Questions?'}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <GoogleReviewsBlock />
        </>
    );
}
