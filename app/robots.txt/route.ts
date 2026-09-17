export async function GET() {
    const body = `User-agent: *
Allow: /
Sitemap: https://envirocleanuae.com/sitemap.xml`.trim();

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}