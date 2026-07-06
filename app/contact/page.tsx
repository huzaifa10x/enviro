import NavbarCarousel from "../components/NavbarCarousel";
import ContactCta from "../components/ContactCta";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import ContactForm from "../components/home/ContactForm";
import { LocationEditIcon, Mail, MapPin, Phone } from "lucide-react";
const slides = [
    {
        id: 1,
        subTitle: "",
        title: "Contact Us",
        desc: `Get in touch with our UK bookings team today.`,
        image: "/images/our-story.jpeg",
        actionTitle: 'Call Us',
        actionUrl: 'tel:+971800368476'
    },
];

export default function contact() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="bg-secondary py-10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid md:grid-cols-5 gap-8">
                        <div className="md:col-span-2 space-y-7 flex justify-center flex-col">
                            <div className="text-center bg-white shadow-2xl rounded-2xl p-7 space-y-3s">
                                <Mail className="mx-auto" size={50} strokeWidth={1} />
                                <div className="text-2xl">Email Address</div>
                                <div>info@envirocleanuae.com</div>
                            </div>
                            <div className="text-center bg-white shadow-2xl rounded-2xl p-7 space-y-3s">
                                <Phone className="mx-auto" size={50} strokeWidth={1} />
                                <div className="text-2xl">Email Address</div>
                                <div>info@envirocleanuae.com</div>
                            </div>
                            <div className="text-center bg-white shadow-2xl rounded-2xl p-7 space-y-3s">
                                <MapPin className="mx-auto" size={50} strokeWidth={1} />
                                <div className="text-2xl">Email Address</div>
                                <div>info@envirocleanuae.com</div>
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <ContactForm onlyForms={true} />
                        </div>
                    </div>
                </div>
            </section>

            <ContactCta
                title={'Have a Questions?'}
                button1Text={'Find Out More'}
                button1Link={'tel:+971800368476'}
                button2Text={'Whatsapp Now'}
                button2Link={'https://web.whatsapp.com/send?phone=971528389414&text=Hello!'}
            />
            <GoogleReviewsBlock />
        </>
    );
}
