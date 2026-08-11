import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import ContentFlexSection from "../components/ContentFlexSection";
import BenefitsSection from "../components/BenefitsSection";
import DisinfectionSection from "../components/DisinfectionSection";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Link from "next/link";
import { Metadata } from "next";

// Image Imports
import ductCleaningSlideImg from "@/public/images/Duct-Cleaning-Service-Dubai.webp";
import ductCleaning34Img from "@/public/images/Duct-Cleaning34.webp";
import sanitisationImg from "@/public/images/Sanitisation.webp";
import airFilterIcon from "@/public/images/air-filter.webp";
import cleaningIcon from "@/public/images/cleaning.webp";
import coilsIcon from "@/public/images/coils.webp";

// Recent Work / Before After Images
import beforeImg1 from "@/public/images/recent-work/img5.webp";
import afterImg1 from "@/public/images/recent-work/img6.webp";
import beforeImg2 from "@/public/images/recent-work/imgi_16_0005.webp";
import afterImg2 from "@/public/images/recent-work/imgi_17_00054.webp";
import beforeImg3 from "@/public/images/recent-work/imgi_19_12qwq.webp";
import afterImg3 from "@/public/images/recent-work/imgi_18_12qw.webp";

const slides = [
    {
        id: 1,
        title: "<h1>Duct Cleaning Service Dubai</h1>",
        desc: `Market leaders in Dubai & Abu Dhabi for duct cleaning. British managed and British trained technicians.`,
        image: ductCleaningSlideImg,
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

const title = 'Duct Cleaning Service Dubai - Enviro Clean';
const description = 'Duct Cleaning Service Dubai Market leaders in Dubai & Abu Dhabi for duct cleaning. British managed and British trained technicians. Call Now Duct Cleaning Dubai & Abu Dhabi Duct Cleaning Due to the intense heat and sun in the thriving city of Dubai, air conditioning systems are a necessary component of daily life for most';
const canonical = 'https://envirocleanuae.com/duct-cleaning-service-dubai/';

export const metadata: Metadata = {
    // Primary Meta Tags
    title: title,
    description: description,
    alternates: {
        canonical: canonical,
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
            'name': 'Duct Cleaning Service Dubai',
            'item': 'https://envirocleanuae.com/duct-cleaning-service-dubai/',
        },
    ],
};

export default function AccleaningServicing() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <ContentFlexSection
                subHeading={'Duct Cleaning Dubai & Abu Dhabi'}
                heading={'Duct Cleaning'}
                content={`<p> Due to the intense heat and sun in the thriving city of Dubai, air conditioning systems are a necessary component of daily life for most people living here. Central to the efficiency and effectiveness of these systems is the cleanliness of their air ducts, which circulate cool air throughout homes and workplaces. Over time, these ducts can accumulate dust, allergens, and other contaminants that negatively impact the air quality and energy efficiency of your HVAC system.</p>
                    <br/>
               <p> Indoor air quality and comfort are crucial aspects of maintaining a healthy and pleasant living or working environment. Central to achieving these objectives is the proper functioning and cleanliness of your HVACsystem, including its ductwork. Over time, air ducts can accumulate dust, allergens, mold, and othercontaminants that can adversely affect the performance of your system and the quality of air you breathe.This is where professional duct cleaning services come into play </p>`}
                imageSrc={ductCleaning34Img}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />

            <section className="w-full bg-white py-12 md:py-16 px-6 md:px-0">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <BeforeAfterSlider
                        beforeImage1={beforeImg1}
                        afterImage1={afterImg1}
                    />
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 leading-tight mb-6">
                            Why is Cleaning Your Ducts So Important
                        </h2>
                        <p>Regular duct cleaning service is essential for several reasons, all of which contribute to a cleaner, healthier, and more efficient indoor environment. Some of the key reasons include:</p>
                        <div className="text-lg font-bold">Improved indoor air quality:</div>

                        <p>Over time, air ducts accumulate dust, allergens, mold, bacteria, and other contaminants that can be circulated throughout your home or office. Regular duct cleaning helps to remove these pollutants, resulting in improved air quality and a healthier environment for occupants.</p>
                        <Link className="bg-[#333333] px-4 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block" href="/duct-cleaning-service-dubai/#headafing">Read More</Link>
                    </div>
                </div>
            </section>

            <GoogleReviewsBlock />

            <ContentFlexSection
                subHeading={''}
                heading={'When You Need Duct Cleaning in Dubai, Who Can You Trust?'}
                content={`<p> EnviroClean is a leading AC and duct cleaning company based in Dubai that specializes in providing professional and eco-friendly services to residential and commercial Dubai clients.</p>
                    <br/>
               <p>With a focus on maintaining a clean, healthy, and comfortable indoor environment, EnviroClean has become the go-to choice for homeowners and businesses seeking expert air conditioning and duct cleaning services in the region.</p>
               <p>Some of the Key Features of EnviroClean include:</p>
               `}
                imageSrc={sanitisationImg}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <BenefitsSection
                subTitle={'LEARN ABOUT BENEFITS'}
                title={`<h2>Benefits of our <span class='text-primary'> Duct Cleaning</span></h2>`}
                bottomLine={'Duct cleaning removes dust, debri and mould from your AC system, helping you and your family breathe cleaner air.'}
                benefitsData={
                    [
                        {
                            id: 1,
                            title: "Healthier Living Environment",
                            content: "Duct cleaning will significantly improve your indoor air quality, helping you to enjoy a cleaner, healthier living environment for you and your family.",
                            icon: airFilterIcon
                        },
                        {
                            id: 2,
                            title: "Reduced Exposure To Allergens",
                            content: "Living with allergies can be debilitating, but you can minimise your exposure to those allergens that cause you to suffer. Our AC duct cleaning service removes many of the most common allergens from within your ductwork. This includes dirt, dust, debris and organic matter like pet hair.",
                            icon: cleaningIcon
                        },
                        {
                            id: 3,
                            title: "ENERGY BILLS",
                            content: "Everyone wants and deserves an odour-free home. Air fresheners mask bad smells, but duct cleaning can deal with the source of the issue, enabling you and your family to enjoy your home without the fear of unpleasant aromas.",
                            icon: coilsIcon
                        }
                    ]
                } />
            <ContactCta
                title={'Duct Cleaning'}
                desc={`#1 Duct cleaning in Dubai & Abu Dhabi. Enviroclean AC have serviced more than 30,000 happy customers.`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <DisinfectionSection />
            <BeforeAfterSlider
                showTwo={true}
                beforeImage1={beforeImg2}
                afterImage1={afterImg2}
                beforeImage2={beforeImg3}
                afterImage2={afterImg3}
            />
            <ContentFlexSection
                subHeading={''}
                heading={'Why Choose EnviroClean’s Duct Cleaning Service'}
                content={`
                    <div class='font-bold'>Expertise and experience: </div>
                    <p class='my-6'>EnviroClean employs a team of highly skilled and experienced Dubai technicians who are well-versed in the intricacies of various HVAC systems. Their expertise allows them to provide thorough and efficient duct cleaning services, ensuring that your system operates at its full potential.</p>
                    <div class='font-bold'>State-of-the-art equipment: </div>
                    `}
                imageSrc={sanitisationImg}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <ContactForm />
        </>
    );
}