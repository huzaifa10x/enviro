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
                        src="/images/coil-cleaning-2.jpeg" // Is image ko aap image_de7d62.jpg ke mutabik replace kar sakte hain
                        alt="EnviroClean technician working on AC unit"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right Side: Content Container */}
                <div className="space-y-6">
                    {/* Heading matching image_de7d62.jpg styling */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-950 font-urbanist leading-tight">
                        Why Choose <span className="text-[#3CB474]">EnviroClean Coil Cleaning in Dubai?</span>
                    </h2>

                    {/* Descriptions */}
                    <div className="text-gray-700 space-y-4 text-sm md:text-base leading-relaxed">
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">Green Practices:</span> At EnviroClean, sustainability is at the core of our values. We employ environmentally friendly cleaning solutions, ensuring a thorough clean of your AC coil while prioritizing the health of your HVAC system and the planet.
                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">Experienced Technicians:</span> Our team comprises skilled technicians with extensive knowledge in handling diverse HVAC systems. Rest assured that your coils will receive precise and effective cleaning tailored to your requirements.
                        </p>
                        <p>
                            <span className="font-bold text-gray-900 block md:inline">Cutting-Edge Technology:</span> We utilize the best cleaning equipment and technology, guaranteeing a thorough and efficient cleaning process for your home or commercial needs. Our advanced tools reach even the most challenging areas, leaving your coils spotless.
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