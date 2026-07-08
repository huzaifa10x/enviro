import Image from "next/image";
import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import { Metadata } from "next";
const slides = [
    {
        id: 1, title: "About Us",
        desc: `✅  More than 180 – 5-star Google reviews  ✅  Trained   ✅  Insured`,
        image: "/images/our-story.jpeg",
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

export default function Story() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="bg-[#f0fff7] py-6 w-full">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-urbanist font-bold text-center">Enviroclean – HVAC Services</h2>
                    <div className="grid md:grid-cols-2 md:mt-12 gap-12">
                        <div className="">
                            <h2 className="text-4xl font-urbanist font-bold mb-6">Enviroclean Top Rated Air Duct Cleaning Service provider</h2>
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
                            <Image alt="our-story-hvac-service" className="rounded-2xl object-cover" fill src="/images/image00421-min.jpeg" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between">
                            <div>
                                <Image src={'/images/wipes.png'} alt='wipes' width={50} height={50} />
                                <h3 className="text-2xl font-urbanist font-bold text-black my-3">Healthier Environment</h3>
                                <p className="font-extralight text-[#333333] leading-relaxed">AC cleaning will significantly improve your indoor air quality.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100/50 flex flex-col justify-between">
                            <div>
                                <Image src={'/images/wipes.png'} alt='wipes' width={50} height={50} />
                                <h3 className="text-2xl font-urbanist font-bold text-black my-3">Odour Elimination</h3>
                                <p className="font-extralight text-[#333333] leading-relaxed">Everyone wants and deserves an odour-free home.</p>
                            </div>
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
