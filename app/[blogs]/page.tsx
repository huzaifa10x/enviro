/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import ContactForm from "../components/home/ContactForm";
import NavbarCarousel from "../components/NavbarCarousel";
import GoogleReviewsBlock from "../GoogleReviewsBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";
import { UrlObject } from "url";
import { Metadata } from "next";
import { api_base_url } from "../utils";

// Force static export handling
export const dynamicParams = false;

export async function generateStaticParams() {
    try {
        const res = await fetch(`${api_base_url}/api/posts`);

        if (!res.ok) {
            console.warn("API call failed in generateStaticParams, returning empty array");
            return [];
        }

        const data = await res.json();
        const posts = Array.isArray(data) ? data : data.posts || [];

        return posts.map((post: any) => ({
            blogs: String(post.slug || post.id),
        }));
    } catch (error) {
        console.error("Error generating static params:", error);
        return [];
    }
}

async function getPosts(blogs: string) {
    try {
        const res = await fetch(`${api_base_url}/api/posts/${blogs}`);
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

    const pageTitle = `${data.title} | EnviroClean UAE`;
    const pageDescription = data.excerpt ? data.excerpt.replace(/<[^>]*>/g, '').slice(0, 160) : `Read our latest article: ${data.title}`;
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
                    alt: data.title,
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

export default async function page({ params }: { params: Promise<{ blogs: string }> }) {
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
            image: data.featured_image,
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
                'name': data.title,
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
                        <div className="lg:col-span-4 [&_ul]:list-disc [&_ul]:pl-6 [&_b]:text-2xl space-y-6" dangerouslySetInnerHTML={{ __html: data.content }} />

                        <div className="lg:col-span-2 space-y-5">
                            <div className="text-3xl font-semibold">Related Post</div>
                            <div className="space-y-6">
                                {data.related_posts?.map((post: { slug: string | UrlObject; featured_image: string | StaticImport; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, key: Key | null | undefined) => (
                                    <div key={key}>
                                        <Link href={"/" + post.slug}>
                                            <div className="grid grid-cols-5 gap-5 shrink-0">
                                                <div className="col-span-2 relative h-[100px]">
                                                    <Image
                                                        src={post.featured_image}
                                                        alt=""
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="col-span-3 font-semibold text-sm">{post.title}</div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <Link href={`/blog`} className="flex items-center w-fit bg-[#10b981] hover:bg-[#0e9f6e] text-white font-medium text-sm py-2 px-5 rounded-md transition-colors duration-200 shadow-sm">
                                    Read More <ArrowRight />
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