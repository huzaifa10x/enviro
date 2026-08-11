import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Post {
    id: number;
    title: string;
    slug: string;
    featured_image: string;
    excerpt: string;
}

interface Pagination {
    total_posts: number;
    posts_per_page: number;
    current_page: number;
    total_pages: number;
    has_next_page: boolean;
    has_prev_page: boolean;
}

interface PostsResponse {
    pagination?: Pagination;
    posts?: Post[];
}

export default function BlogGrid({
    data,
    currentPage = 1,
}: {
    data?: PostsResponse;
    currentPage?: number;
}) {
    const posts = data?.posts || [];
    const totalPages = data?.pagination?.total_pages || 1;

    if (posts.length === 0) {
        return (
            <div className="text-center py-12 text-gray-500 font-medium">
                No blog posts found.
            </div>
        );
    }

    return (
        <div className="space-y-10">
            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
                    >
                        <div>
                            <div className="relative h-48 w-full bg-gray-100">
                                <Image
                                    src={post.featured_image || "/images/placeholder.webp"}
                                    alt={post.title ? post.title.replace(/<[^>]*>/g, '') : "Blog post"}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5 space-y-3">
                                <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                                    <span dangerouslySetInnerHTML={{ __html: post.title }} />
                                </h2>
                                <div
                                    className="text-gray-600 text-sm line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt ? post.excerpt.replace(/<[^>]*>/g, '') : '',
                                    }}
                                />
                            </div>
                        </div>

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

            {/* Pagination Links */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 pt-6">
                    {currentPage > 1 ? (
                        <Link
                            href={currentPage - 1 === 1 ? "/blog" : `/blog/page/${currentPage - 1}`}
                            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md"
                        >
                            Previous
                        </Link>
                    ) : (
                        <span className="bg-gray-200 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed">
                            Previous
                        </span>
                    )}

                    <span className="text-gray-700 font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    {currentPage < totalPages ? (
                        <Link
                            href={`/blog/page/${currentPage + 1}`}
                            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md"
                        >
                            Next
                        </Link>
                    ) : (
                        <span className="bg-gray-200 text-gray-400 font-semibold py-2 px-6 rounded-lg cursor-not-allowed">
                            Next
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}