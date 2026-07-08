import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import ContentFlexSection from "../components/ContentFlexSection";
import BenefitsSection from "../components/BenefitsSection";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import ServicesSection from "../components/home/ServicesSection";
import CoilCleaningFAQ from "./CoilCleaningFAQ";
import { Metadata } from "next";
const slides = [
    {
        id: 1,
        title: "AC Sanitation Service For A Clean Home",
        desc: `Market leaders in Dubai & Abu Dhabi for duct cleaning. British managed and British trained technicians.`,
        image: "/images/Sanitisation.webp",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

const title = 'AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai'
const description = "EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC's performance and efficiency. Get a free quote today!"
const canonical = 'https://envirocleanuae.com/ac-sanitisation'

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
                url: 'https://envirocleanuae.com/images/og-main-banner.jpg', // Is path par main meta banner image render karein
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
        images: ['https://envirocleanuae.com/images/og-main-banner.jpg'],
    },
}

export default function AccleaningServicing() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <ContentFlexSection
                subHeading={'AC Sanitisation Dubai & Abu Dhabi'}
                heading={'Get Fresh Indoor Air With Our Professional AC Sanitation Service'}
                content={`<p> Enjoy a higher level of indoor comfort that our AC sanitation can do for you. Our trained staff uses cleaning technologies that eliminate dust and allergens that detract from the cooling performance of your HVAC.</p>
                    <br/>
               <p>With sanitation, energy efficiency and long HVAC life are not compromised by cleaning. We have cleaned and disinfected all components so that your home is fresher and more comfortable. Choose EnviroClean and have a fresh place. You can trust us to take care of your cooling system.</p>`}
                imageSrc={'/images/coil-cleaning-2.jpeg'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />

            <ContentFlexSection
                subHeading={''}
                heading={'Reasons For Selecting EnviroClean AC Sanitation Services'}
                content={`
                <div class='font-bold'>Knowledgeable & Reliable Technicians</div>
                    <p>Our trained technicians use safe and effective methods. We offer results that last, making your AC cleaner, operate smoothly, and more efficiently.</p>
                    <br/>
                <div class='font-bold'>Next-Generation Deep-Cleaning Technology</div>
                <p>We use industrial strength tools that target unwanted contaminates. They provide comfort inside your home and reduce airborne irritants. We offer peace of mind to your family.</p>`}
                imageSrc={'/images/about-us-banner.jpg'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'left'}
            />

            <BenefitsSection benefitsData={
                [
                    {
                        id: 1,
                        title: "Healthier Living Environment",
                        content: "Coil cleaning will significantly improve your indoor air quality, helping you to enjoy a cleaner, healthier living environment. Coil cleaning in Dubai & Abu Dhabi.",
                        icon: "/images/air-filter.png"
                    },
                    {
                        id: 2,
                        title: "Reduced Exposure To Allergens",
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
            } />

            <ContentFlexSection
                subHeading={''}
                heading={'Select Our AC Sanitation'}
                content={`
                    <div class='font-bold text-2xl'>Better Indoor Air Quality</div>
                    <br/>
                    <p> Get rid of allergens and bacteria to create cleaner and fresher air for every room.</p>
                    <br/>
                    <div class='font-bold text-2xl'>Improved AC Cooling Performance</div>
                    <br/>
                    <p> A sanitized AC cools faster and uses less energy. It will perform the same in every season.</p>
                    <br/>
                    <div class='font-bold text-2xl'>Longer Life For Your AC</div>
               `}
                imageSrc={'/images/Sanitisation.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />

            <GoogleReviewsBlock />
            <ServicesSection />
            <ContactCta
                title={'Duct Cleaning'}
                desc={`#1 Duct cleaning in Dubai & Abu Dhabi. Enviroclean AC have serviced more than 30,000 happy customers.`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />

            <CoilCleaningFAQ />
            <ContactForm />
        </>
    );
}
