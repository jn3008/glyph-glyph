<script lang="ts">
  import { getAnswers } from "$/lib/answer";
  import { game_config } from "$lib/stores/game-config";
  import { isJapaneseWordMode } from "$lib/japanese-words";

  $: word_mode =
    $game_config.path_dict.alphabet === "kana" &&
    isJapaneseWordMode($game_config.path_dict.glyphs);

  export let glyph: string;
  export let answered: string | undefined = undefined;
  export let is_correct_answer: boolean | undefined = undefined;
  export let is_current: boolean = false;
  export let element: HTMLDivElement | undefined = undefined;

  let viewport_width = 0;
  let natural_word_width = 0;
  $: word_scale =
    word_mode && viewport_width > 0 && natural_word_width > 0
      ? Math.min(1, Math.max(1, viewport_width - 32) / natural_word_width)
      : 1;

  let glyph_width = 0;
  let answer_width = 0;

  $: has_answer = answered !== undefined;
  $: has_correct_answer = has_answer ? is_correct_answer : false;
  $: has_incorrect_answer = has_answer ? !is_correct_answer : false;
</script>

<svelte:window bind:innerWidth={viewport_width} />

<div class="quiz-item-wrapper">
  {#if word_mode}
    <span
      class="word-measure"
      aria-hidden="true"
      bind:clientWidth={natural_word_width}>{glyph}</span
    >
  {/if}
  <div
    class="quiz-item"
    style:font-size={word_mode ? `${4 * word_scale}em` : undefined}
    class:has-answer={has_answer}
    class:is-correct={has_correct_answer}
    class:is-incorrect={has_incorrect_answer}
    class:is-current={is_current}
    bind:this={element}
  >
    <div class="glyph" bind:clientWidth={glyph_width}>{glyph}</div>
    {#if has_incorrect_answer || (word_mode && has_answer)}
      <div
        class="romanisation"
        class:long={answer_width > glyph_width}
        bind:clientWidth={answer_width}
      >
        {#each word_mode ? getAnswers(glyph) : getAnswers(glyph).slice(0, 1) as answer}
          <span>{answer}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style lang="postcss">
  .quiz-item-wrapper {
    display: inline-block; /* needed to prevent overlapping animations */
  }

  /* Measure at the normal size so resizing never feeds back into the measurement. */
  .word-measure {
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    font-size: 4em;
    white-space: nowrap;
    width: max-content;
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
    bottom: calc(100% + 0.15em);
    left: 50%;
    width: max-content;
    transform: translateX(-50%);
    font-size: 0.5em;
    font-weight: 400;
    line-height: 1;
    text-align: center;
  }
  .romanisation span {
    display: block;
  }

  .romanisation span + span {
    margin-top: 0.2em;
    font-size: 0.7em;
  }

  .romanisation.long {
    bottom: calc(100% + 0.35em);
    left: 0;
    transform-origin: bottom left;
    transform: rotate(-45deg);
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
