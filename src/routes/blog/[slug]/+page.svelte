<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_TITLE } from '#lib/site.js';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title} - {SITE_TITLE}</title>
	{#if data.post.description}
		<meta name="description" content={data.post.description} />
	{/if}
</svelte:head>

<article class="mx-auto w-full max-w-3xl">
	<a class="font-mono text-sm underline underline-offset-2" href={resolve('/blog')}>Back</a>
	<header class="mt-4">
		<h1 class="font-serif text-5xl tracking-wide uppercase">{data.post.title}</h1>
		<time class="font-mono text-xs tracking-widest uppercase opacity-60" datetime={data.post.date}
			>{data.post.date}</time
		>
	</header>
	<!-- Posts are our own markdown from /content, so rendering raw HTML is fine. -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="prose mt-8 font-mono leading-relaxed">{@html data.post.html}</div>
</article>

<style>
	.prose :global(:where(h1, h2, h3, h4)) {
		margin-top: 2rem;
		font-family: var(--font-serif);
		letter-spacing: var(--tracking-wide);
		text-transform: uppercase;
	}
	.prose :global(h1) {
		font-size: var(--text-4xl);
	}
	.prose :global(h2) {
		font-size: var(--text-3xl);
	}
	.prose :global(h3) {
		font-size: var(--text-2xl);
	}
	.prose :global(:where(p, ul, ol, pre, blockquote)) {
		margin-top: 1rem;
	}
	.prose :global(ul) {
		list-style: square;
		padding-left: 1.5rem;
	}
	.prose :global(ol) {
		list-style: decimal;
		padding-left: 1.5rem;
	}
	.prose :global(a) {
		text-decoration: underline;
		text-underline-offset: 2px;
	}
	.prose :global(:not(pre) > code) {
		background: var(--color-orange-bg);
		color: var(--color-orange-text);
		padding: 0 0.25rem;
	}
	.prose :global(pre) {
		overflow-x: auto;
		border: 1px solid color-mix(in srgb, var(--color-text) 40%, transparent);
		padding: 1rem;
	}
	.prose :global(blockquote) {
		border-left: 1px solid color-mix(in srgb, var(--color-text) 40%, transparent);
		padding-left: 1rem;
		opacity: 0.8;
	}
	.prose :global(hr) {
		margin-top: 2rem;
		border-color: color-mix(in srgb, var(--color-text) 40%, transparent);
	}
	.prose :global(img) {
		margin-top: 1rem;
		max-width: 100%;
	}
</style>
