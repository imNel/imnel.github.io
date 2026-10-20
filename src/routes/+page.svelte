<svelte:head>
	<title>Nel</title>
</svelte:head>

<section class="mx-auto flex max-w-3xl flex-1 flex-col justify-center text-center">
	<h1 class="fly-in font-serif text-6xl tracking-wide uppercase" style:--i="0">Hi, I'm Nel</h1>

	<p class="mt-6 font-mono text-lg leading-relaxed">
		<span class="fly-in" style:--i="1">
			I build websites in
			<span class="bg-blue-bg px-1 text-blue-text">typescript</span>,
		</span>
		<span class="fly-in" style:--i="2">
			create typesafe
			<span class="bg-orange-bg px-1 text-orange-text">design systems</span>,
		</span>
		<span class="fly-in" style:--i="3">and spend too much time</span>
		<span class="fly-in" style:--i="4">
			configuring <span class="bg-purple-bg px-1 text-purple-text">neovim</span> and
			<span class="bg-green-bg px-1 text-green-text">linux</span>.
		</span>
	</p>
</section>

<style>
	.fly-in {
		display: inline-block;
		animation: fly-in 600ms cubic-bezier(0.2, 1, 0.5, 1) both;
		animation-delay: calc(var(--i) * 250ms);
	}

	h1.fly-in {
		display: block;
	}

	@keyframes fly-in {
		from {
			opacity: 0;
			transform: translateY(1.5rem);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.fly-in {
			animation: none;
		}
	}
</style>
