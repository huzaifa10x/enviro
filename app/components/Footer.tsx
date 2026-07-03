import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1ae6] text-white relative overflow-hidden">
            <div className="bg-[url('/images/footer-bg.png')] w-full h-full absolute bg-contain bg-center bg-no-repeat brightness-20"></div>
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-5 py-20">
                <div className="space-y-4">
                    <Image
                        src={'/images/logo.webp'}
                        width={200}
                        height={300}
                        alt='logo'
                    />
                    <p className="text-white text-sm leading-relaxed">
                        Welcome to enviroclean, your premier choice for professional AC duct cleaning services in Dubai and Abu Dhabi.
                    </p>
                    <div className="flex gap-4 text-lg text-white">
                        <a href="#" className="hover:text-green-500 transition">f</a>
                        <a href="#" className="hover:text-green-500 transition">ig</a>
                        <a href="#" className="hover:text-green-500 transition">yt</a>
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-urbanist font-medium text-primary mb-6">Quick Access</h3>
                    <ul className="space-y-3 text-white text-sm">
                        {['Home', 'Our Story', 'Blog', 'Abu Dhabi', 'Contact'].map(item => (
                            <li key={item} className="hover:text-white transition cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-3xl font-urbanist font-medium text-primary mb-6">Our Services</h3>
                    <ul className="space-y-3 text-white text-sm">
                        {['AC Cleaning', 'Duct Cleaning', 'Coil Cleaning', 'AC Sanitisation'].map(item => (
                            <li key={item} className="hover:text-white transition cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-3xl font-urbanist font-medium text-primary mb-6">Follow Us</h3>
                    <div className="w-full h-32 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=..."
                            className="w-full h-full grayscale hover:grayscale-0 transition"
                            title="Location"
                        />
                    </div>
                </div>
            </div>

            <div className="relative z-10 bg-black text-center border-t border-gray-800 py-8 text-white text-sm">
                Copyright © 2026 Enviro-Clean. All rights reserved.
            </div>
        </footer>
    );
}