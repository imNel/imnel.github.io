<script lang="ts">
	import './layout.css';
	import favicon from '#lib/assets/favicon.svg';
	import instrumentSerif from '@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url';
	import type { LayoutProps } from './$types';
	import TopNav from '../components/TopNav.svelte';
	import Footer from '../components/Footer.svelte';

	let { children }: LayoutProps = $props();

	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="alternate" type="application/rss+xml" title="Blog" href="/blog/rss.xml" />
	<link rel="preload" href={instrumentSerif} as="font" type="font/woff2" crossorigin="anonymous" />
</svelte:head>

<div class="relative flex min-h-screen min-w-0 flex-col">
	<div class="graph-paper absolute inset-0 z-[-1]"></div>
	<TopNav />
	<div class="mx-auto flex w-full max-w-3xl flex-1 flex-col p-4">
		{@render children()}
	</div>
	<Footer />
</div>
