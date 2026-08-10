import Image from 'next/image';

// Images ko direct import kar liya gaya hai
import img1 from '@/public/images/recent-work/img1.webp';
import img2 from '@/public/images/recent-work/img2.webp';
import img3 from '@/public/images/recent-work/img3.webp';
import img4 from '@/public/images/recent-work/img4.webp';
import img5 from '@/public/images/recent-work/img5.webp';
import img6 from '@/public/images/recent-work/img6.webp';

export default function RecentWork() {
    const filterImages = [
        { id: 1, src: img1, alt: 'recent-work' },
        { id: 2, src: img2, alt: 'recent-work' },
        { id: 3, src: img3, alt: 'recent-work' },
        { id: 4, src: img4, alt: 'recent-work' },
        { id: 5, src: img5, alt: 'recent-work' },
        { id: 6, src: img6, alt: 'recent-work' },
    ];

    return (
        <section className="w-full bg-white py-12 px-4 md:px-8 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gray-900 font-urbanist">
                        Our Recent Work
                        <div className="border-b-4 border-primary w-full my-4"></div>
                    </div>
                </div>

                <div className="flex gap-1 sm:gap-2 overflow-x-scroll no-scrollbar">
                    {filterImages.map((img) => (
                        <div key={img.id} className="flex-shrink-0 shadow-sm">
                            <Image
                                src={img.src}
                                alt={img.alt}
                                height={400}
                                width={300}
                                className=""
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}