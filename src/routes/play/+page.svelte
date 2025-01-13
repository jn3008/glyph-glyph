<script lang="ts">
  import Quiz from "$/lib/components/play/Quiz.svelte";
  import Input from "$/lib/components/play/Input.svelte";
  import Menu from "$/lib/components/play/Menu.svelte";
  import Stopwatch, {
    type TimeStyle,
    type StopwatchProps,
  } from "$/lib/components/play/Stopwatch.svelte";
  import HelperModal from "$/lib/components/HelperModal.svelte";
  import Button from "$/lib/components/Button.svelte";

  import { quiz } from "$/lib/stores/quiz";
  import { isCorrectAnswer, getAnswers } from "$/lib/answer";
  import { glyphs_list } from "$/lib/stores/glyphs";
  import { settings, toggleAutoSubmit } from "$/lib/stores/settings";
  import { onMount, tick } from "svelte";
  import { times_store, updateHighScore } from "$/lib/stores/times";
  import { game_config, refreshGameConfig } from "$/lib/stores/game-config";
  import { goto } from "$app/navigation";

  let is_loading: boolean = true;
  let is_keyboard_open = false;
  let show_help = false;

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
    stopwatch.is_inactive = current_idx > 0;
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
  $: quiz_finished = current_idx >= items.length;

  $: perfect_score = items
    .slice(0, current_idx)
    .every((item) => item?.is_correct_answer);
  $: configuration = $game_config.id;

  let stopwatch: StopwatchProps = {
    is_enabled: $settings.stopwatch_enabled,
  };

  $: stopwatch.is_enabled = $settings.stopwatch_enabled;

  $: stopwatch.best_time = $times_store.best_times[configuration];

  $: stopwatch.time_style = (
    stopwatch.is_inactive
      ? "inactive"
      : stopwatch.new_record_set
        ? "record-set"
        : !perfect_score
          ? "incorrect"
          : stopwatch.component?.hasStarted()
            ? "inactive"
            : "normal"
  ) as TimeStyle;

  let stopwatch_checkpoint: number = 0;

  $: instructions =
    `Type the correct answer for the current (underlined) glyph in the
   queue.\n\nFor example for ` +
    $glyphs_list[0] +
    `, type "` +
    getAnswers($glyphs_list[0])[0] +
    `" \n\nThere are buttons for restarting and for toggling the auto-submit mechanism 
   (automatically submits a correct answer)`;

  function handleMenuEvent(type: string) {
    switch (type) {
      case "restart":
        // if we're in hangul syllables mode, re-generate the random syllables on restart
        if (
          $game_config.path.includes("hangul") &&
          $game_config.path.includes("syllables")
        )
          refreshGameConfig();

        quiz.reset();
        if (stopwatch.is_enabled) {
          stopwatch.component?.resetTimer();
          stopwatch.is_inactive = false;
          stopwatch.new_record_set = false;
          stopwatch_checkpoint = 0;
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

    if (
      stopwatch.component &&
      stopwatch.is_enabled &&
      !stopwatch.component.hasStarted()
    )
      stopwatch.component.startTimer();

    const is_correct = isCorrectAnswer(input, current_item.glyph);

    if (!is_correct && input === "") return;

    stopwatch.component?.updateTime();
    let time_spent =
      stopwatch.is_enabled &&
      stopwatch.component &&
      stopwatch.component.hasStarted()
        ? (stopwatch.elapsed_time || 0) - stopwatch_checkpoint
        : 0; // calculate time spent on glyph by subtracting the checkpoint from the current time

    stopwatch_checkpoint = stopwatch.elapsed_time || 0; // update checkpoint with current time

    quiz.updateItem(current_idx, (item) => ({
      ...item, // spread existing properties
      answered: input, // add the user's input
      is_correct_answer: is_correct, // add correctness
      time_spent: time_spent,
    }));

    quiz.updateIndex(++current_idx);

    await tick(); // update perfect_score, quiz_finished

    if (quiz_finished) {
      // Reach the end of the queue

      if (
        // current_idx == items.length &&
        !stopwatch.is_inactive &&
        stopwatch.is_enabled &&
        stopwatch.component?.hasStarted()
      ) {
        stopwatch.component?.stopTimer();

        if (perfect_score)
          stopwatch.new_record_set = updateHighScore(
            configuration,
            stopwatch.elapsed_time || 0
          );
      }

      quiz.updateElapsedTime(stopwatch.elapsed_time || -1);

      goto("/summary", {
        state: {
          elapsed_time: Number(stopwatch.elapsed_time ?? 0),
        },
      });
      return;
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
    )
      input_element.focus();
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
        {#if stopwatch.is_enabled}
          <Stopwatch
            bind:this={stopwatch.component}
            bind:elapsed_time={stopwatch.elapsed_time}
            is_inactive={stopwatch.is_inactive}
            best_time={stopwatch.best_time}
            time_style={stopwatch.time_style}
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
          bind:show_help
        />
      {/if}
    </div>

    {#if quiz_finished}
      <div class="summary-button-container">
        <Button
          href="summary"
          on:click={() => {}}
          selected={true}
          title="Summary"
        >
          <span class="button-content">
            <span class="button-text"> Summary </span>
            <span class="material-symbols-rounded icon">arrow_forward </span>
          </span>
        </Button>
      </div>
    {/if}
  </div>

  <HelperModal bind:is_open={show_help} {instructions} />
</div>

<style lang="postcss">
  .contents {
    display: grid;
    width: 100%;
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
      font-size: 80%;
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

  .button-content {
    display: flex;
    gap: 0.3em;
    height: 100%;
    vertical-align: middle;
    justify-content: center;
    margin: auto;
  }

  .summary-button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 1rem;

    *.icon {
      display: flex;
      margin: auto;
      font-size: 1.2em;
    }
  }
</style>
