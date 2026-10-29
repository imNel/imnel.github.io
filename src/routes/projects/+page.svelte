<script>
	import { SITE_TITLE } from '#lib/site.js';
	import ProjectTile from '../../components/ProjectTile.svelte';
</script>

<svelte:head>
	<title>Projects - {SITE_TITLE}</title>
</svelte:head>

<h1 class="font-serif text-5xl tracking-wide uppercase">Projects</h1>
<ul class="mt-2">
	<ProjectTile
		title="monorepo.nvim"
		role="maintainer"
		tags={['lua', 'neovim', 'DX']}
		href="https://github.com/imNel/monorepo.nvim"
		label="View Source"
	>
		<p>A monorepo manager for neovim built with telescope.nvim in mind.</p>
	</ProjectTile>
	<ProjectTile
		title="tsubi.club"
		role="developer"
		tags={['react', 'cloudflare workers', 'shopify headless']}
		href="https://tsubi.club"
		label="View Site"
	>
		<p>The website</p>
	</ProjectTile>
	<ProjectTile
		title="this site"
		role="developer"
		tags={['sveltekit', 'github pages']}
		href="https://github.com/imNel/imnel.github.io"
		label="View Source"
	>
		<p>The site</p>
	</ProjectTile>
</ul>
