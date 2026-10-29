<script lang="ts">
	let { tags = [] } = $props();

	// Full class strings so Tailwind can see them at build time.
	const highlights = [
		'bg-orange-bg text-orange-text',
		'bg-green-bg text-green-text',
		'bg-teal-bg text-teal-text',
		'bg-blue-bg text-blue-text',
		'bg-purple-bg text-purple-text'
	];
</script>

<ul class="flex flex-wrap gap-2 font-mono text-xs">
	{#each tags as tag, i (tag)}
		<li class="px-1 {highlights[i % highlights.length]}">{tag}</li>
	{/each}
</ul>
