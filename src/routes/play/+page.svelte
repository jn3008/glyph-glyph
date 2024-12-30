<script lang="ts">
	import Quiz from '$/lib/components/play/Quiz.svelte';
	import Input from '$/lib/components/play/Input.svelte';
	import Menu from '$/lib/components/play/Menu.svelte';
	import Stopwatch from '$/lib/components/play/Stopwatch.svelte';
	import { quiz } from '$/lib/stores/quiz';
	import { isCorrectAnswer } from '$/lib/answer';
	import { settings } from '$/lib/stores/settings';
	import { onMount, tick } from 'svelte';
	import { high_scores, updateHighScore } from '$/lib/stores/scores';
	import { game_config } from '$/lib/stores/game-config';

	let is_loading: boolean = true;
	let stopwatch_is_disabled: boolean = false;

	onMount(() => {
		const unsubscribe = quiz.subscribe(() => {
			is_loading = false;
		});

		// if the page reloads and current idx > 0 (game in progress),
		// then disable the stopwatch until the game restarts
		stopwatch_is_disabled = current_idx > 0;
		return () => unsubscribe();
	});

	const ALPHANUMERIC = /^[a-z0-9]+$/i;

	let input: string;
	let input_element: HTMLInputElement;

	$: items = $quiz.items;
	$: current_idx = $quiz.current_idx;
	$: current_item = items && items[current_idx];

	$: perfect_answers = items.slice(0, current_idx).every((item) => item?.is_correct_answer);
	$: configuration = $game_config.id;

	$: best_time = $high_scores[configuration];

	$: using_stopwatch = $settings.using_stopwatch;
	let stopwatch: Stopwatch;
	let elapsed_time = 0;
	let stopwatch_is_paused: boolean;
	let new_record_set: boolean = false;
	$: time_style = (
		stopwatch_is_disabled
			? 'inactive'
			: new_record_set
				? 'record-set'
				: !perfect_answers
					? 'incorrect'
					: stopwatch_is_paused
						? 'inactive'
						: 'normal'
	) as typeof stopwatch.time_style;

	function handleMenuEvent(type: string) {
		switch (type) {
			case 'restart':
				quiz.reset();
				if (using_stopwatch) {
					stopwatch?.resetTimer();
					stopwatch_is_disabled = false;
					new_record_set = false;
				}
				break;

			default:
				break;
		}
	}

	async function handleSubmit(input: string) {
		if (!$game_config.is_valid || !current_item) return;

		if (using_stopwatch && stopwatch_is_paused) stopwatch.startTimer();

		const is_correct = isCorrectAnswer(input, current_item.glyph);

		if (!is_correct && input === '') return;

		quiz.updateItem(current_idx, (item) => ({
			...item, // spread existing properties
			answered: input, // add the user's input
			is_correct_answer: is_correct // add correctness
		}));

		quiz.updateIndex(++current_idx);

		if (!stopwatch_is_disabled && current_idx == items.length)
			if (using_stopwatch && !stopwatch_is_paused) {
				stopwatch.stopTimer();

				if (perfect_answers)
					new_record_set = updateHighScore(configuration, elapsed_time);
			}

		await tick();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.isComposing) return;

		if (
			document.activeElement !== input_element &&
			event.key !== ' ' && // skip if space
			event.key.length === 1 && // skip if control character
			ALPHANUMERIC.test(event.key)
		) {
			input_element.focus();
		}
	}
</script>

<svelte:head>
	<title>Play · glyph-glyph</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div>
	<div class="top-bar">
		<a href="/" class="title">glyph-glyph</a>
		{#if !is_loading}
			{#if using_stopwatch}
				<Stopwatch
					bind:this={stopwatch}
					bind:elapsed_time
					bind:is_paused={stopwatch_is_paused}
					is_disabled={stopwatch_is_disabled}
					{best_time}
					{time_style}
				/>
			{/if}
		{/if}
	</div>

	<div class="contents">
		{#if is_loading}{:else}
			<Quiz {items} {current_idx} />
			<Input
				bind:input
				onSubmit={handleSubmit}
				current_glyph={current_item?.glyph}
				bind:input_element
			/>

			<Menu menu_event={handleMenuEvent} />
		{/if}
	</div>
</div>

<style lang="postcss">
	.contents {
		overflow-x: hidden;
		width: 100vw;
		padding-top: 18vh;
		overflow: hidden;
	}

	@media (max-height: 680px) {
		.contents {
			padding-top: 10vh;
		}
	}

	@media (max-height: 380px) {
		.contents {
			padding-top: 0vh;
		}
	}

	.top-bar {
		position: fixed;
		display: flex;
		width: 100vw;
		justify-content: space-between;
		align-items: center top;
	}
	.title {
		justify-content: left;
	}
</style>
