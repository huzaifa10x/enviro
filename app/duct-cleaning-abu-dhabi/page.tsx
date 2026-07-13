import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import ContentFlexSection from "../components/ContentFlexSection";
import BenefitsSection from "../components/BenefitsSection";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Link from "next/link";
import ServicesSection from "../components/home/ServicesSection";
import FaqsSection from "../components/FaqsSection";
import { Metadata } from "next";
const slides = [
    {
        id: 1,
        title: "<h1>AC Duct Cleaning Service Abu Dhabi</h1>",
        desc: `Market leaders in Abu Dhabi for duct cleaning. British managed and British trained technicians.`,
        image: "/images/Duct-Cleaning-Service-Dubai.webp",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

const faqs = [
    {
        "id": 1,
        "question": "Why is it important to clean ducts with air conditioning in Abu Dhabi?",
        "answer": "The dusty weather in Abu Dhabi and the constant usage of air conditioning causes dust and allergens to accumulate in duct quickly. Duct cleaning can help improve the quality of air in your home, and will also help make your unit more efficient."
    },
    {
        "id": 2,
        "question": "When should you clean ducts with air conditioning in Abu Dhabi?",
        "answer": "Generally, most people need to clean their duct system every 12-24 months. If you have allergies, pets, or see a significant amount of dust build-up in their home then you can get it clean sooner."
    },
    {
        "id": 3,
        "question": "Does cleaning ducts with air conditioning help with reducing allergies?",
        "answer": "Removing dust and bacteria from your duct will greatly reduce the risk of having respiratory problems. It also reduces the number of allergens in your home and on your furnishings."
    },
    {
        "id": 4,
        "question": "How much does it cost for duct cleaning to be done for air conditioning in Abu Dhabi?",
        "answer": "The price can vary. It depends on the size of the property, the condition of the air conditioning system, and the amount of buildup in the duct work."
    },
    {
        "id": 5,
        "question": "How to choose the right air conditioning duct cleaning service in Abu Dhabi?",
        "answer": "Do your research to find a reputable company to perform the cleaning service. Look for licensed technicians who use modern cleaning equipment. They must have a positive reputation and provide you with a cost estimate before starting work."
    }
];

const title = 'AC Cleaning Service Abu Dhabi - Enviro Clean UAE'
const description = 'AC cleaning service in Abu Dhabi by Enviro Clean UAE. Professional duct and unit cleaning for better air quality and efficient cooling.'

const canonical = 'https://envirocleanuae.com/duct-cleaning-abu-dhabi/'

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
                url: 'images/og-main-banner.webp', // Is path par main meta banner image render karein
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
            'name': 'Duct Cleaning Abu Dhabi',
            'item': 'https://envirocleanuae.com/duct-cleaning-abu-dhabi/',
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
                subHeading={'AC Cleaning Service Abu Dhabi'}
                heading={'Duct Cleaning'}
                content={`<p>Because of the extreme desert climate of Abu Dhabi, clients require reliable air conditioning units that operate at their peak performance. Continued high heat, sand infiltration, and dust build-up are significant contributors to the loss of cooling performance and indoor air quality. </p>
                    <br/>
               <p>Our professional AC duct cleaning Abu Dhabi provides a systematic approach to maintain all critical components of a cooling system. We clean them to remove the contaminants that can lead to premature failure of the system. It provides ongoing comfort while also protecting the client’s investment from the damage caused by the harsh environmental conditions. Such an environment would typically result in accelerated performance degradation and increased operating costs.</p>`}
                imageSrc={'/images/AC-Cleaning-Dubai-Professional-Duct-Cleaning-in-Dubai.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />


            <section className="w-full bg-white py-12 md:py-16 px-6 md:px-0">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <BeforeAfterSlider
                        beforeImage1="/images/recent-work/img5.webp"
                        afterImage1="/images/recent-work/img6.webp"
                    />
                    <div className="flex flex-col space-y-3">
                        <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 leading-tight mb-6">
                            Get AC Duct Cleaning In Abu Dhabi Today
                        </h2>
                        <h3 className="text-lg font-bold">Desert Climate Challenges</h3>
                        <p>In Abu Dhabi, an increasing amount of fine sand and dust buildup causes clogs in the filter. With these clogs, the cooling system must exert a higher effort to operate its components. It expends more energy creating much higher costs to utilize air-conditioning units. It also lowers the ability to cool down homes during peak periods of heat. This is why duct cleaning Abu Dhabi is an essential preventive measure, when you’re living in the city during summers.</p>

                        <Link className="bg-[#333333] px-4 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block" href="https://envirocleanuae.com/duct-cleaning-service-dubai/#headafing">Read More</Link>
                    </div>
                </div>
            </section>

            <GoogleReviewsBlock />
            <ServicesSection />

            <ContentFlexSection
                subHeading={''}
                heading={'Professional AC Duct Cleaning In Abu Dhabi'}
                content={`<p>For AC cleaning Abu Dhabi, we have expert technicians that can perform advanced pressure washing. They do high powered vacuuming and chemical treatments to safely clean all system surfaces of desert debris, mineral buildup and biological growth.</p>
                    <br/>
               <p>Professional inspection will provide wear indicators and possible future failure points before major repair costs are incurred. Our preventive approach protects your investment in equipment. It provides you with a consistent, comfortable indoor climate in extremely hot conditions. Call EnviroClean for AC cleaning Abu Dhabi today and see to the best way we can help you have a cool environment.</p>
               `}
                imageSrc={'/images/about-us-banner.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <BenefitsSection benefitsData={
                [
                    {
                        id: 1,
                        title: "Clean Air",
                        content: "Removes bacteria and mold growth from your indoor air, providing a better indoor quality for healthier homes.",
                        icon: "/images/air-filter.webp"
                    },
                    {
                        id: 2,
                        title: "Low Bills",
                        content: "Reduced energy consumption to lower your electric bill and greater system efficiency.",
                        icon: "/images/cleaning.webp"
                    },
                    {
                        id: 3,
                        title: "No Repairs",
                        content: "Extended equipment life span by reducing the chance of premature equipment failure, which is expensive to repair.",
                        icon: "/images/coils.webp"
                    }
                ]
            } />
            <ContentFlexSection
                subHeading={''}
                heading={'Time To Get Your AC Duct Cleaned'}
                content={`
                    <h3 class='font-bold'>Dirt & Debris Are Visible</h3>
                    <p class='my-6'>If you notice accumulating dust on top of your indoor unit and on the outside of the condenser, it’s the first sign. This indicates that cleaning services will be helpful in removing these contaminants before they start to block off any air flow or cause damage to the cooling performance even further.</p>
                    <h3 class='font-bold'>Less effective cooling</h3>
                    <p>When your air conditioning unit can’t keep the temperature acceptable even while it’s running all the time. This means it needs professional cleaning to get rid of any obstructions in the coils or channels right away.</p>`}
                imageSrc={'/images/Sanitisation.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <ContactCta
                title={'Duct Cleaning'}
                desc={`#1 Duct cleaning in Dubai & Abu Dhabi. Enviroclean AC have serviced more than 30,000 happy customers.`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <section className="bg-secondary">
                <FaqsSection faqs={faqs} />
            </section>
            <ContactForm />
        </>
    );
}
