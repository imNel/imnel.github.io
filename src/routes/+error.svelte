<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	let notFound = $derived(page.status === 404);
</script>

<svelte:head>
	<title>{page.status} · Nel</title>
</svelte:head>

<h1 class="font-serif text-5xl tracking-wide uppercase">
	{notFound ? 'Not Found' : 'Error'} - {page.status}
</h1>
<p class="py-4 font-mono leading-relaxed">
	Sorry, {notFound ? "this page doesn't exist." : (page.error?.message ?? 'something went wrong.')}
	<a class="underline underline-offset-2" href={resolve('/')}>Return to home.</a>
</p>
