import Image from "next/image";
import ContactForm from "../components/home/ContactForm";
import NavbarCarousel from "../components/NavbarCarousel";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { api_base_url } from "../utils";

export const dynamicParams = false;

interface RelatedPost {
    id?: number;
    slug: string;
    title: string;
    featured_image: string;
}

interface PostDetail {
    id: number;
    title: string;
    slug: string;
    content: string;
    excerpt?: string;
    featured_image?: string;
    date?: string;
    related_posts?: RelatedPost[];
}

const getBaseUrl = () => {
    const rawUrl = process.env.NEXT_PUBLIC_API_BASE_URL || api_base_url || "https://api.envirocleanuae.com";
    return rawUrl.replace(/\/$/, "");
};

export async function generateStaticParams() {
    try {
        const BASE_URL = getBaseUrl();
        const res = await fetch(`${BASE_URL}/api/posts`);

        if (!res.ok) {
            console.warn("API call failed in generateStaticParams, returning empty array");
            return [];
        }

        const data = await res.json();
        const posts: PostDetail[] = Array.isArray(data) ? data : data.posts || [];

        return posts.map((post) => ({
            blogs: String(post.slug || post.id),
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

async function getPosts(blogs: string): Promise<PostDetail | null> {
    try {
        const BASE_URL = getBaseUrl();
        const res = await fetch(`${BASE_URL}/api/posts/${blogs}`);
        if (!res.ok) return null;
        return await res.json();
    } catch (error) {
        console.error("Error fetching post data:", error);
        return null;
    }
}

export async function generateMetadata({ params }: { params: Promise<{ blogs: string }> }): Promise<Metadata> {
    const { blogs } = await params;
    const data = await getPosts(blogs);

    if (!data) return {};

    const cleanTitle = data.title.replace(/<[^>]*>/g, '');
    const pageTitle = `${cleanTitle} | EnviroClean UAE`;
    const pageDescription = data.excerpt
        ? data.excerpt.replace(/<[^>]*>/g, '').slice(0, 160)
        : `Read our latest article: ${cleanTitle}`;
    const canonicalUrl = `https://envirocleanuae.com/${blogs}`;
    const imageUrl = data.featured_image || 'https://envirocleanuae.com/images/og-main-banner.webp';

    return {
        title: pageTitle,
        description: pageDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            siteName: 'EnviroClean UAE',
            type: 'article',
            publishedTime: data.date,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: cleanTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: [imageUrl],
        },
    };
}

export default async function Page({ params }: { params: Promise<{ blogs: string }> }) {
    const { blogs } = await params;
    const data = await getPosts(blogs);

    if (!data) {
        notFound();
    }

    const slides = [
        {
            id: 1,
            subTitle: "",
            title: `<h1>${data.title}</h1>`,
            desc: ``,
            image: data.featured_image || "/images/placeholder.webp",
            actionTitle: '',
            actionUrl: ''
        },
    ];

    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://envirocleanuae.com',
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': data.title.replace(/<[^>]*>/g, ''),
                'item': `https://envirocleanuae.com/${blogs}`,
            },
        ],
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="my-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-6 gap-10">
                        {/* Main Blog Content */}
                        <div
                            className="lg:col-span-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_b]:text-2xl space-y-6 overflow-hidden"
                            dangerouslySetInnerHTML={{ __html: data.content }}
                        />

                        {/* Sidebar: Related Posts */}
                        <div className="lg:col-span-2 space-y-5">
                            <h2 className="text-3xl font-semibold">Related Posts</h2>
                            <div className="space-y-6">
                                {data.related_posts && data.related_posts.length > 0 ? (
                                    data.related_posts.map((post, idx) => (
                                        <div key={post.slug || idx}>
                                            <Link href={`/${post.slug}`}>
                                                <div className="grid grid-cols-5 gap-4 shrink-0 group">
                                                    <div className="col-span-2 relative h-[90px] rounded-md overflow-hidden">
                                                        <Image
                                                            src={post.featured_image || "/images/placeholder.webp"}
                                                            alt={post.title.replace(/<[^>]*>/g, '') || "Related post"}
                                                            fill
                                                            sizes="120px"
                                                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                                                        />
                                                    </div>
                                                    <div
                                                        className="col-span-3 font-semibold text-sm group-hover:text-[#10b981] transition-colors duration-200 line-clamp-3"
                                                        dangerouslySetInnerHTML={{ __html: post.title }}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">No related posts found.</p>
                                )}
                            </div>
                            <div className="pt-2">
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium text-sm py-2 px-5 rounded-md transition-colors duration-200 shadow-sm"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleReviewsBlock />
            <ContactForm />
        </div>
    );
}