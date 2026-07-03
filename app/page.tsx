import Image from "next/image";
import NavbarCarousel from "./components/NavbarCarousel";
import AboutUs from "./components/home/AboutUs";
import ServicesSection from "./components/home/ServicesSection";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FAQ from "./components/home/FAQ";
import Footer from "./components/Footer";
import ContactForm from "./components/home/ContactForm";
import PartnerSlider from "./components/home/PartnerSlider";
import { GoogleReviewsBlock } from "./GoogleReviewsBlock";

export default function Home() {
  return (
    <>
      <NavbarCarousel />
      <AboutUs />
      <ServicesSection />
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 font-urbanist">
              About Regular AC Maintenance
              <div className="border-b-4 border-primary w-full my-4"></div>
            </h2>

            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Regular AC cleaning and maintenance are essential for ensuring the optimal performance, energy efficiency, and longevity of your air conditioning system. Neglecting these routine tasks can lead to reduced efficiency, increased energy costs, and a shortened lifespan for your AC unit. Here are some key reasons why regular AC cleaning and maintenance should be a priority:
              </p>
              <p>
                Improved performance: Over time, dust, dirt, and debris can accumulate on the filters,   <Link className="text-primary" href={'https://envirocleanuae.com/coil-cleaning/'}> coils </Link>, and other components of your AC system. Regular cleaning helps remove these build-ups, ensuring that your system can operate at its full capacity and effectively cool your space.
              </p>
            </div>

            <Link href={'https://envirocleanuae.com/#about-section'} className="group duration-300 hover:scale-105 flex justify-center bg-black px-4 py-1 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition">
              Get a Quote
              <ChevronRight className="-ml-5 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div className="">
            <Image src="/images/About-Regular-AC-Maintenance-.jpg" width={500} height={500}
              alt="Enviroclean Team"
              className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

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
                In today’s fast-paced world, maintaining a comfortable and healthy indoor environment is essential for our well-being. One crucial component of that environment is an efficient and clean air conditioning system. EnviroClean AC Cleaning is a leading provider of professional air conditioning cleaning services that ensure your AC units function at their best, offering you optimal cooling, energy efficiency, and improved indoor air quality. In this article, we will explore the advantages of choosing EnviroClean AC Cleaning for your air conditioning maintenance needs.
              </p>
              <p>
                EnviroClean AC Cleaning in Dubai is a professional air conditioning cleaning and maintenance service provider dedicated to ensuring the optimal performance and efficiency of your AC units.
              </p>
              <p>In the hot and arid climate of Dubai, air conditioning systems are essential for maintaining a comfortable indoor environment. As such, regular cleaning and maintenance are crucial for keeping your AC system running smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <GoogleReviewsBlock />

      <section className="py-16 px-6 md:px-20 bg-secondary">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 font-urbanist">
              About Our Services:
              <div className="border-b-4 border-primary w-full my-4"></div>
            </h2>
            <div className="font-bold text-2xl font-urbanist">AC Cleaning</div>
            <div className="text-gray-600 leading-relaxed space-y-4">
              <p>
                Air conditioning units are essential for maintaining comfortable indoor temperatures, especially in Dubai’s hot climate. However, over time, dirt, dust, and other contaminants can accumulate within the units, reducing their efficiency and negatively impacting air quality. EnviroClean’s AC cleaning service involves:
              </p>
              <ul className="list-disc pl-6">
                <li>A thorough inspection of your air conditioning units</li>
                <li>Cleaning of the evaporator and condenser coils</li>
              </ul>
            </div>

            <Link href={'https://envirocleanuae.com/#about-section'} className="group duration-300 hover:scale-105 flex justify-center bg-black px-4 py-1 w-fit rounded-lg text-white font-medium hover:bg-green-700 transition">
              Get a Quote
              <ChevronRight className="-ml-5 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
            </Link>
          </div>

          <div className="">
            <Image src="/images/About-Our-Services.jpg" width={500} height={500}
              alt="Enviroclean Team"
              className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
      <FAQ />
      <ContactForm />
      <PartnerSlider />
      <Footer />
    </>
  );
}
