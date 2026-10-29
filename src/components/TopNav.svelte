<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import SocialLinks from './SocialLinks.svelte';

	const links = [
		{ href: resolve('/'), label: 'Home' },
		{ href: resolve('/projects'), label: 'Projects' },
		{ href: resolve('/blog'), label: 'Blog' }
	];

	const isActive = (href: string) =>
		page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
</script>

<nav class="mx-auto w-full max-w-3xl p-4 font-serif text-2xl tracking-wide uppercase sm:text-3xl">
	<ul data-sveltekit-preload-data class="flex gap-4">
		<li class="hidden flex-1 opacity-60 sm:block">Nel</li>
		{#each links as { href, label } (href)}
			<li>
				<a
					class="relative {isActive(href) ? '' : 'opacity-60'}"
					{href}
					aria-current={isActive(href) ? 'page' : undefined}
				>
					{label}
					{#if isActive(href)}
						<span class="nav-indicator absolute inset-x-0 -bottom-0.5 h-px bg-current"></span>
					{/if}
				</a>
			</li>
		{/each}
		<li class="flex flex-1 items-center justify-end"><SocialLinks /></li>
	</ul>
</nav>

<style>
	.nav-indicator {
		view-transition-name: nav-indicator;
	}
</style>
