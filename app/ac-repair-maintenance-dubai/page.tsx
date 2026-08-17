import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import CoilCleaningService from "./OurAcRepairServices";
import WhyChooseCoilCleaning from "./WhyEnviroCleaning";
import EcoFriendlyServices from "./ImportantPositioning";
import ServicesSection from "../components/home/ServicesSection";
import SustainabilityCommitment from "./SustainabilityCommitment";
import CoilCleaningFAQ from "./AcRepairFAQ";
import BenefitsSection from "../components/BenefitsSection";
import { Metadata } from "next";

// Image Imports
import acRepairSlideImg from "@/public/images/423142134123.webp";
import airFilterIcon from "@/public/images/air-filter.webp";
import cleaningIcon from "@/public/images/cleaning.webp";
import coilsIcon from "@/public/images/coils.webp";
import AcProblemsWeDiagnose from "./AcProblemsWeDiagnose";
import AcRepairFAQ from "./AcRepairFAQ";
import WhyEnviroCleaning from "./WhyEnviroCleaning";

const slides = [
    {
        id: 1,
        title: "<h1>AC Repair & Fault Diagnosis in Dubai</h1>",
        desc: `Professional diagnosis, repair and replacement of residential AC systems. If your AC isn’t cooling properly, is leaking, making unusual noises or has stopped working, Enviroclean can diagnose the problem and provide the correct repair solution.`,
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

const title = 'AC Coil Cleaning Dubai | Ac Coil Cleaning Services';
const description = 'Professional AC coil cleaning services in Dubai to improve cooling efficiency & air quality. Book expert AC maintenance today!';
const canonical = 'https://envirocleanuae.com/coil-cleaning';

export const metadata: Metadata = {
    // Primary Meta Tags
    title: title,
    description: description,
    alternates: {
        canonical: canonical, // Production domain url
    },

    // Robots Rules
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
                url: 'images/og-main-banner.webp',
                width: 1200,
                height: 630,
                alt: canonical,
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
                title={`<h2>HOW IT WORKS</span></h2>`}
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
                            title: "DIAGNOSIS & RECOMMENDATION",
                            content: "We identify the likely fault and explain whether the system requires repair, component replacement, or further investigation.",
                            icon: ' /images/icons/DIAGNOSIS-RECOMMENDATION.webp'
                        },
                        {
                            id: 4,
                            title: "RECEIVE YOUR QUOTATION",
                            content: "Where repair work is required, Enviroclean provides a clear quotation before proceeding with chargeable repair works.",
                            icon: '/images/icons/RECEIVE-YOUR-QUOTATION.webp'
                        },
                        {
                            id: 5,
                            title: "REPAIR & RECOMMISSION",
                            content: "Once approved, our technicians complete the repair or replacement and test the AC system to confirm correct operation.",
                            icon: '/images/icons/REPAIR-RECOMMISSION.webp'
                        }
                    ]
                }
            />
            <WhyEnviroCleaning />
            <EcoFriendlyServices />
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