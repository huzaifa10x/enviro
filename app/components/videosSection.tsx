import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function VideosSection() {
    const videos = [
        {
            id: 1,
            title: 'Full AC Cleaning & Servicing by Envi...',
            thumbnail: 'https://img.youtube.com/vi/mNoDYXic4Wk/hqdefault.jpg',
            link: 'https://www.youtube.com/watch?v=mNoDYXic4Wk',
        },
        {
            id: 2,
            title: 'AC cleaning by Enviroclean',
            thumbnail: 'https://img.youtube.com/vi/GtUV31OiCf4/hqdefault.jpg',
            link: 'https://www.youtube.com/watch?v=GtUV31OiCf4',
        },
        {
            id: 3,
            title: 'Enviroclean UAE- AC Duct Cleaning',
            thumbnail: 'https://img.youtube.com/vi/F8dhYsoI2wk/hqdefault.jpg',
            link: 'https://www.youtube.com/watch?v=F8dhYsoI2wk',
        },
    ];

    return (
        <>
            <section className='pb-10 px-6'>
                <div className='mx-auto max-w-7xl'>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                        {videos.map((video) => (
                            <Link
                                key={video.id}
                                href={video.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative block aspect-video w-full bg-black overflow-hidden shadow-md rounded-sm"
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    height={400}
                                    width={300}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition duration-300"
                                />

                                <div className="absolute top-0 left-0 right-0 p-3 bg-gradient-to-b from-black/70 to-transparent flex items-center justify-between pointer-events-none">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-emerald-600 border border-white/20 flex items-center justify-center text-white text-xs font-bold shrink-0">
                                            E
                                        </div>
                                        <span className="text-white text-sm font-normal truncate max-w-[200px] sm:max-w-xs drop-shadow-md">
                                            {video.title}
                                        </span>
                                    </div>
                                    <button className="text-white opacity-90 hover:opacity-100 p-1">
                                        <svg className="w-5 h-5 drop-shadow" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="w-16 h-11 bg-[#FF0000] rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:bg-[#cc0000] shadow-lg">
                                        <svg className="w-5 h-5 text-white fill-current translate-x-[2px]" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-[11px] font-medium px-2 py-1 flex items-center gap-1 rounded-sm pointer-events-none">
                                    <span>Watch on</span>
                                    <span className="font-bold text-red-500 flex items-center">
                                        YouTube
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
