import Image from 'next/image';

export default function Process() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 md:mb-16">
            <div className="text-center my-8 md:my-16">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-urbanist">
                    Simple 3 Step Process
                </h2>
                <div className="h-0.5 w-24 md:w-36 bg-green-500 mx-auto" />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                {/* Step 1 */}
                <div className="border border-primary rounded-lg bg-white p-4 w-full max-w-[260px] sm:max-w-[280px] flex flex-col items-center text-center shadow-sm">
                    <Image
                        src="/images/Book-via-Form-or-WhatsApp.webp"
                        height={200}
                        width={200}
                        alt="Book via Form or WhatsApp"
                        priority
                        sizes="(max-width: 768px) 180px, 200px"
                        className="w-auto h-auto max-h-[160px] md:max-h-[200px] object-contain"
                    />
                    <h3 className="text-sm md:text-base font-semibold mt-3 text-gray-900">
                        Book via Form or WhatsApp
                    </h3>
                </div>

                {/* Arrow 1 */}
                <div className="flex justify-center items-center my-1 md:my-0">
                    <Image
                        src="/images/arrow-icon.webp"
                        height={40}
                        width={60}
                        alt="next step"
                        className="rotate-90 md:rotate-0 w-8 md:w-12 h-auto opacity-70"
                    />
                </div>

                {/* Step 2 */}
                <div className="border border-primary rounded-lg bg-white p-4 w-full max-w-[260px] sm:max-w-[280px] flex flex-col items-center text-center shadow-sm">
                    <Image
                        src="/images/We-Inspect-&-Clean-Your-Ducts.webp"
                        height={200}
                        width={200}
                        alt="We Inspect & Clean Your Ducts"
                        sizes="(max-width: 768px) 180px, 200px"
                        className="w-auto h-auto max-h-[160px] md:max-h-[200px] object-contain"
                    />
                    <h3 className="text-sm md:text-base font-semibold mt-3 text-gray-900">
                        We Inspect & Clean Your Ducts
                    </h3>
                </div>

                {/* Arrow 2 */}
                <div className="flex justify-center items-center my-1 md:my-0">
                    <Image
                        src="/images/arrow-icon.webp"
                        height={40}
                        width={60}
                        alt="next step"
                        className="rotate-90 md:rotate-0 w-8 md:w-12 h-auto opacity-70"
                    />
                </div>

                {/* Step 3 */}
                <div className="border border-primary rounded-lg bg-white p-4 w-full max-w-[260px] sm:max-w-[280px] flex flex-col items-center text-center shadow-sm">
                    <Image
                        src="/images/Enjoy-Fresh,-Clean-Air.webp"
                        height={200}
                        width={200}
                        alt="Enjoy Fresh, Clean Air"
                        sizes="(max-width: 768px) 180px, 200px"
                        className="w-auto h-auto max-h-[160px] md:max-h-[200px] object-contain"
                    />
                    <h3 className="text-sm md:text-base font-semibold mt-3 text-gray-900">
                        Enjoy Fresh, Clean Air
                    </h3>
                </div>
            </div>
        </section>
    );
}