import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ServicesSection() {
    const services = [
        { title: "Duct Cleaning", img: "/images/duct-cleaning.jpg" },
        { title: "Full AC Service", img: "/images/AC-Cleaning-Dubai-Professional-Duct-Cleaning-in-Dubai.webp" },
        { title: "Coil Cleaning", img: "/images/Coil-Cleaning.jpg" },
        { title: "Sanitisation", img: "/images/Sanitisation.webp" },
    ];

    return (
        <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-urbanist">Explore Our Services</h2>
                    <div className="h-px w-full bg-green-500 mx-auto" />
                </div>

                {/* Services Grid */}
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
                            <div className="text-3xl font-medium font-urbanist">{service.title}</div>
                            <button className="group duration-300 hover:scale-105 flex justify-center bg-black px-4 py-2 w-fit rounded-lg text-white font-semibold hover:bg-green-700 transition">
                                Read More
                                <ChevronRight className="-ml-5 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="text-center my-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-urbanist">Simple 3 Step Process</h2>
                    <div className="h-px w-full bg-green-500 mx-auto" />
                </div>

                <div className="flex md:flex-nowrap flex-wrap gap-14 items-center justify-center">
                    <div className="border border-primary rounded-lg bg-white p-5 h">
                        <Image
                            src={'/images/Book-via-Form-or-WhatsApp.png'}
                            height={300}
                            width={300}
                            alt="steps"
                        />
                        <div className="text-md font-semibold mt-2">Book via Form or WhatsApp</div>
                    </div>
                    <div>
                        <Image
                            src={'/images/arrow-icon.png'}
                            height={100}
                            width={200}
                            alt="steps"
                            className="md:rotate-0 rotate-90"
                        />
                    </div>
                    <div className="border border-primary rounded-lg bg-white p-5 h">
                        <Image
                            src={'/images/We-Inspect-&-Clean-Your-Ducts.webp'}
                            height={300}
                            width={300}
                            alt="steps"
                        />
                        <div className="text-md font-semibold mt-2">We Inspect & Clean Your Ducts</div>
                    </div>
                    <div>
                        <Image
                            src={'/images/arrow-icon.png'}
                            height={100}
                            width={200}
                            alt="steps"
                            className="md:rotate-0 rotate-90"
                        />
                    </div>
                    <div className="border border-primary rounded-lg bg-white p-5 h">
                        <Image
                            src={'/images/Enjoy-Fresh,-Clean-Air.png'}
                            height={300}
                            width={300}
                            alt="steps"
                        />
                        <div className="text-md font-semibold mt-2">Enjoy Fresh, Clean Air</div>
                    </div>
                </div>
            </div>
        </section>
    );
}