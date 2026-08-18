/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useCallback } from 'react'
import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export default function GoogleReviewsBlock() {
    const reviews = [
        {
            "id": "rev_01",
            "name": "Rizwan Afr",
            "rating": 5,
            "date": "3 days ago",
            "avatar": "/images/reviews/rizwan.webp",
            "comment": `We had our AC Duct checked and cleaned by Envirolclean and he’s been far better since. Omg we had no idea about the state of our AC.They came in, very professional, covered everything, cut hatches in the ceiling where needed and made very good after.Took away all their mess and gave everything a thorough clean.I’ve included some before and after pics.Great price, would thoroughly recommend these red team guys 100% 👏🏻👏🏻👏🏻`
        },
        {
            "id": "rev_02",
            "name": "Ajay Arora",
            "rating": 5,
            "date": "a month ago",
            "avatar": "/images/reviews/ajay.webp",
            "comment": `Very happy with the services of Patrick and his team members Ricardo, Arjee and Jonathan.
            Very professional and perfect in their work.
            Also kept our house neat and clean after the service.
            Thanks a lot 👍🤗
            `
        },
        {
            "id": "rev_03",
            "name": "Mary Ann Afable",
            "rating": 5,
            "date": "a month ago",
            "avatar": "/images/reviews/mary.webp",
            "comment": `The team was great service and excellent highly recommend the company’s staff ,Jonathan, Ricardo and Arjhel`
        },
        {
            "id": "rev_04",
            "name": "oana picincu",
            "rating": 5,
            "date": "2 month ago",
            "avatar": "/images/reviews/osna.webp",
            "comment": `We needed their services after moving in a new place, recent development, so everything was full of dust. We regularly use their service now, twice a year. Since we have a baby and we want the airficts to be extra clean. Great team of professionals! They cleaned the aircon ducts really well in just few hours. They show before and after pictures ñ.`
        },
        {
            "id": "rev_05",
            "name": "Adam Banks",
            "rating": 5,
            "date": "2 months ago",
            "avatar": "",
            "comment": `The team (Rick, Kiowa and Joe) did a fantastic job with a full service of our home AC. Turned up exactly on time and worked very cleanly with no fuss. Great job all round.`
        },
        {
            "id": "rev_06",
            "name": "Doreen Khayongo",
            "rating": 5,
            "date": "2 months ago",
            "avatar": "/images/reviews/doreen.webp",
            "comment": `Romulo Jonathan Patrick
            They clean good
            They are the best
            Thank you for your service`
        },
        {
            "id": "rev_07",
            "name": "Danie Botha",
            "rating": 5,
            "date": "2 months ago",
            "avatar": "/images/reviews/danie.webp",
            "comment": `Patrick, Johnathan, Romulo came to te apartment and did a great shop. The vents were cleaned professionally and they made sure all areas are covered and protected. They finished the work in a timely manner and made sure everything was in order before they left. I can recommend this company for sure! Thank you Enviro Clean ⭐️`
        }
    ]

    // Embla setup: loop + autoplay plugin (2.5s delay, pauses on hover automatically
    // via stopOnInteraction: false + stopOnMouseEnter: true).
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: 'start', dragFree: false },
        [Autoplay({ delay: 2500, stopOnMouseEnter: true, stopOnInteraction: false })]
    )

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="w-full overflow-x-hidden bg-linear-to-r from-secondary to-white py-12 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-urbanist">
                        Why Local Dubai Residents Trust Us
                        <div className="border-b-4 border-primary w-full my-4"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-7 gap-10 items-center">
                    {/* Left Stats Section */}
                    <div className="md:col-span-2 flex items-start gap-3">
                        <div className="relative w-[50px] h-[50px] bg-white rounded-full">
                            <Image
                                src={"/images/reviews/2021-03-03.webp"}
                                alt="Enviro Clean"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover rounded-full"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="font-semibold text-gray-800">Enviro Clean UAE</div>
                            <div className="text-yellow-500 flex items-center font-bold text-2xl"> 4.8 &nbsp;
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="20px" height="20px" viewBox="0 0 24 24" fill="#FFBF00" stroke="#FFBF00" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
                                        <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ))}
                            </div>
                            <div className="text-sm text-gray-600">Based on 131 reviews</div>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                <div>powered by</div>
                                <div className="relative w-[50px] h-[30px]">
                                    <Image src={'/images/Google-Logo-2015.webp'}
                                        alt="Google"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain" />
                                </div>
                            </div>
                            <Link href={'https://search.google.com/local/writereview?placeid=ChIJi9ylGh1pXz4Ru8R4OPvupgI'} className="bg-blue-600 rounded-3xl text-white px-4 py-2 flex items-center justify-between text-sm shadow-xs cursor-pointer">
                                <div>review us on</div>
                                <div className="relative w-[20px] h-[20px] bg-white rounded-full">
                                    <Image src={'/images/google-logo.webp'}
                                        alt="G"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="p-0.5" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Right Slider Section */}
                    <div className="md:col-span-5 relative min-w-0">
                        {/* Embla viewport */}
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex gap-4">
                                {reviews.map((items: any, key: number) => (
                                    <div
                                        key={key}
                                        className="bg-white p-5 space-y-3 flex-shrink-0 rounded-xl shadow-xs border border-gray-100
                                                   basis-[85%] sm:basis-[60%] md:basis-[48%] lg:basis-[32%]"
                                    >
                                        <div className="flex justify-between gap-4">
                                            <div className="flex gap-3">
                                                {items.avatar === "" ? (
                                                    <div className="rounded-full flex items-center justify-center uppercase font-semibold text-2xl text-white bg-neutral-600 w-[50px] h-[50px] shrink-0">
                                                        {items.name[0]}
                                                    </div>
                                                ) : (
                                                    <Image
                                                        src={items.avatar}
                                                        alt="reviews"
                                                        height={50}
                                                        width={50}
                                                        className="rounded-full bg-gray-500 object-cover shrink-0"
                                                    />
                                                )}

                                                <div>
                                                    <div className="font-semibold text-gray-800 text-sm">{items.name}</div>
                                                    <div className="text-neutral-500 text-xs">{items.date}</div>
                                                </div>
                                            </div>

                                            <div className="relative w-[20px] h-[20px] shrink-0">
                                                <Image src={'/images/google-logo.webp'}
                                                    alt="G"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    fill />
                                            </div>
                                        </div>

                                        <div className="flex">
                                            {Array(Number(items.rating || 0)).fill(0).map((_, index) => (
                                                <div key={index} className="flex font-bold text-2xl">
                                                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="#FFBF00" stroke="#FFBF00" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5">
                                                        <path d="M8.58737 8.23597L11.1849 3.00376C11.5183 2.33208 12.4817 2.33208 12.8151 3.00376L15.4126 8.23597L21.2215 9.08017C21.9668 9.18848 22.2638 10.0994 21.7243 10.6219L17.5217 14.6918L18.5135 20.4414C18.6409 21.1798 17.8614 21.7428 17.1945 21.3941L12 18.678L6.80547 21.3941C6.1386 21.7428 5.35909 21.1798 5.48645 20.4414L6.47825 14.6918L2.27575 10.6219C1.73617 10.0994 2.03322 9.18848 2.77852 9.08017L8.58737 8.23597Z" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-sm text-gray-600 h-[100px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                            {items.comment}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prev / Next controls */}
                        <button
                            type="button"
                            aria-label="Previous review"
                            onClick={scrollPrev}
                            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors z-10"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            aria-label="Next review"
                            onClick={scrollNext}
                            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors z-10"
                        >
                            ›
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <Link target='_blank' href={'https://www.google.com/search?hl=en-AE&gl=in&q=Enviro+Clean+UAE+-+Empire+Height+A,+9th+floor,+business+bay+Bldg+0913+-+Dubai+-+United+Arab+Emirates&ludocid=191102796961465531&lsig=AB86z5V1_YL7Rbxs3nMtTYm3Rm0C#lrd=0x3e5f691d1aa5dc8b:0x2a6eefb3878c4bb,1,,,,'} className="mx-auto block mt-10 bg-[#56a67b] hover:bg-[#458b63] transition-colors text-white font-semibold rounded-lg px-6 py-2">
                        Read More Reviews
                    </Link>
                </div>
            </div>
        </section>
    )
}