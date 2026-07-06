import React from 'react';

export default function RecentWork() {
    // Placeholder images - replace these with your actual asset paths
    const filterImages = [
        { id: 1, src: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=600&q=80', alt: 'Dirty AC Filter 1' },
        { id: 2, src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80', alt: 'Cleaned AC Filter 1' },
        { id: 3, src: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80', alt: 'Dirty AC Filter 2' },
        { id: 4, src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80', alt: 'Cleaned AC Filter 2' },
    ];

    const videos = [
        {
            id: 1,
            title: 'Full AC Cleaning & Servicing by Envi...',
            thumbnail: 'https://images.unsplash.com/photo-1621905252507-b354bc25edac?auto=format&fit=crop&w=600&q=80',
            link: '#',
        },
        {
            id: 2,
            title: 'AC cleaning by Enviroclean',
            thumbnail: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
            link: '#',
        },
        {
            id: 3,
            title: 'Enviroclean UAE- AC Duct Cleaning',
            thumbnail: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80',
            link: '#',
        },
    ];

    return (
        <section className="w-full bg-white py-12 px-4 md:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-wide">
                        Our Recent Work
                    </h2>
                    <div className="w-full border-b border-slate-300 mt-6"></div>
                </div>

                <div className="mt-8">
                    <div className="flex gap-1 sm:gap-2">
                        {filterImages.map((img) => (
                            <div key={img.id} className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden shadow-sm">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {videos.map((video) => (
                        <a
                            key={video.id}
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block aspect-video w-full bg-black overflow-hidden shadow-md rounded-sm"
                        >
                            <img
                                src={video.thumbnail}
                                alt={video.title}
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}