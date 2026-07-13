import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import ContentFlexSection from "../components/ContentFlexSection";
import PackageIncludes from "../components/PackageIncludes";
import BenefitsSection from "../components/BenefitsSection";
import DisinfectionSection from "../components/DisinfectionSection";
import RecentWork from "../components/home/RecentWork";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import { Metadata } from "next";
const slides = [
    {
        id: 1,
        title: "<h1>AC Cleaning Dubai & Abu Dhabi</h1>",
        desc: `AC cleaning Dubai & Abu Dhabi. When it comes to AC cleaning we are the market leaders. Enviroclean have services over 25,000 AC units in Dubai & Abu Dhabi.`,
        image: "/images/ac-cleaning-dubai-1-scaled.webp",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];


const title = 'AC Cleaning - Enviro Clean UAE'
const description = 'AC Cleaning & Servicing in Dubai & Abu Dhabi. British Managed & British Trained Technicians. Market Leaders In AC Cleaning.'
const canonical = 'https://envirocleanuae.com/accleaning-servicing'

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
            'name': 'Accleaning Serving',
            'item': 'https://envirocleanuae.com/accleaning-serving',
        },
    ],
}

export default function AccleaningServicing() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <ContentFlexSection
                subHeading={'AC Cleaning Dubai & Abu Dhabi'}
                heading={'AC Cleaning Dubai & Abu Dhabi'}
                content={`Enviroclean use the best ac cleaning equipment in Dubai & Abu Dhabi. Our AC cleaning machine cleans to the very back of your AC duct, cleaning dirt, dust, mould and odours along the way. We will photograph your internal ducts and show you the condition before and after we have finished the AC cleaning. After a forward and backwards clean, we will disinfect your ducts with our microbial disinfection spray after we have completed the ac cleaning, this kills any bacteria and mould. Ac cleaning clears the way for fresher, healthier, cleaner air throughout your home. We provide the best AC cleaning service in Dubai & Abu Dhabi.`}
                imageSrc={'/images/Sanitisation.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <ContentFlexSection
                subHeading={'Full AC Cleaning & Servicing Package'}
                heading={'Ac Cleaning & Ac Servicing'}
                content={`Our full ac cleaning package ensures your whole system from front to back is cleaned and disinfected. After we have cleaned your AC we carry out a full service to ensure the unit is running at full capacity.`}
                imageSrc={'/images/AC-Cleaning-Dubai-Professional-Duct-Cleaning-in-Dubai.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'left'}
            />
            <PackageIncludes />
            <BenefitsSection
                subTitle={'Learn About Ac Cleaning Benefits'}
                title={`<h2>Benefits of AC Cleaning</h2>`}
                bottomLine={''}
                benefitsData={
                    [
                        {
                            id: 1,
                            title: "Healthier Living Environment",
                            content: "Ac cleaning will significantly improve your indoor air quality, helping you to enjoy a cleaner, healthier living environment. Ac cleaning services in Dubai & Abu Dhabi",
                            icon: "/images/air-filter.webp"
                        },
                        {
                            id: 2,
                            title: "Reduced Exposure To Allergens",
                            content: "Living with allergies can be debilitating, but you can minimise your exposure to those allergens that cause you to suffer. AC duct cleaning service removes many of the most common allergens from within your ductwork. This includes dirt, dust, debris and organic matter like pet hair. AC cleaning Dubai & Abu Dhabi.",
                            icon: "/images/cleaning.webp"
                        },
                        {
                            id: 3,
                            title: "Odour Elimination",
                            content: "Everyone wants and deserves an odour-free home. Air fresheners mask bad smells, but AC cleaning can deal with the source of the issue, enabling you and your family to enjoy your home without the fear of unpleasant aromas.",
                            icon: "/images/coils.webp"
                        }
                    ]
                } />
            <DisinfectionSection />
            <RecentWork />
            <ContactCta
                title={'AC Cleaning- British Managed & Trained'}
                desc={`Best AC cleaning in Dubai & Abu Dhabi. We have serviced more than 25,000 customers in the last 5 years. Premium AC Cleaning which cant be matched.`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <GoogleReviewsBlock />
            <ContactForm />
        </>
    );
}
