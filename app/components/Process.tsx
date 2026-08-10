import Image from 'next/image'
import arrow from '@/public/images/arrow-icon.webp'
import Image1 from '@/public/images/Book-via-Form-or-WhatsApp.webp'
import Image2 from '@/public/images/We-Inspect-&-Clean-Your-Ducts.webp'
import Image3 from '@/public/images/Enjoy-Fresh,-Clean-Air.webp'

export default function Process() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 mb-13">
                <div className="text-center my-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 font-urbanist">Simple 3 Step Process</h2>
                    <div className="h-px w-full bg-green-500 mx-auto" />
                </div>

                <div className="flex md:flex-nowrap flex-wrap gap-14 items-center justify-center">
                    <div className="border border-primary rounded-lg bg-white p-5 h">
                        <Image
                            src={Image1}
                            height={300}
                            width={300}
                            alt="steps"
                        />
                        <h5 className="text-md font-semibold mt-2">Book via Form or WhatsApp</h5>
                    </div>
                    <div>
                        <Image
                            src={arrow}
                            height={100}
                            width={200}
                            alt="steps"
                            className="md:rotate-0 rotate-90"
                        />
                    </div>
                    <div className="border border-primary rounded-lg bg-white p-5 h">
                        <Image
                            src={Image2}
                            height={300}
                            width={300}
                            alt="steps"
                        />
                        <h5 className="text-md font-semibold mt-2">We Inspect & Clean Your Ducts</h5>
                    </div>
                    <div>
                        <Image
                            src={arrow}
                            height={100}
                            width={200}
                            alt="steps"
                            className="md:rotate-0 rotate-90"
                        />
                    </div>
                    <div className="border border-primary rounded-lg bg-white p-5 h">
                        <Image
                            src={Image3}
                            height={300}
                            width={300}
                            alt="steps"
                        />
                        <h5 className="text-md font-semibold mt-2">Enjoy Fresh, Clean Air</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
