import { Star } from "lucide-react";
import Image from "next/image";

export function GoogleReviewsBlock() {
    return (
        <section className="w-full bg-linear-to-r from-secondary to-white py-12 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 font-urbanist">
                        Why Local Dubai Residents Trust Us
                        <div className="border-b-4 border-primary w-full my-4"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-7 items-center">
                    <div className="col-span-2 flex items-start gap-3">
                        <Image
                            src={""}
                            alt="reviews"
                            height={50}
                            width={50}
                            className="rounded-full bg-gray-500"
                        />
                        <div>
                            <div>Enviro Clean UAE</div>
                            <div className="text-yellow-500 flex font-bold text-2xl">4.8 <Star /><Star /><Star /><Star /><Star /></div>
                            <div>Based on 131 reviews</div>
                            <div className="flex">powered by
                                <div className="relative w-[50px] h-[30px] bg-white rounded-full">
                                    <Image
                                        src={'/images/Google-Logo-2015.png'}
                                        alt=""
                                        fill
                                        className="p-1"
                                    />
                                </div></div>
                            <div className="bg-blue-600 rounded-3xl text-white px-3 py-2 flex items-center justify-between">review us on
                                <div className="relative w-[30px] h-[30px] bg-white rounded-full">
                                    <Image
                                        src={'/images/google-logo.webp'}
                                        alt=""
                                        fill
                                        className="p-1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="grid grid-cols-3">
                            <div className="bg-white p-5 space-y-3">
                                <div className="flex justify-between gap-4">
                                    <div className="flex gap-3">
                                        <Image
                                            src={""}
                                            alt="reviews"
                                            height={50}
                                            width={50}
                                            className="rounded-full bg-gray-500"
                                        />
                                        <div>
                                            <div className="font-semibold">Ollie Spence</div>
                                            <div className="text-neutral-600">4 years ago</div>
                                        </div>
                                    </div>

                                    <div className="relative w-[20px] h-[20px]">
                                        <Image
                                            src={'/images/google-logo.webp'}
                                            alt=""
                                            fill
                                            className=""
                                        />
                                    </div>
                                </div>
                                <div className="text-yellow-500 flex font-bold text-2xl">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.5"><path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" fill="#ffff00" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                <p className="h-[100px] overflow-y-scroll">Rick and Johnny from Enviro Clean were excellent, they were fast and efficient and helpfully also showed before and after pictures. Highly recommended and I would definitely use them again! Thanks</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}