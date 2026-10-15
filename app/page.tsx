import Image from "next/image";
import { Metadata } from "next";

// Core Above-The-Fold Components
import HomeBanner from "./components/home/HomeBanner";
import AboutUs from "./components/home/AboutUs";
import ServicesSection from "./components/home/ServicesSection";
import Process from "./components/Process";
import dynamic from "next/dynamic";

// Dynamic Imports for Below-The-Fold Heavy Components
const RegularACDuctCleaningDubai = dynamic(() => import("./components/home/RegularACDuctCleaningDubai"));
const GoogleReviewsBlock = dynamic(() => import("./GoogleReviewsBlock"));
const RecentWork = dynamic(() => import("./components/home/RecentWork"));
const VideosSection = dynamic(() => import("./components/videosSection"));
const AboutOurServices = dynamic(() => import("./components/home/AboutOurServices"));
const FAQ = dynamic(() => import("./components/home/FAQ"));
const ContactForm = dynamic(() => import("./components/home/ContactForm"));
const PartnerSlider = dynamic(() => import("./components/home/PartnerSlider"));

const title = 'AC Cleaning Dubai | AC Duct Cleaning Services — Enviroclean';
const description = 'EnviroClean UAE provides professional AC cleaning services in Dubai. We improve your AC\'s performance and efficiency. Get a free quote today!';
const canonical = 'https://envirocleanuae.com/';

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
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <HomeBanner />
      <AboutUs />
      <ServicesSection />

      <div className="bg-secondary">
        <Process />
      </div>

      <RegularACDuctCleaningDubai />

      <section className="py-16 px-6 md:px-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-gray-600 leading-relaxed space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-urbanist">
                To perform regular AC cleaning and maintenance, consider the following steps:
                <div className="border-b-4 border-primary w-full my-4"></div>
              </h2>
              <div className="space-y-5 text-lg">
                <p className="text-xs sm:text-sm md:text-base">
                  Clean or replace filters: Check and clean the filters at least once a month during peak usage seasons. Replace them if they’re damaged or worn out.
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  Clean the outdoor unit: Remove debris from around the outdoor unit and clean the condenser coils to ensure proper airflow and heat exchange.
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  Check refrigerant levels: An HVAC professional can check your system’s refrigerant levels and adjust them if necessary to ensure optimal cooling efficiency.
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  Inspect the electrical components: Regularly inspect the electrical connections, fuses, and breakers for any signs of wear or damage.
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  Schedule professional Service: In addition to performing basic cleaning tasks, it’s essential to schedule a professional check at least once a year. A trained technician can perform a thorough inspection, identify potential issues, and make necessary repairs or adjustments to keep your system running smoothly.
                </p>
                <p className="text-xs sm:text-sm md:text-base">
                  By prioritizing regular air duct cleaning Dubai, you can ensure that your air conditioning system remains efficient, effective, and reliable, providing you with comfort and peace of mind throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div>
            <Image
              src="/images/Count-on-Enviroclean.webp"
              width={500}
              height={500}
              alt="Enviroclean Team"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-urbanist">
              When you need AC cleaning in Dubai, Count on Enviroclean
              <div className="border-b-4 border-primary w-full my-4"></div>
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p className="text-xs sm:text-sm md:text-base">
                In today’s fast-paced world, maintaining a comfortable and healthy indoor environment is essential for our well-being. One crucial component of that environment is an efficient and clean air conditioning system. EnviroClean AC Cleaning is a leading AC cleaning company Dubai that ensures your AC units function at their best, offering you optimal cooling, energy efficiency, and improved indoor air quality. In this article, we will explore the advantages of choosing EnviroClean AC Cleaning for your air conditioning service needs.
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                EnviroClean is the best AC cleaning company Dubai dedicated to ensuring the optimal performance and efficiency of your AC units.
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                In the hot and arid climate of Dubai, air conditioning systems are essential for maintaining a comfortable indoor environment. As such, regular cleaning is crucial for keeping your AC system running smoothly and efficiently.
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