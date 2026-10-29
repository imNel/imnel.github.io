import { getPosts } from '#lib/posts.js';
import { SITE_URL } from '#lib/site.js';
import type { RequestHandler } from './$types';

export const prerender = true;

const pages = ['/', '/projects', '/blog'];

export const GET: RequestHandler = () => {
	const urls = [
		...pages.map((path) => ({ loc: `${SITE_URL}${path}` })),
		...getPosts().map((post) => ({ loc: `${SITE_URL}/blog/${post.slug}` }))
	]
		.map(
			({ loc }) => `
	<url>
		<loc>${loc}</loc>
	</url>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
