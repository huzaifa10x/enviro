import Image from "next/image";
import Footer from "../components/Footer";
import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import FaqsSection from "../components/FaqsSection";
import ContentFlexSection from "../components/ContentFlexSection";
import PackageIncludes from "../components/PackageIncludes";
import DisinfectionSection from "../components/DisinfectionSection";
import RecentWork from "../components/home/RecentWork";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import CoilCleaningService from "./CoilCleaningService";
import WhyChooseCoilCleaning from "./WhyChooseCoilCleaning";
import BenefitsSection from "./BenefitsSection";
import EcoFriendlyServices from "./EcoFriendlyServices";
import ServicesSection from "../components/home/ServicesSection";
import SustainabilityCommitment from "./SustainabilityCommitment";
import Process from "../components/Process";
import CoilCleaningFAQ from "./CoilCleaningFAQ";
const slides = [
    {
        id: 1,
        // subTitle: "WELCOME TO ENVIRO CLEAN",
        title: "AC Coil Cleaning in Dubai",
        desc: `✔ Operates 24/7 ✔ Competitive Pricing ✔ Trained and Insured`,
        image: "/images/coil-cleaning.jpeg",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

export default function CoilCleaning() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <CoilCleaningService />
            <WhyChooseCoilCleaning />
            <BenefitsSection />
            <EcoFriendlyServices />
            <GoogleReviewsBlock />
            <ServicesSection />
            <SustainabilityCommitment />
            <CoilCleaningFAQ />
            <ContactCta
                title={'Contact Us Today to Get Started'}
                desc={`<p class="mb-3">Choose EnviroClean Coil Cleaning as your trusted partner in achieving a more sustainable and healthier indoor environment in Dubai. Experience the benefits of eco-friendly and efficient coil cleaning with a team dedicated to excellence and environmental responsibility</p>
                    <p class="mb-3">Ready to embrace eco-friendly and efficient coil cleaning for your HVAC system?</p>
                    <p class="mb-3">Contact EnviroClean Coil Cleaning today and let us be your trusted partner in achieving a more sustainable and healthier indoor environment.</p>`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <ContactForm />
        </>
    );
}
