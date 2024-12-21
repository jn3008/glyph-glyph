<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Button from '$lib/components/Button.svelte';
	import BottomBar from '$lib/components/BottomBar.svelte';

	export let data: { stargazers?: number }; // Access data from `load`
	let stargazers = data?.stargazers ?? 0; // Fallback to 0 if undefined
</script>

<svelte:head>
	<title>glyph-glyph</title>
</svelte:head>

<Header {stargazers} />

<section class="content-padding container">
	<p>a game to help you learn different writing systems.</p>
</section>

<BottomBar justify_content="center">
	<Button href="setup" selected={true} title="Set-up">Set-up</Button>
</BottomBar>

<style lang="postcss">
	.container {
		width: 100vw;
	}
</style>
