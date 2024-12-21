<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import BottomBar from '$lib/components/BottomBar.svelte';
	import Config from '$/lib/components/setup/Config.svelte';
	import Preview from '$/lib/components/setup/Preview.svelte';
	import ColourPalette from '$/lib/components/ColourPalette.svelte';

	import { formatTime } from '$/lib/utils';
	import { onMount } from 'svelte';
	import { quiz } from '$/lib/stores/quiz';
	import { game_config } from '$/lib/stores/game-config';
	import { settings, toggleStopwatch } from '$/lib/stores/settings';
	import { high_scores } from '$/lib/stores/scores';

	let is_loading = true;

	$: configuration = $game_config.id;
	$: high_score = $high_scores[configuration];

	// This function helps avoid showing incomplete or uninitialized content to the user.
	// sets `is_loading` to `false` once the store emits its first value, (once the store is loaded)
	onMount(() => {
		// wait for stores to load
		const unsubscribe = quiz.subscribe(() => {
			is_loading = false;
		});

		return () => unsubscribe();
	});
</script>

<svelte:head>
	<title>Setup · glyph-glyph</title>
</svelte:head>

<div class="wrapper">
	<div class="top-bar">
		<a href="/" class="title">glyph-glyph</a>
		<span class="palette"><ColourPalette /></span>
	</div>
	{#if !is_loading}
		<Config />
		<Preview />
	{/if}
</div>

<BottomBar>
	<div class="stopwatch-section">
		<Button
			on:click={() => {
				toggleStopwatch();
			}}
			selected={$settings.using_stopwatch}
			title="Turn stopwatch {$settings.using_stopwatch ? 'off' : 'on'}"
		>
			<span class="stopwatch-button-content">
				Use Stopwatch

				<span class="material-symbols-rounded icon">timer</span>
			</span>
		</Button>

		{#if $game_config.is_valid && $settings.using_stopwatch}
			<span class="high-score" class:not-set={high_score < 0}>
				{formatTime(high_score)}s
			</span>
		{/if}
	</div>

	{#if $game_config.is_valid}
		<Button
			href="play"
			on:click={() => {
				quiz.reset();
			}}
			selected={true}
			title="Start game"
		>
			Start
		</Button>
	{:else}
		<Button style="disactivated">Start</Button>
	{/if}
</BottomBar>


<style lang="postcss">
	.stopwatch-section {
		position: relative;
		display: flex;
		gap: 1em;

		white-space: nowrap; /* prevent line breaks */
	}
	.high-score {
		position: relative;
		border: 2px solid var(--dark-button-color-selected);
		border-radius: 0.25em;
		margin: auto;
		display: flex;
		font-size: 1.4em;
		font-weight: 500;
		padding: calc(0.6rem - 1px) 1rem; /* minus border */

		color: var(--dark-button-text-color-selected);
	}

	.high-score.not-set {
		color: var(--text-color-light);
	}
	.high-score::before {
		content: 'High score';
		position: absolute;
		top: -0.8em;
		left: 0.15em;
		background-color: var(--background-contrast);
		padding: 0 0.4em;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--dark-button-color-selected);
	}

	.stopwatch-button-content {
		display: flex;
		gap: 0.3em;
		height: 100%;
		vertical-align: middle;
		justify-content: center;
		margin: auto;
	}
	.icon {
		margin: auto;
		font-size: 1.2em;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-x: hidden;

		position: relative;
		overflow-y: auto;
		padding-bottom: 6em;
	}

	.top-bar {
		display: flex;
		width: 100vw;
		justify-content: space-between;
		align-items: center top;
	}
	.title {
		justify-content: left;
	}
	.title {
		justify-content: right;
	}
</style>
