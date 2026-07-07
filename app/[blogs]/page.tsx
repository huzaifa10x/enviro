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

async function getPosts(blogs: any) {
    const res = await fetch(`https://envirocleanuae.com/apistaging/api/posts/${blogs}`, {
        cache: "no-store",
    });
    if (!res.ok) {
        notFound();
    }
    return res.json();
}

export default async function page({ params }: { params: { blogs: string } }) {
    const { blogs } = params
    const data = await getPosts(blogs);
    if (!data) {
        notFound();
    }

    const slides = [
        {
            id: 1,
            subTitle: "",
            title: data.title,
            desc: ``,
            image: data.featured_image,
            actionTitle: '',
            actionUrl: ''
        },
    ];
    return (
        <div>
            <NavbarCarousel slides={slides} contentBottom={true} />
            <section className="my-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-6 gap-10">
                        <div className="lg:col-span-4 [&_ul]:list-disc [&_ul]:pl-6 [&_b]:text-2xl space-y-6" dangerouslySetInnerHTML={{ __html: data.content }} />

                        <div className="lg:col-span-2 space-y-5">
                            <div className="text-3xl font-semibold">Related Post</div>
                            <div className="space-y-6">
                                {data.related_posts.map((post: { slug: string | UrlObject; featured_image: string | StaticImport; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, key: Key | null | undefined) => (
                                    <div key={key}>
                                        <Link href={post.slug}>
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
            </section >

            <GoogleReviewsBlock />
            <ContactForm />
        </div >
    )
}