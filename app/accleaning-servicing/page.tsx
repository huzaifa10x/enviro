import Image from "next/image";
import Footer from "../components/Footer";
import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import FaqsSection from "../components/FaqsSection";
import ContentFlexSection from "../components/ContentFlexSection";
import PackageIncludes from "../components/PackageIncludes";
import BenefitsSection from "../components/BenefitsSection";
import DisinfectionSection from "../components/DisinfectionSection";
import RecentWork from "../components/home/RecentWork";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
const slides = [
    {
        id: 1,
        // subTitle: "WELCOME TO ENVIRO CLEAN",
        title: "AC Cleaning Dubai & Abu Dhabi",
        desc: `AC cleaning Dubai & Abu Dhabi. When it comes to AC cleaning we are the market leaders. Enviroclean have services over 25,000 AC units in Dubai & Abu Dhabi.`,
        image: "/images/ac-cleaning-dubai-1-scaled.jpg",
        actionTitle: 'Call Now',
        actionUrl: 'tel:+971800368476'
    },
];

export default function AccleaningServicing() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <ContentFlexSection
                subHeading={'AC Cleaning Dubai & Abu Dhabi'}
                heading={'AC Cleaning Dubai & Abu Dhabi'}
                content={`Enviroclean use the best ac cleaning equipment in Dubai & Abu Dhabi. Our AC cleaning machine cleans to the very back of your AC duct, cleaning dirt, dust, mould and odours along the way. We will photograph your internal ducts and show you the condition before and after we have finished the AC cleaning. After a forward and backwards clean, we will disinfect your ducts with our microbial disinfection spray after we have completed the ac cleaning, this kills any bacteria and mould. Ac cleaning clears the way for fresher, healthier, cleaner air throughout your home. We provide the best AC cleaning service in Dubai & Abu Dhabi.`}
                imageSrc={'/images/Sanitisation.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'right'}
            />
            <ContentFlexSection
                subHeading={'Full AC Cleaning & Servicing Package'}
                heading={'Ac Cleaning & Ac Servicing'}
                content={`Our full ac cleaning package ensures your whole system from front to back is cleaned and disinfected. After we have cleaned your AC we carry out a full service to ensure the unit is running at full capacity.`}
                imageSrc={'/images/AC-Cleaning-Dubai-Professional-Duct-Cleaning-in-Dubai.webp'}
                imageAlt={'AC-Cleaning-Dubai-&-Abu-Dhabi'}
                imagePosition={'left'}
            />
            <PackageIncludes />
            <BenefitsSection />
            <DisinfectionSection />
            <RecentWork />
            <ContactCta
                title={'AC Cleaning- British Managed & Trained'}
                desc={`Best AC cleaning in Dubai & Abu Dhabi. We have serviced more than 25,000 customers in the last 5 years. Premium AC Cleaning which cant be matched.`}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <GoogleReviewsBlock />
            <ContactForm />
        </>
    );
}
