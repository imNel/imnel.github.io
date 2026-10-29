import { getPosts } from '#lib/posts.js';
import { SITE_TITLE, SITE_URL } from '#lib/site.js';
import type { RequestHandler } from './$types';

export const prerender = true;

const escape = (s: string) =>
	s.replace(
		/[<>&'"]/g,
		(c) => `&${{ '<': 'lt', '>': 'gt', '&': 'amp', "'": 'apos', '"': 'quot' }[c]};`
	);

export const GET: RequestHandler = () => {
	const items = getPosts()
		.map((post) => {
			const url = `${SITE_URL}/blog/${post.slug}`;
			const categories = post.tags.map((tag) => `\n			<category>${escape(tag)}</category>`).join('');
			return `
		<item>
			<title>${escape(post.title)}</title>${categories}
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
			<link>${url}</link>
			<guid isPermaLink="true">${url}</guid>
		</item>`;
		})
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escape(SITE_TITLE)} — Blog</title>
		<link>${SITE_URL}/blog</link>
		<description>Posts from ${escape(SITE_TITLE)}</description>
		<language>en</language>
		<atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
	</channel>
</rss>
`;

	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
