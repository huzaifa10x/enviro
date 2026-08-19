import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Image1 from "@/public/images/Duct-Cleaning.webp";
import Image2 from "@/public/images/AC-Cleaning-Dubai-Professional-Duct-Cleaning-in-Dubai.webp";
import Image3 from "@/public/images/253523.webp";
import Image4 from "@/public/images/Sanitisation.webp";
import Image5 from "@/public/images/AC-Repair-Maintenance.webp";
import Link from "next/link";

export default function ServicesSection() {
    const services = [
        { title: "Duct Cleaning", img: Image1, url: "/duct-cleaning-service-dubai/" },
        { title: "Full AC Service", img: Image2, url: "/accleaning-servicing/" },
        { title: "Coil Cleaning", img: Image3, url: "/coil-cleaning/" },
        { title: "Sanitisation", img: Image4, url: "/ac-sanitisation/" },
        { title: "AC Repair & Maintenance", img: Image5, url: "/ac-repair-maintenance-dubai/" },
    ];

    return (
        <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <p className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-urbanist">Explore Our Services</p>
                    <div className="h-px w-full bg-green-500 mx-auto" />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-4 rounded-2xl shadow-2xl hover:shadow-xl transition space-y-5">
                            <Image
                                src={service.img}
                                height={300}
                                width={300}
                                alt={service.title}
                                className="w-full h-80 object-cover object-top rounded-xl"
                            />
                            <h3 className="text-2xl md:text-4xl font-medium font-urbanist">{service.title}</h3>

                            <Link href={service.url} className="inline-block">
                                <button className="group duration-300 hover:scale-105 flex items-center justify-center bg-black px-4 py-2 w-fit rounded-lg text-white font-semibold hover:bg-green-700 transition cursor-pointer">
                                    Read More
                                    <ChevronRight className="-ml-5 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all w-5 h-5" />
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}