<script lang="ts">
	let { title, children, role, href, label, tags = [] } = $props();

	// Full class strings so Tailwind can see them at build time.
	const highlights = [
		'bg-orange-bg text-orange-text',
		'bg-green-bg text-green-text',
		'bg-teal-bg text-teal-text',
		'bg-blue-bg text-blue-text',
		'bg-purple-bg text-purple-text'
	];
</script>

<li class="border-text/40 py-6 not-last:border-b">
	<div class="flex items-baseline justify-between gap-4">
		<h2 class="font-serif text-3xl tracking-wide uppercase">{title}</h2>
		<p class="font-mono text-xs tracking-widest uppercase opacity-60">{role}</p>
	</div>
	<div class="mt-2 leading-relaxed font-mono">{@render children()}</div>
	<div class="mt-4 flex flex-wrap items-center justify-between gap-4">
		<ul class="flex flex-wrap gap-2 font-mono text-xs">
			{#each tags as tag, i (tag)}
				<li class="px-1 {highlights[i % highlights.length]}">{tag}</li>
			{/each}
		</ul>
		<a
			class="font-mono text-sm underline underline-offset-4"
			{href}
			target="_blank"
			rel="noopener noreferrer">{label}</a
		>
	</div>
</li>
