<script lang="ts">
	import Tags from './Tags.svelte';

	let { title, children, role, href, label, tags = [] } = $props();
</script>

<li class="border-text/40 py-6 not-last:border-b">
	<div class="flex items-baseline justify-between gap-4">
		<h2 class="font-serif text-3xl tracking-wide uppercase">{title}</h2>
		<p class="font-mono text-xs tracking-widest uppercase opacity-60">{role}</p>
	</div>
	<div class="mt-2 font-mono leading-relaxed">{@render children()}</div>
	<div class="mt-4 flex flex-wrap items-center justify-between gap-4">
		<Tags {tags} />
		<a
			class="font-mono text-sm underline underline-offset-2"
			{href}
			target="_blank"
			rel="noopener noreferrer">{label}</a
		>
	</div>
</li>
