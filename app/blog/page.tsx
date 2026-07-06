import Link from "next/link";
import NavbarCarousel from "../components/NavbarCarousel";

async function getPosts(page) {
    const res = await fetch(`https://envirocleanuae.com/apistaging/api/posts/?page=${page}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return res.json();
}

export default async function page() {
    const posts = await getPosts(2);
    console.log(posts)

    const slides = [
        {
            id: 1,
            subTitle: "",
            title: "Blog",
            desc: `Discover the key to a fresher, healthier environment with our AC Cleaning Blog. Unlock expert tips, step-by-step guides, and industry insights to ensure your air conditioning system operates at its best. From maintenance tricks to understanding the importance of clean air, empower yourself with knowledge for a cool and clean living space. Explore our blog now for a breath of fresh, informed air.`,
            image: "/images/blogbg.jpg",
            actionTitle: 'Call Us',
            actionUrl: 'tel:+971800368476'
        },
    ];

    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <div className="bg-[#f2faf7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.posts.map((post) => (
                            <div
                                key={post.id}
                                className={`bg-white rounded-lg shadow-sm overflow-hidden flex flex-col justify-between border border-gray-100 relative`}
                            >
                                {/* Image Container */}
                                <div className="h-52 w-full overflow-hidden relative">
                                    <img
                                        src={post.url}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex flex-col flex-grow justify-between">
                                    <div>
                                        {/* Title */}
                                        <h3 className="text-[19px] font-semibold text-gray-800 leading-snug mb-3 hover:text-[#10b981] transition-colors duration-200 cursor-pointer">
                                            {post.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>

                                    {/* Read More Button */}
                                    <div>
                                        <button className="bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium text-sm py-2 px-5 rounded-md transition-colors duration-200 shadow-sm">
                                            Read More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex items-center justify-center mt-10">
                    <Link className="mx-auto px-6 py-2 rounded font-urbanist font-medium bg-[#12b359] text-white hover:bg-[#0f994b] transition-colors" href={''}>
                        Load More
                    </Link>
                </div>
            </div>

        </>
    )
}
