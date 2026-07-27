import Image from "next/image";
import NavbarCarousel from "./components/NavbarCarousel";
import AboutUs from "./components/home/AboutUs";
import ServicesSection from "./components/home/ServicesSection";
import FAQ from "./components/home/FAQ";
import ContactForm from "./components/home/ContactForm";
import PartnerSlider from "./components/home/PartnerSlider";
import RecentWork from "./components/home/RecentWork";
import Process from "./components/Process";
import GoogleReviewsBlock from "./GoogleReviewsBlock";
import { Metadata } from "next";
import VideosSection from "./components/videosSection";
import RegularACDuctCleaningDubai from "./components/home/RegularACDuctCleaningDubai";
import AboutOurServices from "./components/home/AboutOurServices";
const slides = [
  {
    id: 1, title: `<h1>Dubai AC Duct Cleaning</h1>`,
    desc: `<p>As a British company, we bring expertise and excellence to ensure your<br>indoor air quality is at its best.</p>`,
    image: "/images/home-banner/banner1.webp",
    mobileImage: "/images/home-banner/mbanner1.webp",
    actionTitle: 'Get a Quote',
    actionUrl: 'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'
  },
  {
    id: 2,
    title: `<h6>Cleaner Indoor Air </h6>`,
    desc: `<p>Expert cleaning and caring for the indoor air conditioning system to improve air quality and enhance comfort.</p>`,
    image: "/images/home-banner/banner2.webp",
    mobileImage: "/images/home-banner/mbanner2.webp",
    actionTitle: 'Get a Quote',
    actionUrl: 'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'
  },
  {
    id: 3,
    title: `<h6>Complete System Cleaning</h6>`,
    desc: `<p>Every part of your HVAC system receives a thorough cleaning and complete attention.</p>`,
    image: "/images/home-banner/banner3.webp",
    mobileImage: "/images/home-banner/mbanner3.webp",
    actionTitle: 'Get a Quote',
    actionUrl: 'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'
  },
  {
    id: 4,
    title: `<h6>Total Comfort</h6>`,
    desc: `<p>Professional care will offer a consistently clean indoor air and a reliable cooling system that will function correctly all year.</p>`,
    image: "/images/home-banner/banner4.webp",
    mobileImage: "/images/home-banner/mbanner4.webp",
    actionTitle: 'Get a Quote',
    actionUrl: 'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'
  },
];

const title = 'AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai'
const description = 'EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC\'s performance and efficiency. Get a free quote today!'
const canonical = 'https://envirocleanuae.com/'

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
        url: 'https://envirocleanuae.com/images/og-main-banner.webp',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
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
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <NavbarCarousel contentBottom={false} slides={slides} />
      <AboutUs />
      <ServicesSection />
      <Process />
      <RegularACDuctCleaningDubai />
      <section className="py-16 px-6 md:px-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-gray-600 leading-relaxed space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 font-urbanist">
                To perform regular AC cleaning and maintenance, consider the following steps:
                <div className="border-b-4 border-primary w-full my-4"></div>
              </h2>
              <div className="space-y-5 text-lg">
                <p>
                  Clean or replace filters: Check and clean the filters at least once a month during peak usage seasons. Replace them if they’re damaged or worn out.
                </p>
                <p>
                  Clean the outdoor unit: Remove debris from around the outdoor unit and clean the condenser coils to ensure proper airflow and heat exchange.
                </p>
                <p>
                  Check refrigerant levels: An HVAC professional can check your system’s refrigerant levels and adjust them if necessary to ensure optimal cooling efficiency.
                </p>
                <p>
                  Inspect the electrical components: Regularly inspect the electrical connections, fuses, and breakers for any signs of wear or damage.
                </p>
                <p>
                  Schedule professional maintenance: In addition to performing basic cleaning tasks, it’s essential to schedule a professional maintenance check at least once a year. A trained technician can perform a thorough inspection, identify potential issues, and make necessary repairs or adjustments to keep your system running smoothly.
                </p>
                <p>
                  By prioritizing regular AC cleaning and maintenance, you can ensure that your air conditioning system remains efficient, effective, and reliable, providing you with comfort and peace of mind throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div className="">
            <Image src="/images/Count-on-Enviroclean.webp" width={500} height={500}
              alt="Enviroclean Team"
              className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 font-urbanist">
              When you need AC cleaning in Dubai, Count on Enviroclean
              <div className="border-b-4 border-primary w-full my-4"></div>
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                In today’s fast-paced world, maintaining a comfortable and healthy indoor environment is essential for our well-being. One crucial component of that environment is an efficient and clean air conditioning system. EnviroClean AC Cleaning is a leading AC cleaning company Dubai that ensures your AC units function at their best, offering you optimal cooling, energy efficiency, and improved indoor air quality. In this article, we will explore the advantages of choosing EnviroClean AC Cleaning for your air conditioning service needs.
              </p>
              <p>
                EnviroClean is the best AC cleaning company Dubai dedicated to ensuring the optimal performance and efficiency of your AC units.
              </p>
              <p>In the hot and arid climate of Dubai, air conditioning systems are essential for maintaining a comfortable indoor environment. As such, regular cleaning is crucial for keeping your AC system running smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GoogleReviewsBlock />
      <RecentWork />
      <VideosSection />
      <AboutOurServices />
      <FAQ />
      <ContactForm />
      <PartnerSlider />
    </>
  );
}
