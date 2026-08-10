"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { api_base_url } from "../utils";

interface Post {
    id: number;
    title: string;
    slug: string;
    featured_image: string;
    excerpt: string;
}

interface PostsResponse {
    posts: Post[];
    current_page?: number;
    last_page?: number;
}

// Client-side par public ENV var check karein, fallback ke liye api_base_url import kar lein
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || api_base_url;

export default function BlogGrid({
    initialData,
}: {
    initialData: PostsResponse;
}) {
    const [posts, setPosts] = useState<Post[]>(initialData?.posts || []);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(
        initialData?.last_page ? initialData.last_page > 1 : true
    );

    const loadMore = async () => {
        if (loading || !hasMore) return;

        try {
            setLoading(true);
            const nextPage = page + 1;

            // Direct external API call (internal Next.js /api route bypass ho raha hai)
            const res = await fetch(`${BASE_URL}/api/posts?page=${nextPage}`);

            if (!res.ok) throw new Error("Failed to fetch more posts");

            const data: PostsResponse = await res.json();

            if (!data.posts || data.posts.length === 0) {
                setHasMore(false);
                return;
            }

            setPosts((prev) => [...prev, ...data.posts]);
            setPage(nextPage);

            // Agar backend se last_page mil raha hai toh check karein
            if (data.last_page && nextPage >= data.last_page) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error loading more posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-10">
            {/* Blog Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                    >
                        <div>
                            {/* Image Container */}
                            <div className="relative h-48 w-full">
                                <Image
                                    src={post.featured_image || "/images/placeholder.webp"}
                                    alt={post.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5 space-y-3">
                                <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                                    {post.title}
                                </h2>
                                <div
                                    className="text-gray-600 text-sm line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '') : '',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Read More Button */}
                        <div className="p-5 pt-0">
                            <Link
                                href={`/${post.slug}`}
                                className="inline-block bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium text-sm py-2 px-4 rounded-md transition-colors duration-200"
                            >
                                Read Article
                            </Link>
                        </div>
                    </article>
                ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
                <div className="text-center pt-6">
                    <button
                        onClick={loadMore}
                        disabled={loading}
                        className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-md"
                    >
                        {loading ? "Loading..." : "Load More Posts"}
                    </button>
                </div>
            )}
        </div>
    );
}