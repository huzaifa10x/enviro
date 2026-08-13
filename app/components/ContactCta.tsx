import Image from 'next/image'
import React from 'react'

export default function ContactCta({
    title,
    desc,
    button1Text,
    button1Link,
    button2Text,
    button2Link,
}: any) {
    return (
        <section className="relative w-full overflow-hidden min-h-[220px] md:py-6 flex items-center bg-zinc-900">
            <div className="absolute top-0 left-0 bottom-0 w-6 bg-[#004d25] z-20" />
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/images/coil-cleaning-2.webp"
                    alt="HVAC technician at work"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center opacity-30"
                    priority
                />
            </div>
            <div className="relative z-10 max-w-7xl w-full mx-auto px-8 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between gap-6 pl-12">
                <div className='max-w-3xl'>
                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-white tracking-wide text-center text-left">
                        {title}
                    </h2>
                    {desc &&
                        <div className='leading-5 text-sm mt-4 text-white' dangerouslySetInnerHTML={{ __html: desc }} />
                    }
                </div>
                <div className="flex flex-col gap-3 min-w-[180px] w-full md:w-auto">
                    <a
                        href={button1Link}
                        className="bg-primary hover:bg-[#0f994b] text-white text-center font-urbanist font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 text-sm whitespace-nowrap shadow-sm"
                    >
                        {button1Text}
                    </a>
                    <a
                        href={button2Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary hover:bg-[#0f994b] text-white text-center font-urbanist font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 text-sm whitespace-nowrap shadow-sm"
                    >
                        {button2Text}
                    </a>
                </div>
            </div>
        </section>
    )
}
