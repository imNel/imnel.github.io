<script lang="ts">
	import { resolve } from '$app/paths';
	import { SITE_TITLE } from '#lib/site.js';
	import Tags from '../../../components/Tags.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>{data.post.title} - {SITE_TITLE}</title>
</svelte:head>

<article class="mx-auto w-full max-w-3xl">
	<a class="font-mono text-sm underline underline-offset-2" href={resolve('/blog')}>← Blog</a>
	<header class="mt-4 border-b border-text/40 pb-6">
		<h1 class="font-serif text-5xl leading-tight tracking-wide text-balance uppercase">
			{data.post.title}
		</h1>
		<div class="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
			<time class="font-mono text-xs tracking-widest uppercase opacity-60" datetime={data.post.date}
				>{data.post.date}</time
			>
			<Tags tags={data.post.tags} />
		</div>
	</header>
	<div class="prose mt-8 font-mono leading-relaxed">{@html data.post.html}</div>
</article>

<style>
	.prose :global(:where(p, ul, ol, blockquote)) {
		margin-top: 1rem;
	}
	.prose :global(:where(pre)),
	.prose :global(:where(pre) + *) {
		margin-top: 1.5rem;
	}
	.prose :global(:where(hr)),
	.prose :global(:where(hr) + *) {
		margin-top: 2rem;
	}
	.prose :global(:where(h1, h2, h3, h4, h5, h6)) {
		margin-top: 2.5rem;
		font-family: var(--font-mono);
		font-weight: 400;
		line-height: 1.3;
		text-wrap: balance;
	}
	.prose :global(:where(h1, h2, h3, h4, h5, h6) + *) {
		margin-top: 0.75rem;
	}
	.prose :global(:where(li + li, li > ul, li > ol)) {
		margin-top: 0.25rem;
	}
	.prose > :global(:first-child) {
		margin-top: 0;
	}

	.prose :global(:where(h1)) {
		font-size: var(--text-3xl);
	}
	.prose :global(:where(h2)) {
		font-size: var(--text-2xl);
	}
	.prose :global(:where(h3)) {
		font-size: var(--text-xl);
	}
	.prose :global(:where(h4, h5, h6)) {
		font-size: var(--text-lg);
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
		padding: 1rem;
		background: var(--color-pre-bg);
		font-size: var(--text-sm);
		line-height: 1.5;
		tab-size: 2;
	}
	.prose :global(.hljs-keyword) {
		color: var(--color-purple-text);
		background: var(--color-purple-bg);
	}
	.prose :global(:is(.hljs-string, .hljs-regexp)) {
		color: var(--color-green-text);
		background: var(--color-green-bg);
	}
	.prose :global(:is(.hljs-number, .hljs-literal)) {
		color: var(--color-teal-text);
		background: var(--color-teal-bg);
	}
	.prose :global(:is(.hljs-symbol, .hljs-name)) {
		color: var(--color-blue-text);
		background: var(--color-blue-bg);
	}
	.prose :global(:is(.hljs-subst, .hljs-attr)) {
		color: var(--color-orange-text);
		background: var(--color-orange-bg);
	}
	.prose :global(.hljs-comment) {
		font-style: italic;
		opacity: 0.6;
	}
	.prose :global(blockquote) {
		border-left: 1px solid color-mix(in srgb, var(--color-text) 40%, transparent);
		padding-left: 1rem;
		opacity: 0.8;
	}
	.prose :global(hr) {
		border-color: color-mix(in srgb, var(--color-text) 40%, transparent);
	}
	.prose :global(img) {
		margin-top: 1rem;
		max-width: 100%;
	}
</style>
