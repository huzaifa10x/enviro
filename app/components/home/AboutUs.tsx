import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
    return (
        <section className="py-16 px-6 md:px-20 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

                {/* Left Side: Text Content */}
                <div className="lg:w-1/2 space-y-6">
                    <div className="text-4xl font-bold text-gray-900 font-urbanist">
                        About Us
                        <div className="border-b-4 border-primary max-w-1/3 my-4"></div>
                    </div>

                    <div className="text-gray-600 leading-relaxed space-y-4">
                        <p>In the bustling metropolis of Dubai, where temperatures can soar to extreme heights, air conditioning systems play a crucial role in providing comfort and relief from the scorching heat. Given the importance of AC units in maintaining a comfortable indoor environment, regular AC duct cleaning Dubai is essential to ensure optimal performance, energy efficiency, and a healthy atmosphere.</p>

                        <p>Air conditioning systems are an indispensable part of modern life, providing comfort and a pleasant indoor environment, especially during the hot summer months. Despite their importance, these systems can sometimes malfunction or become less efficient, necessitating prompt and professional Dubai AC duct cleaning.</p>
                    </div>

                    <button className="group duration-300 hover:scale-105 flex justify-center bg-black px-4 py-1 w-fit rounded-lg text-white font-medium transition">
                        Get a Quote
                        <ChevronRight className="-ml-5 opacity-0 group-hover:opacity-100 group-hover:ml-2 transition-all" />
                    </button>

                    {/* Accreditation Box */}
                    <div className="pt-6 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                            <Image src="/images/nadca.webp" width={500} height={500} alt="NADCA" className="w-24 h-auto" />
                            <div>
                                <div className="font-bold text-gray-900">A Trusted Partner</div>
                                <p className="text-sm text-gray-500">We Are NADCA Accredited</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="lg:w-1/2 w-full">
                    <Image src="/images/about-us-banner.jpg" width={500} height={500}
                        alt="Enviroclean Team"
                        className="rounded-2xl shadow-xl w-full max-h-[600px] object-cover"
                    />
                </div>
            </div>
        </section>
    );
}