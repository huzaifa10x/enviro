import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import CoilCleaningService from "./OurAcRepairServices";
import ServicesSection from "../components/home/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";
import { Metadata } from "next";

import acRepairSlideImg from "@/public/images/423142134123.webp";
import AcProblemsWeDiagnose from "./AcProblemsWeDiagnose";
import AcRepairFAQ from "./AcRepairFAQ";
import WhyEnviroCleaning from "./WhyEnviroCleaning";

const slides = [
    {
        id: 1,
        title: "<h1>AC Diagnostic Inspection</h1>",
        desc: `The inspection fee is deducted from the final invoice when approved repair works are completed by Enviroclean.`,
        image: acRepairSlideImg,
        actionTitle: 'Book AC Inspection',
        actionUrl: 'tel:+971800368476'
    },
    {
        id: 2,
        title: "<h3>AC Diagnostic Inspection – AED 250</h3>",
        desc: `The inspection fee is deducted from the final invoice when approved repair works are completed by Enviroclean.`,
        image: acRepairSlideImg,
        actionTitle: 'WhatsApp Us',
        actionUrl: 'tel:+971800368476'
    },
];

const title = 'AC Repair Maintenance in Dubai - Enviro Clean UAE';
const description = 'AC repair and maintenance in Dubai by Enviro Clean UAE. Get reliable AC servicing, cleaning, and maintenance to keep your cooling system running efficiently.';
const canonical = 'https://envirocleanuae.com/ac-repair-maintenance-dubai/';

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

    openGraph: {
        title: title,
        description: description,
        url: canonical,
        siteName: 'EnviroClean UAE',
        images: [
            {
                url: 'images/og-main-banner.webp',
                width: 1200,
                height: 630,
                alt: canonical,
            },
        ],
        locale: 'en_AE',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai',
        description: 'EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC\'s performance and efficiency.',
        images: ['https://envirocleanuae.com/images/og-main-banner.webp'],
    },
};

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
            'name': 'Coil Cleaning',
            'item': 'https://envirocleanuae.com/coil-cleaning',
        },
    ],
};

export default function CoilCleaning() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <AcProblemsWeDiagnose />
            <CoilCleaningService />
            <BenefitsSection
                subTitle={''}
                title={`<h2>HOW IT WORKS</h2>`}
                bottomLine={''}
                benefitsData={
                    [
                        {
                            id: 1,
                            title: "BOOK AN INSPECTION",
                            content: "Contact Enviroclean and explain the AC problem you’re experiencing to schedule an evaluation.",
                            icon: '/images/icons/BOOK-AN-INSPECTION.webp'
                        },
                        {
                            id: 2,
                            title: "TECHNICIAN DIAGNOSIS",
                            content: "An HVAC technician attends the property and carries out a systematic inspection of the AC system.",
                            icon: '/images/icons/TECHNICIAN-DIAGNOSIS.webp'
                        },
                        {
                            id: 3,
                            title: "IDENTIFICATION AND SUGGESTION",
                            content: "We recognize the possible problem in the system and describe if we need to fix the system, change some parts of it or explore further.",
                            icon: '/images/icons/DIAGNOSIS-RECOMMENDATION.webp'
                        },
                        {
                            id: 4,
                            title: "GET A QUOTE",
                            content: "In order to perform repair work, Enviroclean gives its customers a complete quotation for the repair work.",
                            icon: '/images/icons/RECEIVE-YOUR-QUOTATION.webp'
                        },
                        {
                            id: 5,
                            title: "REPAIR AND TESTING",
                            content: "If authorization was received, our engineers carry out the repairs or replace necessary part of the system and check to see if it works properly.",
                            icon: '/images/icons/REPAIR-RECOMMISSION.webp'
                        }
                    ]
                }
            />
            <WhyEnviroCleaning />
            {/* <EcoFriendlyServices /> */}
            <GoogleReviewsBlock />
            <ServicesSection />
            <AcRepairFAQ />
            <ContactCta
                title={'AC Not Working Properly?'}
                desc={`<p class="mb-3">Don’t wait for a small AC problem to become a major repair.
                    Book an Enviroclean AC diagnostic inspection and let our HVAC team identify the cause.
                    Diagnostic Inspection: AED 250</p>`}
                button1Text={'Book an Inspection'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <ContactForm />
        </>
    );
}