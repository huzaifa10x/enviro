import { MetadataRoute } from 'next';

const BASE_URL = 'https://envirocleanuae.com';
const API_BASE_URL = 'https://api.envirocleanuae.com';

interface Blog {
    slug: string;
    updatedAt?: string;
    createdAt?: string;
}

interface ApiResponse {
    pagination: {
        total_pages: number;
    };
    posts: Blog[];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // 1. Static Pages
    const staticRoutes = ['', '/about', '/services', '/contact', '/blogs','/privacy-policy', '/terms-of-service', '/faq'];

    const staticMaps: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
    }));

    // 2. Fetch All Paginated Blogs
    let allBlogs: Blog[] = [];

    try {
        // First Call: Page 1 fetch karke Total Pages pta karenge
        const firstRes = await fetch(`${API_BASE_URL}/api/posts`, {
            next: { revalidate: 3600 }, // 1 Hour Cache
        });

        if (firstRes.ok) {
            const data: ApiResponse = await firstRes.json();
            allBlogs = [...(data.posts || [])];

            const totalPages = data.pagination?.total_pages || 1;

            // Agar total_pages 1 se ziada hain, to baaki pages parallel fetch karein
            if (totalPages > 1) {
                const pageRequests = [];
                for (let p = 2; p <= totalPages; p++) {
                    pageRequests.push(
                        fetch(`${API_BASE_URL}/api/posts?page=${p}`, {
                            next: { revalidate: 3600 },
                        }).then((res) => (res.ok ? res.json() : null))
                    );
                }

                const remainingPagesData = await Promise.all(pageRequests);

                remainingPagesData.forEach((pageData: ApiResponse | null) => {
                    if (pageData?.posts) {
                        allBlogs.push(...pageData.posts);
                    }
                });
            }
        }
    } catch (error) {
        console.error('Error fetching paginated blogs for sitemap:', error);
    }

    // 3. Map All Blogs to Sitemap
    const blogMaps: MetadataRoute.Sitemap = allBlogs.map((blog) => ({
        url: `${BASE_URL}/blogs/${blog.slug}`,
        lastModified: blog.updatedAt || blog.createdAt || new Date().toISOString(),
        changeFrequency: 'weekly',
        priority: 0.7,
    }));

    return [...staticMaps, ...blogMaps];
}