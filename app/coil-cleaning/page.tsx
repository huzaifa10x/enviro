import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import CoilCleaningService from "./CoilCleaningService";
import WhyChooseCoilCleaning from "./WhyChooseCoilCleaning";
import EcoFriendlyServices from "./EcoFriendlyServices";
import ServicesSection from "../components/home/ServicesSection";
import SustainabilityCommitment from "./SustainabilityCommitment";
import CoilCleaningFAQ from "./CoilCleaningFAQ";
import BenefitsSection from "../components/BenefitsSection";
import { Metadata } from "next";
const slides = [
    {
        id: 1,
        title: "<h1>AC Coil Cleaning in Dubai/h1<>",
        desc: `✔ Operates 24/7 ✔ Competitive Pricing ✔ Trained and Insured`,
        image: "/images/coil-cleaning.jpeg",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

const title = 'AC Coil Cleaning Dubai | Ac Coil Cleaning Services'
const description = 'Professional AC coil cleaning services in Dubai to improve cooling efficiency & air quality. Book expert AC maintenance today!'
const canonical = 'https://envirocleanuae.com/coil-cleaning'
export const metadata: Metadata = {
    // Primary Meta Tags
    title: title,
    description: description,
    alternates: {
        canonical: canonical, // Aapka main production domain url
    },

    // Robots Rules (Aapke screen me missing dikha raha tha, yahan index/follow explicit lagaya hai)
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
                url: 'images/og-main-banner.jpg', // Is path par main meta banner image render karein
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
        images: ['https://envirocleanuae.com/images/og-main-banner.jpg'],
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
            'name': 'Coil Cleaning',
            'item': 'https://envirocleanuae.com/coil-cleaning',
        },
    ],
}

export default function CoilCleaning() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <CoilCleaningService />
            <WhyChooseCoilCleaning />
            <BenefitsSection
                subTitle={'LEARN ABOUT BENEFITS'}
                title={`<h2>Benefits of our <span class='text-primary'> AC Coil Cleaning Services</span></h2>`}
                bottomLine={''}
                benefitsData={
                    [
                        {
                            id: 1,
                            title: "HEALTHIER LIVING ENVIRONMENT",
                            content: "Coil cleaning will significantly improve your indoor air quality, helping you to enjoy a cleaner, healthier living environment. Coil cleaning in Dubai & Abu Dhabi.",
                            icon: "/images/air-filter.png"
                        },
                        {
                            id: 2,
                            title: "REDUCED EXPOSURE TO ALLERGENS",
                            content: "Living with allergies can be difficult, but you can minimise your exposure to those allergens that cause you to suffer. Coil cleaning removes many of the most common allergens from the coil, allowing the cold air to pass through freely.",
                            icon: "/images/cleaning.png"
                        },
                        {
                            id: 3,
                            title: "ENERGY BILLS",
                            content: "Coil cleaning will significantly reduce the cost of your energy bills. If your coils are blocked then your AC system is working twice as hard to cool the property. Coil cleaning Dubai & Abu Dhabi.",
                            icon: "/images/coils.png"
                        }
                    ]
                }
            />
            <EcoFriendlyServices />
            <GoogleReviewsBlock />
            <ServicesSection />
            <SustainabilityCommitment />
            <CoilCleaningFAQ />
            <ContactCta
                title={'Contact Us Today to Get Started'}
                desc={`<p class="mb-3">Choose EnviroClean Coil Cleaning as your trusted partner in achieving a more sustainable and healthier indoor environment in Dubai. Experience the benefits of eco-friendly and efficient coil cleaning with a team dedicated to excellence and environmental responsibility</p>
                    <p class="mb-3">Ready to embrace eco-friendly and efficient coil cleaning for your HVAC system?</p>
                    <p class="mb-3">Contact EnviroClean Coil Cleaning today and let us be your trusted partner in achieving a more sustainable and healthier indoor environment.</p>`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <ContactForm />
        </>
    );
}
