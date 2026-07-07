/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import NavbarCarousel from "../components/NavbarCarousel";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JSX } from "react/jsx-runtime";

interface Post {
    id: number;
    title: string;
    slug: string;
    featured_image: string;
    excerpt: string;
}

interface PostsResponse {
    posts: Post[];
}

interface Slide {
    id: number;
    subTitle: string;
    title: string;
    desc: string;
    image: string;
    actionTitle: string;
    actionUrl: string;
}

async function getPosts(page: number): Promise<PostsResponse> {
    const res = await fetch(`https://envirocleanuae.com/apistaging/api/posts/?page=${page}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        throw new Error("Failed to fetch");
    }
    return res.json() as Promise<PostsResponse>;
}

export default async function page(): Promise<JSX.Element> {
    const posts = await getPosts(1);

    if (!posts) {
        notFound();
    }
    const slides: Slide[] = [
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.posts.map((post) => (
                            <div
                                key={post.id}
                                className={`bg-white rounded-lg shadow-sm overflow-hidden flex flex-col justify-between border border-gray-100 relative`}
                            >
                                <div className="h-52 w-full overflow-hidden relative">
                                    <Image
                                        src={post.featured_image}
                                        alt={post.title}
                                        height={300}
                                        width={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="p-6 flex flex-col grow justify-between">
                                    <div>
                                        <h3 className="text-[19px] font-semibold text-gray-800 leading-snug mb-3 hover:text-[#10b981] transition-colors duration-200 cursor-pointer">
                                            {post.title}
                                        </h3>

                                        <div className="text-gray-500 text-sm mb-6 line-clamp-2" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
                                    </div>

                                    <div>
                                        <Link href={`/${post.slug}`} className="bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium text-sm py-2 px-5 rounded-md transition-colors duration-200 shadow-sm">
                                            Read More
                                        </Link>
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
