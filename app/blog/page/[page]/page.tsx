import { JSX } from "react";
import BlogGrid from "@/app/blog/blogGrid";
import { api_base_url } from "@/app/utils";
import NavbarCarousel from "@/app/components/NavbarCarousel";

const getBaseUrl = (): string => {
    const rawUrl = process.env.NEXT_PUBLIC_API_BASE_URL || api_base_url || "https://api.envirocleanuae.com";
    return rawUrl.replace(/\/$/, "");
};

async function getPosts(page: number) {
    try {
        const BASE_URL = getBaseUrl();
        const res = await fetch(`${BASE_URL}/api/posts/?page=${page}`);
        if (!res.ok) return { posts: [], pagination: { total_pages: 1 } };
        return await res.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
        return { posts: [], pagination: { total_pages: 1 } };
    }
}

// Build time par Page 2, Page 3, etc. generate karega
export async function generateStaticParams() {
    try {
        const initialData = await getPosts(1);
        const totalPages = initialData?.pagination?.total_pages || 1;

        const pages = [];
        for (let i = 2; i <= totalPages; i++) {
            pages.push({ page: i.toString() });
        }
        return pages;
    } catch {
        return [];
    }
}

export default async function Page({
    params,
}: {
    params: Promise<{ page: string }>;
}): Promise<JSX.Element> {
    const resolvedParams = await params;
    const currentPage = Number(resolvedParams.page) || 1;
    const postsData = await getPosts(currentPage);

    const slides = [
        {
            id: 1,
            subTitle: "",
            title: "<h1>Blog</h1>",
            desc: `Discover the key to a fresher, healthier environment with our AC Cleaning Blog...`,
            image: "/images/blogbg.webp",
            actionTitle: "Call Us",
            actionUrl: "tel:+971800368476",
        },
    ];

    return (
        <>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="my-12">
                <div className="max-w-7xl mx-auto px-6">
                    <BlogGrid data={postsData} currentPage={currentPage} />
                </div>
            </section>
        </>
    );
}