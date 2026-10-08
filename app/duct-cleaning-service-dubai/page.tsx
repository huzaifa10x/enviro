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
const slides = [
    {
        id: 1,
        title: "<h1>Duct Cleaning Service Dubai</h1>",
        desc: `Market leaders in Dubai & Abu Dhabi for duct cleaning. British managed and British trained technicians.`,
        image: "/images/Duct-Cleaning-Service-Dubai.webp",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

const title = 'Duct Cleaning Service Dubai - Enviro Clean'
const description = 'Duct Cleaning Service Dubai Market leaders in Dubai & Abu Dhabi for duct cleaning. British managed and British trained technicians. Call Now Duct Cleaning Dubai & Abu Dhabi Duct Cleaning Due to the intense heat and sun in the thriving city of Dubai, air conditioning systems are a necessary component of daily life for most'
const canonical = 'https://envirocleanuae.com/duct-cleaning-service-dubai/'

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
            'name': 'Duct Cleaning Service Dubai',
            'item': 'https://envirocleanuae.com/duct-cleaning-service-dubai/',
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
                subHeading={'Duct Cleaning Dubai & Abu Dhabi'}
                heading={'Duct Cleaning'}
                content={`<p>Due to the intense heat and sun in the thriving city of Dubai, air conditioning systems are a necessary component of daily life for most people living here. Central to the efficiency and effectiveness of these systems is the cleanliness of their air ducts, which circulate cool air throughout homes and workplaces. The accumulation of dust, allergens, and pollutants in air ducts over the course of time can harm the efficiency of the HVAC system and air quality.</p>
                    <br/>
               <p>Indoor air quality plays an important role in maintaining a healthy and comfortable atmosphere. To ensure that both of these goals are met, the HVAC system should operate effectively while also being maintained in a proper fashion. Dust, allergens, mould and other contaminants may build up over the years and debilitate the performance of the HVAC system and overall air quality.</p>`}
                imageSrc={'/images/Duct-Cleaning34.webp'}
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
                            Why is Cleaning Your Ducts So Important
                        </h2>
                        <p>Regular duct cleaning service is essential for several reasons, all of which contribute to a cleaner, healthier, and more efficient indoor environment. Main reasons are:</p>
                        <div className="text-lg font-bold">Improved indoor air quality:</div>

                        <p>Air ducts can accumulate dust, pollens, mold, bacteria and other pollutants over time and transfer them to your home or office. Hence, regular duct cleaning helps eliminate the dangerous pollutants present in the air and enhances the air quality resulting in a healthy environment for the consumers.</p>
                        <Link className="bg-[#333333] px-4 py-2 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition inline-block" href="https://envirocleanuae.com/duct-cleaning-service-dubai/#headafing">Read More</Link>
                    </div>
                </div>
            </section>

            <GoogleReviewsBlock />


            <ContentFlexSection
                subHeading={''}
                heading={'Whom Can You Hire For Duct Cleaning In Dubai?'}
                content={`<p> Servicing Dubai, EnviroClean is a recognized AC and duct cleaning company that offers professional and eco-friendly services to residential and commercial clients in Dubai.</p>
                    <br/>
               <p>Since its establishment, EnviroClean has become a preferred choice for businesses and homeowners in Dubai seeking professional duct and AC cleaning services as it focuses on creating a hygienic, safe, and comfortable indoor environment.</p>
               `}
                imageSrc={'/images/Sanitisation.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <BenefitsSection
                subTitle={'LEARN ABOUT BENEFITS'}
                title={`<h2>Benefits of our Duct Cleaning</span></h2>`}
                bottomLine={'Duct cleaning removes dust, debris and mold from your AC system, helping you and your family breathe cleaner air.Healthier Living Environment'}
                benefitsData={
                    [
                        {
                            id: 1,
                            title: "Healthier Living Environment",
                            content: "Duct cleaning will significantly improve your indoor air quality, helping you to enjoy a cleaner, healthier living environment for you and your family.",
                            icon: "/images/air-filter.webp"
                        },
                        {
                            id: 2,
                            title: "Reduced Exposure To Allergens",
                            content: "Living with allergies can be debilitating, but you can minimize your exposure to those allergens that cause you to suffer. Our AC duct cleaning service removes many of the most common allergens from within your ductwork. This includes dirt, dust, debris and organic matter like pet hair.",
                            icon: "/images/cleaning.webp"
                        },
                        {
                            id: 3,
                            title: "ENERGY BILLS",
                            content: "Everyone wants and deserves an odour-free home. Air fresheners mask bad smells, but duct cleaning can deal with the source of the issue, enabling you and your family to enjoy your home without the fear of unpleasant aromas.",
                            icon: "/images/coils.webp"
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
                beforeImage1="/images/recent-work/imgi_16_0005.webp"
                afterImage1="/images/recent-work/imgi_17_00054.webp"
                beforeImage2="/images/recent-work/imgi_19_12qwq.webp"
                afterImage2="/images/recent-work/imgi_18_12qw.webp"
            />
            <ContentFlexSection
                subHeading={''}
                heading={'Why Choose EnviroClean’s Duct Cleaning Service'}
                content={`
                    <div class='font-bold'>Expertise and experience: </div>
                    <p class='my-6'>EnviroClean employs a team of highly skilled and experienced Dubai technicians who are well-versed in the intricacies of various HVAC systems. Their proficiency enables them to offer comprehensive and effective duct cleaning services. We guarantee that your system performs to its maximum capacity.</p>
                    `}
                imageSrc={'/images/Sanitisation.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <ContactForm />
        </>
    );
}
