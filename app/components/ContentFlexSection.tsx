/* eslint-disable @typescript-eslint/no-explicit-any */
import Image, { StaticImageData } from 'next/image';

interface ContentFlexSectionProps {
    subHeading?: string;
    heading?: string;
    content?: string;
    imageSrc?: string | StaticImageData;
    imageAlt?: string;
    imagePosition?: 'left' | 'right' | string;
}

const ContentFlexSection = ({
    subHeading = "",
    heading = "",
    content = "",
    imageSrc = "",
    imageAlt = "hvac-service-image",
    imagePosition = "right"
}: ContentFlexSectionProps): any => {

    const imageOrderClass = imagePosition === 'left' ? 'md:order-1' : 'md:order-2';
    const textOrderClass = imagePosition === 'left' ? 'md:order-2' : 'md:order-1';

    return (
        <section className={`w-full bg-white py-12 md:py-16 px-6 md:px-0`}>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

                <div className={`flex flex-col ${textOrderClass}`}>
                    {subHeading && (
                        <span className="text-primary text-sm md:text-base font-urbanist font-semibold tracking-wide mb-2 block">
                            {subHeading}
                        </span>
                    )}

                    <h2 className="text-3xl md:text-4xl font-urbanist font-bold text-zinc-900 leading-tight mb-6">
                        {heading}
                    </h2>

                    <div className="text-sm md:text-base font-extralight text-[#333333] leading-relaxed space-y-4">
                        {Array.isArray(content) ? (
                            content.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                        ) : (
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        )}
                    </div>
                </div>

                <div className={`relative w-full h-[300px] md:h-[420px] ${imageOrderClass}`}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="rounded-2xl object-cover shadow-sm"
                        sizes="(max-w-768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </section>
    );
};

export default ContentFlexSection;