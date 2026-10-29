<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_TITLE } from '#lib/site.js';
	import Tags from '../../components/Tags.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Blog - {SITE_TITLE}</title>
</svelte:head>

<h1 class="font-serif text-5xl tracking-wide uppercase">Blog</h1>
<ul class="mt-2">
	{#each data.posts as post (post.slug)}
		<li class="border-text/40 py-6 not-last:border-b">
			<div class="flex items-baseline justify-between gap-4">
				<h2 class="font-serif text-3xl tracking-wide uppercase">
					<a href={resolve('/blog/[slug]', { slug: post.slug })}>{post.title}</a>
				</h2>
				<time class="font-mono text-xs tracking-widest uppercase opacity-60" datetime={post.date}>
					{post.date}
				</time>
			</div>
			<div class="mt-4"><Tags tags={post.tags} /></div>
		</li>
	{/each}
</ul>
