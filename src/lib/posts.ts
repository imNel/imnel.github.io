import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';

const marked = new Marked(
	markedHighlight({
		emptyLangClass: 'hljs',
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		}
	})
);

export type Post = {
	slug: string;
	title: string;
	tags: string[];
	date: string;
	body: string;
};

const files = import.meta.glob('/content/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

function parse(path: string, raw: string): Post {
	const slug = path.split('/').pop()!.replace(/\.md$/, ''); // get the slug from full path
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/); // get the front matter
	const meta: Record<string, string> = {};

	for (const line of match?.[1].split(/\r?\n/) ?? []) {
		const i = line.indexOf(':');
		if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
	}

	return {
		slug,
		title: meta.title ?? slug,
		tags:
			meta.tags
				?.split(',')
				.map((t) => t.trim())
				.filter(Boolean) ?? [],
		date: meta.date ?? '',
		body: match ? raw.slice(match[0].length) : raw
	};
}

const posts = Object.entries(files)
	.map(([path, raw]) => parse(path, raw))
	.sort((a, b) => b.date.localeCompare(a.date));

export function getPosts() {
	return posts.map(({ slug, title, tags, date }) => ({ slug, title, tags, date }));
}

export function getPost(slug: string) {
	const post = posts.find((p) => p.slug === slug);
	if (!post) return;
	return { ...post, html: marked.parse(post.body, { async: false }) };
}
