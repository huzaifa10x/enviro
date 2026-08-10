/* eslint-disable @typescript-eslint/no-explicit-any */
import NavbarCarousel from "../components/NavbarCarousel";
import { JSX } from "react";
import { Metadata } from "next";
import { api_base_url } from "../utils";
import BlogGrid from "./blogGrid";

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

interface Slide {
    id: number;
    subTitle: string;
    title: string;
    desc: string;
    image: string;
    actionTitle: string;
    actionUrl: string;
}

const title = 'Blog - Enviro Clean UAE';
const description = 'Blog Discover the key to a fresher, healthier environment with our AC Cleaning Blog...';
const canonical = 'https://envirocleanuae.com/blog';

export const metadata: Metadata = {
    title: title,
    description: description,
    alternates: { canonical: canonical },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: title,
        description: description,
        url: canonical,
        siteName: 'EnviroClean UAE',
        images: [
            {
                url: 'https://envirocleanuae.com/images/og-main-banner.webp',
                width: 1200,
                height: 630,
                alt: 'EnviroClean AC Cleaning Services Dubai',
            },
        ],
        locale: 'en_AE',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai',
        description: 'EnviroClean UAE provides professional AC cleaning services in Dubai.',
        images: ['https://envirocleanuae.com/images/og-main-banner.webp'],
    },
};

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
            'name': 'Blog',
            'item': 'https://envirocleanuae.com/blog',
        },
    ],
};

async function getPosts(): Promise<PostsResponse> {
    try {
        // Build time static fetch (No cache: 'no-store')
        const res = await fetch(`${api_base_url}/api/posts?page=1`);
        if (!res.ok) {
            console.error("Failed to fetch initial posts, status:", res.status);
            return { posts: [] };
        }
        return (await res.json()) as PostsResponse;
    } catch (error) {
        console.error("Error fetching initial posts for blog page:", error);
        return { posts: [] };
    }
}

export default async function page(): Promise<JSX.Element> {
    const postsData = await getPosts();

    const slides: Slide[] = [
        {
            id: 1,
            subTitle: "",
            title: "<h1>Blog</h1>",
            desc: `Discover the key to a fresher, healthier environment with our AC Cleaning Blog. Unlock expert tips, step-by-step guides, and industry insights to ensure your air conditioning system operates at its best. From maintenance tricks to understanding the importance of clean air, empower yourself with knowledge for a cool and clean living space. Explore our blog now for a breath of fresh, informed air.`,
            image: "/images/blogbg.webp",
            actionTitle: 'Call Us',
            actionUrl: 'tel:+971800368476'
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />

            {/* Added container section for padding and width constraints */}
            <section className="my-12">
                <div className="max-w-7xl mx-auto px-6">
                    <BlogGrid initialData={postsData} />
                </div>
            </section>
        </>
    );
}