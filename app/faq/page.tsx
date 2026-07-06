import Image from "next/image";
import Footer from "../components/Footer";
import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import ContactForm from "../components/home/ContactForm";
import FaqsSection from "../components/FaqsSection";
const slides = [
    {
        id: 1,
        subTitle: "WELCOME TO ENVIRO CLEAN",
        title: "Frequently Asked Questions",
        desc: `Check if the question you have is answered below, if not call our uk bookings team today for assistance.`,
        image: "/images/our-story.jpeg",
        actionTitle: 'Call Us',
        actionUrl: 'tel:+971800368476'
    },
];
const faqs = [
    {
        "id": 1,
        "question": "How Often Should I get My AC Serviced?",
        "answer": "Experts agree that ideally AC units should be serviced every 3 months to maintain cleanliness and efficiency. Drain lines and drip trays build up and need to be cleaned in order to avoid leaks. Electrics also need to be checked and filters should be cleaned to ensure that the air is as clean as possible.\n\nOne of the biggest benefits of regular AC servicing is that it allows any potential issues to be picked up early. This means that minor repairs can be made and parts replaced before a bigger issue occurs. During the AC service the Technician can also monitor the state of your ducts and coils and provide recommendations for their cleaning and maintenance. All these elements are essential to keep your air clean, your system efficient and avoid an inconvenient AC breakdown – particularly in summer when it is impossible to remain comfortable without functioning air conditioning."
    },
    {
        "id": 2,
        "question": "Why Do I Need To Have My Ducts Cleaned?",
        "answer": "The great news is that you live here in Dubai or Abu Dhabi, the sun shines all year round and you lead a great quality life. With every positive comes a negative, the fact we live in a desert means the air carries more sand, dust and debri. Once this gets inside your home, more importantly your AC ducts it has no way of escaping, this then circulates all contamination throughout your home, for you and your family to breathe in.\n\nHaving your AC ducts cleaned significantly decreases your exposure to allergies and respiratory problems. If you are moving into a new apartment or villa one of the first things you should do is to schedule a full AC service and duct clean. You don’t want any residual dirt from the previous owners to be locked in your AC system but scheduling an immediate clean also means you start with perfectly clean ducts and this helps you to keep track of your timings for future servicing and cleaning."
    },
    {
        "id": 3,
        "question": "What Are Coils? Why Should I have Them Cleaned?",
        "answer": "Your AC unit houses a coil which is responsible for cooling the air pushed through the system. It is housed in your outdoor system and is wet, which means it is susceptible to gathering dirt and mould which sticks to it.\n\nAny dirt and mould collecting on your coil will eventually start to seep into your system and impact the quality of your air. Any unusual smells coming from your AC could be an indicator that your coils need cleaning. Dirt in your coils can also impact the efficiency of your system and effect energy usage. A thorough clean of your coils should be carried out at least once per year."
    },
    {
        "id": 4,
        "question": "How Do I Know How Many AC Units My Home Has?",
        "answer": "You can easily calculate the number of AC units in your property by counting the number of thermostats. Each thermostat will be controlling one AC unit."
    },
    {
        "id": 5,
        "question": "I Live In a Apartment, Do I Have To Get My Own System Cleaned?",
        "answer": "In most cases, the AC units for your apartment will need to be separately serviced from the others in the building and this is likely to be your responsibility to arrange. You should also be ensuring ducts within your apartment are regularly cleaned. If you aren’t sure, speak to your building provider to establish if you need to schedule your AC servicing yourself."
    },
    {
        "id": 6,
        "question": "Do I Get Photos Once You Have Finished The Work?",
        "answer": "Yes our team will send you all of the before and after photos of your AC system the same day."
    },
    {
        "id": 7,
        "question": "Will It Be Messy?",
        "answer": "No, most of the mess is spinning around in your AC duct. However our team use plastic protection sheets to cover all of your furniture to ensure extra protection."
    }
]
export default function Faq() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <FaqsSection faqs={faqs} />
            <ContactCta
                title={'Contact us for any queries'}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <ContactForm />
        </>
    );
}
