import Image from "next/image";

export default function ContactForm() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="bg-secondary rounded-3xl overflow-hidden shadow-lg grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side: Image */}
                <div>
                    <Image
                        src="/images/contact-image.jpg"
                        height={500}
                        width={500}
                        alt="Technician working"
                        className="w-full object-cover max-h-[600px]"
                    />
                </div>

                {/* Right Side: Form */}
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">We Love To Hear From You</h2>

                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="p-4 rounded-lg border border-gray-200 w-full outline-none focus:border-green-500" />
                            <input type="email" placeholder="Email Address" className="p-4 rounded-lg border border-gray-200 w-full outline-none focus:border-green-500" />
                        </div>

                        <input type="tel" placeholder="Phone Number" className="p-4 rounded-lg border border-gray-200 w-full outline-none focus:border-green-500" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select className="p-4 rounded-lg border border-gray-200 w-full outline-none text-gray-500">
                                <option>Location</option>
                                <option>Dubai</option>
                                <option>Abu Dhabi</option>
                            </select>
                            <select className="p-4 rounded-lg border border-gray-200 w-full outline-none text-gray-500">
                                <option>Service You Require</option>
                                <option>AC Cleaning</option>
                                <option>Duct Cleaning</option>
                            </select>
                        </div>

                        <textarea placeholder="Message" rows={4} className="p-4 rounded-lg border border-gray-200 w-full outline-none focus:border-green-500"></textarea>

                        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-black transition w-fit flex items-center gap-2">
                            Submit <span>↗</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}