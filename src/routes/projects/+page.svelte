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
		role="author"
		tags={['lua', 'neovim', 'dx']}
		href="https://github.com/imNel/monorepo.nvim"
		label="View Source"
	>
		<p>Switch between projects in a monorepo without leaving neovim. Built with <i>telescope.nvim</i> in mind.</p>
	</ProjectTile>
	<ProjectTile
		title="tsubi.club"
		role="developer"
		tags={['next.js', 'cloudflare workers', 'shopify headless']}
		href="https://tsubi.club"
		label="View Site"
	>
		<p>Storefront and blog for the musician <i>tsubi club</i>. Built by small team of devs with Next.js on Cloudflare Workers.</p>
	</ProjectTile>
	<ProjectTile
		title="this site"
		role="author"
		tags={['sveltekit', 'tailwind', 'github pages']}
		href="https://github.com/imNel/imnel.github.io"
		label="View Source"
	>
		<p>The site you're on! A statically generated site & blog built using SvelteKit's SSG adapter.</p>
	</ProjectTile>
</ul>
