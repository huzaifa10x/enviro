import Image from "next/image";
import Footer from "../components/Footer";
import NavbarCarousel from "../components/NavbarCarousel";
const slides = [
    {
        id: 1, title: "About Us",
        desc: `✅  More than 180 – 5-star Google reviews  ✅  Trained   ✅  Insured`,
        image: "/images/our-story.jpeg",
        actionTitle: 'Call Us',
        actionUrl: 'tel:+971800368476'
    },
];
export default function Home() {
    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
        </>
    );
}
