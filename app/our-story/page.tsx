import Image from "next/image";
import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import { Metadata } from "next";
const slides = [
    {
        id: 1, title: `<h1>About Us</h1>`,
        desc: `✅  More than 180 – 5-star Google reviews  ✅  Trained   ✅  Insured`,
        image: "/images/our-story.webp",
        actionTitle: 'Call Us',
        actionUrl: 'tel:+971800368476'
    },
];
const title = 'Our Story - Enviro Clean UAE'
const description = 'About Us ✅ More than 180 - 5-star Google reviews ✅ Trained ✅ Insured Call Now Enviroclean - HVAC Services Enviroclean Top Rated Air Duct Cleaning Service provider Welcome to Enviroclean, a distinguished premier Air Duct Cleaning Service in Dubai and home maintenance service provider. Established in 2012, we have swiftly earned an exceptional reputation,'
const canonical = 'https://envirocleanuae.com/our-story'

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
            'name': 'Our Story',
            'item': 'https://envirocleanuae.com/our-story',
        },
    ],
}

export default function Story() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="bg-[#f0fff7] py-20 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="md:text-4xl text-2xl font-urbanist font-bold text-center">Enviroclean – HVAC Services</h2>
                    <div className="grid md:grid-cols-2 md:mt-12 gap-12 px-6">
                        <div className="">
                            <h2 className="md:text-4xl text-3xl font-urbanist md:text-start text-center font-bold my-6">Enviroclean Top Rated Air Duct Cleaning Service provider</h2>
                            <p className="font-extralight leading-6 text-[#333333]">Welcome to Enviroclean, a distinguished premier Air Duct Cleaning Service in Dubai and home maintenance service provider. Established in 2012, we have swiftly earned an exceptional reputation, earning high recommendations from our valued clientele.</p>
                            <br />
                            <p className="font-extralight leading-6 text-[#333333]">In 2015, recognizing the demand for our top-notch services, we expanded our operations to the vibrant cities of Dubai. Managed by a team of seasoned British expats, Enviroclean is dedicated to delivering unparalleled quality service marked by professionalism and reliability you can depend on.</p>
                            <br />
                            <p className="font-extralight leading-6 text-[#333333]">At Enviroclean, we take pride in being recognized as the foremost AC cleaning service in the UAE. Our commitment is to exceed your expectations, going above and beyond to ensure your satisfaction.</p>
                            <br />
                            <p className="font-extralight leading-6 text-[#333333]">Specializing in Duct Cleaning in Dubai, disinfection, coil cleaning, upholstery cleaning, carpet cleaning and home maintenance, our technicians boast over 12 years of expertise, each fully certified to guarantee excellence in every service we provide.</p>
                            <br />
                            <p className="font-extralight leading-6 text-[#333333]">Our unwavering dedication to offering a premium service that stands unmatched in the UAE sets us apart. Equipped with the latest cleaning technology and cutting-edge disinfection methods, we ensure our customers achieve optimal results.</p>
                            <br />
                            <p className="font-extralight leading-6 text-[#333333]">Over the past 9 years, Enviroclean has served more than 5000 delighted customers, spanning both residential and commercial sectors throughout Dubai and Abu Dhabi.</p>
                            <br />
                            <p className="font-extralight leading-6 text-[#333333]">Join our satisfied clientele and experience the epitome of AC cleaning and maintenance services with Enviroclean.</p>
                            <br />
                        </div>
                        <div className="relative min-h-90 h-full w-full">
                            <Image alt="our-story-hvac-service" className="rounded-2xl object-cover" fill src="/images/image00421-min.webp" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 md:mt-12 px-6">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between">
                            <div>
                                <Image src={'/images/wipes.webp'} alt='wipes' width={50} height={50} />
                                <h4 className="text-2xl font-urbanist font-bold text-black my-3">Healthier Environment</h4>
                                <p className="font-extralight text-[#333333] leading-relaxed">AC cleaning will significantly improve your indoor air quality.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between">
                            <div>
                                <Image src={'/images/wipes.webp'} alt='wipes' width={50} height={50} />
                                <h4 className="text-2xl font-urbanist font-bold text-black my-3">Odour Elimination</h4>
                                <p className="font-extralight text-[#333333] leading-relaxed">Everyone wants and deserves an odour-free home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 w-full">
                <div className="max-w-7xl mx-auto space-y-10">
                    <h2 className="text-4xl font-urbanist font-bold text-center">Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-[#f0fff7] p-5 space-y-4 text-center">
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src={'/images/our-team/e2.webp'}
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="font-semibold">Gareth Evans – Managing Director</div>
                            <p className="text-black/80 text-sm">With over a decade of industry experience, Gareth founded Enviroclean with a commitment to raising standards in AC cleaning across the UAE. Since launching in the UK in 2015 and expanding to Dubai in 2018, he has built the company around quality workmanship, transparency, and exceptional customer service. Gareth oversees the company’s strategy, growth, and customer experience, ensuring every project reflects Enviroclean’s commitment to excellence.
                            </p>
                        </div>
                        <div className="bg-[#f0fff7] p-5 space-y-4 text-center">
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src={'/images/our-team/e1.webp'}
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="font-semibold">Steve – Commercial Manager</div>
                            <p className="text-black/80 text-sm">Steve leads our commercial division, working closely with schools, hospitals, offices, warehouses, retail spaces, and property management companies throughout the UAE. He specialises in developing tailored AC cleaning and maintenance solutions for businesses, ensuring projects are delivered efficiently, professionally, and with minimal disruption to daily operations. His focus is on building long-term partnerships and maintaining the highest standards of service.
                            </p>
                        </div>
                        <div className="bg-[#f0fff7] p-5 space-y-4 text-center">
                            <div className="relative w-full h-[400px]">
                                <Image
                                    src={'/images/our-team/e3.webp'}
                                    alt=""
                                    fill
                                />
                            </div>
                            <div className="font-semibold">Patrick – Operations Manager</div>
                            <p className="text-black/80 text-sm">Patrick is responsible for the day-to-day operations of Enviroclean, ensuring every project runs smoothly from booking through to completion. He manages our field teams, coordinates schedules, maintains quality control, and ensures every technician follows our strict operating procedures. His hands-on approach and attention to detail help deliver the high standards our clients expect on every job.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCta
                title={'Call Us Today to Get Started'}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <ContactForm />
        </>
    );
}
