import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WhyChooseCoilCleaning() {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side: Image Container */}
                <div className="w-full h-full relative aspect-square rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src="/images/coil-cleaning-2.webp" // Is image ko aap image_de7d62.webp ke mutabik replace kar sakte hain
                        alt="EnviroClean technician working on AC unit"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Content Container */}
                <div className="space-y-6">
                    {/* Heading matching image_de7d62.webp styling */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-950 font-urbanist leading-tight">
                        Why Choose <span className="text-[#3CB474]">EnviroClean Coil Cleaning in Dubai?</span>
                    </h2>

                    {/* Descriptions */}
                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">Green Practices:</span> Environmental sustainability is embedded in everything EnviroClean stands for. We utilize eco-friendly cleaning methods which clean your AC coil completely without compromising the health of your HVAC and the environment.
                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">Proficient Technicians:</span> Our technicians are trained and skilled in various HVAC systems. You can be certain that your coils will get the proper cleaning they need.
                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">Advanced Equipment:</span> Advanced Equipment
                            We keep the best cleaning equipment in the market, which allows us to perform effective cleaning both at home and in commercial premises. Our modern equipment allows reaching places otherwise unreachable, keeping the coils clean.
                        </p>
                    </div>

                    {/* CTA Button matching the green tone of the image */}
                    <div className="pt-2">
                        <Link
                            href="tel:+971800368476"
                            className="inline-block bg-[#4CAF78] hover:bg-[#3d9664] text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-xs cursor-pointer"
                        >
                            Call Now
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}