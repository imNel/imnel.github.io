<script>
	import { resolve } from '$app/paths';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
</script>

<nav class="mx-auto w-full max-w-3xl p-4 font-serif text-3xl tracking-wide uppercase opacity-60">
	<ul data-sveltekit-preload-data class="flex gap-4">
		<li class="flex-1">Nel</li>
		<li><a href={resolve('/')}>Home</a></li>
		<li><a href={resolve('/projects')}>Projects</a></li>
		<li><a href={resolve('/blog')}>Blog</a></li>
		<li class="flex-1 text-end"><ThemeSwitcher /></li>
	</ul>
</nav>
