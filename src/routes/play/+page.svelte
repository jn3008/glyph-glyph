<script lang="ts">
  import Quiz from "$/lib/components/play/Quiz.svelte";
  import Input from "$/lib/components/play/Input.svelte";
  import Menu from "$/lib/components/play/Menu.svelte";
  import Stopwatch from "$/lib/components/play/Stopwatch.svelte";
  import { quiz } from "$/lib/stores/quiz";
  import { isCorrectAnswer } from "$/lib/answer";
  import { settings, toggleAutoSubmit } from "$/lib/stores/settings";
  import { onMount, tick } from "svelte";
  import { high_scores, updateHighScore } from "$/lib/stores/scores";
  import { game_config, refreshGameConfig } from "$/lib/stores/game-config";

  let is_loading: boolean = true;
  let stopwatch_is_disabled: boolean = false;

  let is_keyboard_open = false;

  function checkKeyboardState() {
    if (window.visualViewport)
      is_keyboard_open = window.visualViewport.height < window.innerHeight;
  }
  onMount(() => {
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", checkKeyboardState);
      checkKeyboardState();
    }

    const unsubscribe = quiz.subscribe(() => {
      is_loading = false;
    });

    // if the page reloads and current idx > 0 (game in progress),
    // then disable the stopwatch until the game restarts
    stopwatch_is_disabled = current_idx > 0;
    return () => {
      if (window.visualViewport)
        window.visualViewport.removeEventListener("resize", checkKeyboardState);
      unsubscribe();
    };
  });

  const ALPHANUMERIC = /^[a-z0-9]+$/i;

  let input: string;
  let input_element: HTMLInputElement;

  $: items = $quiz.items;
  $: current_idx = $quiz.current_idx;
  $: current_item = items && items[current_idx];

  $: perfect_answers = items
    .slice(0, current_idx)
    .every((item) => item?.is_correct_answer);
  $: configuration = $game_config.id;

  $: best_time = $high_scores[configuration];

  $: using_stopwatch = $settings.using_stopwatch;
  let stopwatch: Stopwatch;
  let elapsed_time = 0;
  let stopwatch_is_paused: boolean;
  let new_record_set: boolean = false;
  $: time_style = (
    stopwatch_is_disabled
      ? "inactive"
      : new_record_set
        ? "record-set"
        : !perfect_answers
          ? "incorrect"
          : stopwatch_is_paused
            ? "inactive"
            : "normal"
  ) as typeof stopwatch.time_style;

  function handleMenuEvent(type: string) {
    switch (type) {
      case "restart":
        // if we're in hangul syllables mode, re-generated the random syllables on restart
        if (
          $game_config.path.includes("hangul") &&
          $game_config.path.includes("syllables")
        )
          refreshGameConfig();

        quiz.reset();
        if (using_stopwatch) {
          stopwatch?.resetTimer();
          stopwatch_is_disabled = false;
          new_record_set = false;
        }
        break;

      case "toggle-auto-submit":
        toggleAutoSubmit();
      default:
        break;
    }
  }

  async function handleSubmit(input: string) {
    if (!$game_config.is_valid || !current_item) return;

    if (using_stopwatch && stopwatch_is_paused) stopwatch.startTimer();

    const is_correct = isCorrectAnswer(input, current_item.glyph);

    if (!is_correct && input === "") return;

    quiz.updateItem(current_idx, (item) => ({
      ...item, // spread existing properties
      answered: input, // add the user's input
      is_correct_answer: is_correct, // add correctness
    }));

    quiz.updateIndex(++current_idx);

    await tick(); // update perfect_answers

    if (!stopwatch_is_disabled && current_idx == items.length)
      if (using_stopwatch && !stopwatch_is_paused) {
        stopwatch.stopTimer();

        if (perfect_answers)
          new_record_set = updateHighScore(configuration, elapsed_time);
      }

    await tick(); // update high score in UI
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.isComposing) return;

    if (
      document.activeElement !== input_element &&
      event.key !== " " && // skip if space
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
  <div class="contents">
    <div class="top-bar">
      <div>
        <a href="/">glyph-glyph</a>
        <span class="config-id">{$game_config.id}</span>
      </div>
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

    <div class="play-contents" class:keyboard-open={is_keyboard_open}>
      {#if is_loading}{:else}
        <Quiz {items} {current_idx} />
        <Input
          bind:input
          onSubmit={handleSubmit}
          current_glyph={current_item?.glyph}
          bind:input_element
        />

        <Menu
          menu_event={handleMenuEvent}
          {is_keyboard_open}
          auto_submit={$settings.auto_submit}
        />
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .contents {
    display: grid;
    wdith: 100%;
    max-width: 100%;
  }
  .play-contents {
    width: 100%;
    padding-top: 18vh;
    overflow: hidden;
  }

  .keyboard-open {
    padding-top: 0vh;
  }

  @media (max-width: 680px) or (max-height: 680px) {
    .play-contents {
      font-size: 70%;
    }
  }

  .top-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0.2rem;

    background-color: transparent;

    position: sticky;
    top: 0;
    left: 0;
  }

  .config-id {
    color: var(--text-color-light);
  }
</style>
