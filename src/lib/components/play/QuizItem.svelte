<script lang="ts">
	import { getAnswers } from '$/lib/answer';

	export let glyph: string;
	export let answered: string | undefined = undefined;
	export let is_correct_answer: boolean | undefined = undefined;
	export let is_current: boolean = false;
	export let element: HTMLDivElement | undefined = undefined;

	$: has_answer = answered !== undefined;
	$: has_correct_answer = has_answer ? is_correct_answer : false;
	$: has_incorrect_answer = has_answer ? !is_correct_answer : false;
</script>

<div class="quiz-item-wrapper">
	<div
		class="quiz-item"
		class:has-answer={has_answer}
		class:is-correct={has_correct_answer}
		class:is-incorrect={has_incorrect_answer}
		class:is-current={is_current}
		bind:this={element}
	>
		<div class="glyph">{glyph}</div>
		{#if has_incorrect_answer}
			<div class="romanisation {getAnswers(glyph)[0].length > 3 ? 'long' : ''}">
				{getAnswers(glyph)[0]}
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.quiz-item-wrapper {
		display: inline-block; /* needed to prevent overlapping animations */
	}

	.quiz-item {
		font-size: 4em;
		white-space: nowrap;
		line-height: 1.2;
		position: relative;
		margin-top: 0.5em;
	}

	.romanisation {
		position: absolute;
		top: -1em;
		left: 0;
		right: 0;
		font-size: 0.5em;
		font-weight: 400;
		line-height: 1;
		text-align: center;
	}
	.romanisation.long {
		transform: translate(0, 0) rotate(calc(-45deg));
	}

	.is-current {
		text-decoration-color: var(--underline);
		text-decoration-line: underline;
		transition: transform 0.5s ease;
	}

	.is-correct {
		color: var(--text-color-light);
	}

	.is-incorrect {
		color: var(--highlight-color);
	}

	.is-incorrect > .glyph {
		text-decoration-color: var(--highlight-color);
	}
</style>
