import Image from 'next/image';
import Link from 'next/link';

export default function RecentWork() {
    const filterImages = [
        { id: 1, src: '/images/recent-work/img1.jpg', alt: 'recent-work' },
        { id: 2, src: '/images/recent-work/img2.jpg', alt: 'recent-work' },
        { id: 3, src: '/images/recent-work/img3.jpg', alt: 'recent-work' },
        { id: 4, src: '/images/recent-work/img4.jpg', alt: 'recent-work' },
        { id: 5, src: '/images/recent-work/img5.jpg', alt: 'recent-work' },
        { id: 6, src: '/images/recent-work/img6.jpg', alt: 'recent-work' },
    ];

    return (
        <section className="w-full bg-white py-12 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900 font-urbanist">
                        Our Recent Work
                        <div className="border-b-4 border-primary w-full my-4"></div>
                    </h2>
                </div>

                <div className="flex gap-1 sm:gap-2 overflow-x-scroll no-scrollbar">
                    {filterImages.map((img) => (
                        <div key={img.id} className="flex-shrink-0 shadow-sm">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                height={400}
                                width={300}
                                className="w-[400px] h-[400px]"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}