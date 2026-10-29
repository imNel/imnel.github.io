<script>
	import github from '#lib/assets/icons/github.svg?raw';

	const links = [{ label: 'GitHub', href: 'https://github.com/imNel', icon: github }];
</script>

<ul class="flex justify-end gap-4">
	{#each links as { label, href, icon } (href)}
		<li>
			<a
				class="block size-6 opacity-60 transition-opacity hover:opacity-100 [&>svg]:size-full [&_path]:fill-text"
				{href}
				aria-label={label}
				title={label}
				target="_blank"
				rel="noopener noreferrer"
			>
				{@html icon}
			</a>
		</li>
	{/each}
</ul>
