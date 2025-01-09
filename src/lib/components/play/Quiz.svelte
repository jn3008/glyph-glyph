<script lang="ts">
  import QuizItemComponent from "$lib/components/play/QuizItem.svelte";
  import { type QuizItem } from "$/lib/stores/quiz";
  import { onMount, tick } from "svelte";
  import { map, c01, ease } from "$/lib/utils";

  export let items: QuizItem[];
  export let current_idx: number;

  let current_offset: number = 0;

  $: (items || current_idx) && calculateOffset(); // Recalculate when items or current_idx changes

  let container: HTMLElement;

  let no_transition: boolean = true; // Disable transitions when resizing or refreshing

  /* Function to calculate current_offset; sums up the width of each glyph up until the current glyph */
  async function calculateOffset(): Promise<void> {
    // Wait for DOM updates to finish before calculating the width of each glyph
    await tick();

    if (!container) return;
    const quizItems = container.querySelectorAll(
      ".quiz-content > .quiz-glyph"
    ) as NodeListOf<HTMLElement>;

    current_offset = 0;

    // Sum widths of items before the current one
    for (let i = 0; i < current_idx; i++)
      current_offset += quizItems[i]?.getBoundingClientRect().width || 0;

    // Add half the width of the current item
    current_offset += (quizItems[current_idx]?.offsetWidth || 0) / 2;
  }

  async function pauseTransitions(): Promise<void> {
    no_transition = true;
    await tick();
    setTimeout(() => {
      no_transition = false;
    }, 2);
  }

  onMount(() => {
    calculateOffset(); // Ensure offset is recalculated after DOM is rendered
    pauseTransitions();
  });

  function calculateBlur(index: number): number {
    const max_blur = 10;
    let blur = Math.abs(index - current_idx);
    blur = ease(c01(map(blur, 0, 8, 0, 1)), 2) * max_blur;
    return blur;
  }

  // Disable transitions temporarily on resize
  window.addEventListener("resize", () => {
    pauseTransitions();
  });
</script>

<section class="quiz-container" bind:this={container}>
  <div
    class="quiz-content {no_transition ? 'no-transition' : ''}"
    style="transform: translateX(calc(50vw - {current_offset}px));"
  >
    {#each items as { id, glyph, answered, is_correct_answer }, i (id)}
      <div
        class="quiz-glyph {i === current_idx ? 'current' : ''}"
        style="filter: blur(calc({calculateBlur(i)}px))"
      >
        <QuizItemComponent
          {glyph}
          {answered}
          {is_correct_answer}
          is_current={i == current_idx}
        />
      </div>
    {/each}
  </div>
</section>

<style lang="postcss">
  .quiz-content {
    display: flex;
    transition: transform 0.4s ease-out;
    transition-timing-function: var(--ease-out-better);
  }

  .quiz-content.no-transition {
    transition: none;
  }

  .quiz-container {
    display: flex;
    padding: 4em 0 3em;
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }

  @media (max-width: 680px) or (max-height: 680px) {
    .quiz-container {
      padding: 5em 0 2em;
      font-size: 80%;
    }
  }

  .quiz-glyph {
    flex: 0 0 auto;
    box-sizing: border-box;
    padding: 0em 0.6em; /* pad either side */

    min-width: 0; /* prevent content from overflowing */
  }
</style>
