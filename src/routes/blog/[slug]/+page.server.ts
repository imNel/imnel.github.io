import { error } from '@sveltejs/kit';
import { getPost, getPosts } from '#lib/posts.js';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () => getPosts().map(({ slug }) => ({ slug }));

export const load: PageServerLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
};
