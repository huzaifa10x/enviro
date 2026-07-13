/* eslint-disable @typescript-eslint/no-explicit-any */
import NavbarCarousel from "../components/NavbarCarousel";
import { notFound } from "next/navigation";
import { JSX } from "react";
import { Metadata } from "next";
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
}

// Server-side fetching helper
async function getPosts(): Promise<PostsResponse> {
    // SERVER PAR HAMESHA ABSOLUTE URL YA DIRECT EXTERNAL API HIT KAREIN
    const res = await fetch(`https://envirocleanuae.com/apistaging/api/posts?page=1`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch initial posts");
    }
    return res.json() as Promise<PostsResponse>;
}

export default async function page(): Promise<JSX.Element> {
    let postsData: PostsResponse = { posts: [] }; // Fallback initialization

    try {
        const fetchedData = await getPosts();
        if (fetchedData && Array.isArray(fetchedData.posts)) {
            postsData = fetchedData;
        }
    } catch (e) {
        console.error("Error fetching blogs on server:", e);
    }

    const slides: Slide[] = [
        {
            id: 1,
            subTitle: "",
            title: "<h1>Blog</h1>",
            desc: `Discover the key to a fresher, healthier environment with our AC Cleaning Blog...`,
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
            {/* Ab postsData me pehle page ka data successfully jayega */}
            <BlogGrid initialData={postsData} />
        </>
    );
}