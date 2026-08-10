import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import ContactForm from "../components/home/ContactForm";
import image1 from "@/public/images/our-story.webp";
import { Mail, MapPin, Phone } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
const slides = [
    {
        id: 1,
        subTitle: "",
        title: "<h1>Contact Us</h1>",
        desc: `Get in touch with our UK bookings team today.`,
        image: image1,
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
                        <div className="md:col-span-2 space-y-7 flex justify-center flex-col">
                            <Link href={'mailto:info@envirocleanuae.com'} className="text-center bg-white shadow-2xl rounded-2xl p-7 space-y-3">
                                <Mail className="mx-auto" size={50} strokeWidth={1} />
                                <h4 className="text-2xl">Email Address</h4>
                                <div>info@envirocleanuae.com</div>
                            </Link>
                            <Link href={"tel:971800368476"} className="text-center bg-white shadow-2xl rounded-2xl p-7 space-y-3">
                                <Phone className="mx-auto" size={50} strokeWidth={1} />
                                <h4 className="text-2xl">Phone nwwo</h4>
                                <div>TOLL FREE- 800 368 476</div>
                            </Link>
                            <Link href={""} className="text-center bg-white shadow-2xl rounded-2xl p-7 space-y-3">
                                <MapPin className="mx-auto" size={50} strokeWidth={1} />
                                <h4 className="text-2xl">Address</h4>
                                <div>Empire Heights A, 09/13 Business Bay Dubai</div>
                            </Link>
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
