import { JSX, Suspense } from "react";
import { Metadata } from "next";
import NavbarCarousel from "../components/NavbarCarousel";
import BlogGrid from "./blogGrid";
import { api_base_url } from "../utils";
import blogbg from "@/public/images/blogbg.webp"
import { StaticImageData } from "next/image";

// /Users/macbook/Documents/Next Projects/enviro/app/blog/page.tsx

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
    pagination?: {
        total_posts: number;
        posts_per_page: number;
        current_page: number;
        total_pages: number;
        has_next_page: boolean;
        has_prev_page: boolean;
    };
}

interface Slide {
    id: number;
    subTitle: string;
    title: string;
    desc: string;
    image: StaticImageData;
    actionTitle: string;
    actionUrl: string;
}

const title = "Blog - Enviro Clean UAE";
const description =
    "Discover the key to a fresher, healthier environment with our AC Cleaning Blog. Unlock expert tips, step-by-step guides, and industry insights.";
const canonical = "https://envirocleanuae.com/blog";

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
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    openGraph: {
        title: title,
        description: description,
        url: canonical,
        siteName: "EnviroClean UAE",
        images: [
            {
                url: "https://envirocleanuae.com/images/og-main-banner.webp",
                width: 1200,
                height: 630,
                alt: "EnviroClean AC Cleaning Services Dubai",
            },
        ],
        locale: "en_AE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "AC Cleaning Dubai | Professional AC, Duct, Vent Cleaning in Dubai",
        description: "EnviroClean UAE provides professional AC cleaning services in Dubai.",
        images: ["https://envirocleanuae.com/images/og-main-banner.webp"],
    },
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://envirocleanuae.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://envirocleanuae.com/blog",
        },
    ],
};

const getBaseUrl = (): string => {
    const rawUrl = process.env.NEXT_PUBLIC_API_BASE_URL || api_base_url || "https://api.envirocleanuae.com";
    return rawUrl.replace(/\/$/, "");
};

async function getInitialPosts(): Promise<PostsResponse> {
    try {
        const BASE_URL = getBaseUrl();
        const res = await fetch(`${BASE_URL}/api/posts/?page=1`);

        if (!res.ok) {
            return { posts: [], last_page: 1 };
        }

        return (await res.json()) as PostsResponse;
    } catch (error) {
        console.error("Error fetching initial posts for blog page:", error);
        return { posts: [], last_page: 1 };
    }
}

export default async function Page(): Promise<JSX.Element> {
    const postsData = await getInitialPosts();

    const slides: Slide[] = [
        {
            id: 1,
            subTitle: "",
            title: "<h1>Blog</h1>",
            desc: `Discover the key to a fresher, healthier environment with our AC Cleaning Blog...`,
            image: blogbg,
            actionTitle: "Call Us",
            actionUrl: "tel:+971800368476",
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <NavbarCarousel slides={slides} contentBottom={true} />

            <section className="my-12">
                <div className="max-w-7xl mx-auto px-6">
                    <Suspense fallback={<div className="text-center py-10">Loading blog posts...</div>}>
                        {/* Fix: initialData ki jagah data aur currentPage pass karein */}
                        <BlogGrid data={postsData} currentPage={1} />
                    </Suspense>
                </div>
            </section>
        </>
    );
}