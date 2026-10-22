import { getPosts } from '#lib/posts.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ posts: getPosts() });
