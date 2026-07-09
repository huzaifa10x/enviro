"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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

export default function BlogGrid({
    initialData,
}: {
    initialData: PostsResponse;
}) {
    const [posts, setPosts] = useState<Post[]>(initialData.posts);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadMore = async () => {
        if (loading || !hasMore) return;

        try {
            setLoading(true);
            const nextPage = page + 1;

            // Apne local Server-Side API Route ko call krein
            const res = await fetch(`/api/blog?page=${nextPage}`);

            if (!res.ok) return;

            const data: PostsResponse = await res.json();

            if (!data.posts || data.posts.length === 0) {
                setHasMore(false);
                return;
            }

            setPosts((prev) => [...prev, ...data.posts]);
            setPage(nextPage);
        } catch (error) {
            console.error("Error loading more posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#f2faf7] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col justify-between border border-gray-100"
                        >
                            <div className="h-52 relative overflow-hidden">
                                <Image
                                    src={post.featured_image}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 flex flex-col grow justify-between">
                                <div>
                                    <h4 className="text-[19px] font-semibold mb-3">
                                        {post.title}
                                    </h4>

                                    <div
                                        className="text-gray-500 text-sm mb-6 line-clamp-2"
                                        dangerouslySetInnerHTML={{
                                            __html: post.excerpt,
                                        }}
                                    />
                                </div>

                                <Link
                                    href={`/${post.slug}`}
                                    className="bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium text-sm py-2 px-5 rounded-md w-fit"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {hasMore && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={loadMore}
                            disabled={loading}
                            className="px-6 py-2 rounded bg-primary text-white hover:bg-[#0f994b] disabled:opacity-50"
                        >
                            {loading ? "Loading..." : "Load More"}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}