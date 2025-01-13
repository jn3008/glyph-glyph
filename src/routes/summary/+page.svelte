<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import BottomBar from "$lib/components/BottomBar.svelte";
  import HelperModal from "$/lib/components/HelperModal.svelte";

  import { formatTimeAlt } from "$/lib/utils";
  import { onMount } from "svelte";
  import { quiz, type QuizItem } from "$/lib/stores/quiz";
  import { game_config } from "$/lib/stores/game-config";
  import { times_store } from "$/lib/stores/times";

  import { getAnswers, isSilent } from "$lib/answer";

  let is_loading = true;
  let show_help = false;

  $: configuration = $game_config.id;
  $: best_time = $times_store.best_times[configuration];
  $: elapsed_time = $quiz.elapsed_time;

  $: items = $quiz.items;

  $: perfect_score = items.every((item) => item?.is_correct_answer);

  $: incorrect_items = items.filter((item) => !item?.is_correct_answer);

  $: completed = items
    .slice(1)
    .every((item) => (item?.time_spent ? item?.time_spent > 0 : false));

  $: times = items
    .filter((item) => item?.time_spent)
    .map((item) => item.time_spent as number);

  $: avg = times.reduce((a, b) => a + b, 0) / times.length;

  $: minmax = items.reduce(
    (acc, item) => {
      if (item.time_spent) {
        if (item.time_spent < (acc.min.time_spent || 0)) acc.min = item;
        if (item.time_spent > (acc.max.time_spent || 0)) acc.max = item;
      }
      return acc;
    },
    {
      min: items[1],
      max: items[1],
    }
  );

  $: is_best_time =
    perfect_score &&
    elapsed_time > 0 &&
    best_time > 0 &&
    elapsed_time <= best_time;

  let incorrect_hovered_glyph: QuizItem | null = null;

  function onHover(glyph: QuizItem) {
    incorrect_hovered_glyph = glyph;
  }

  // This function helps avoid showing incomplete or uninitialized content to the user.
  // sets `is_loading` to `false` once the store emits its first value, (once the store is loaded)
  onMount(() => {
    // wait for stores to load
    const unsubscribe = quiz.subscribe(() => {
      is_loading = false;
    });

    return () => unsubscribe();
  });

  const instructions: string = ``;
</script>

<svelte:head>
  <title>Summary · glyph-glyph</title>
</svelte:head>

<div class="contents">
  <div class="top-bar">
    <div>
      <a href="/">glyph-glyph</a>
      <span class="config-id">{$game_config.id}</span>
    </div>
  </div>

  <div class="summary-contents">
    <div class="header-container">
      <div class="content-width"><h1>Summary</h1></div>
    </div>
    {#if !is_loading}
      <div class="stats-container">
        <div class="info-container">
          <div class="info">
            <div class="info-block info-border" data-label="Time">
              {#if is_best_time}
                <div class="time-text-container">New best time!</div>
                <div class="time new-best-color">
                  {formatTimeAlt(elapsed_time)}s
                </div>
              {:else}
                <div class="column-container">
                  <div
                    class="column-item time"
                    class:incorrect-color={!perfect_score}
                  >
                    {formatTimeAlt(elapsed_time)}s
                  </div>
                  <div class="column-item muted-text">
                    Best: {formatTimeAlt(best_time)}s
                  </div>
                </div>
              {/if}
            </div>
          </div>
        </div>

        {#if !perfect_score && completed}
          <div class="incorrect-items-container">
            <div class="glyphs-container-title">Incorrect answers:</div>
            <div class="glyphs-container">
              {#each incorrect_items as item (item.glyph)}
                <div class="item-container">
                  <div
                    class="glyph-container"
                    on:mouseenter={() => {
                      onHover(item);
                    }}
                    on:mouseleave={() => {
                      incorrect_hovered_glyph = null;
                    }}
                    role="tooltip"
                  >
                    <span class="glyph">{item.glyph}</span>

                    {#if incorrect_hovered_glyph?.glyph == item.glyph}
                      <span class="glyph-tooltip">
                        {isSilent(item.glyph)
                          ? "Silent"
                          : getAnswers(item.glyph).join(" / ")}
                        <span class="incorrect-color">{item.answered}</span>
                      </span>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        {#if minmax.min.time_spent && minmax.max.time_spent}
          <div class="info-container">
            <div class="info">
              <div class="info-block info-border">
                <div class="highlight-glyph">
                  {minmax.min.glyph}
                </div>
                <div class="column-container">
                  <span class="column-item muted-text">Fastest</span>
                  <span class="column-item stat-time"
                    >{formatTimeAlt(minmax.min.time_spent)}s</span
                  >
                </div>
              </div>
              <div class="info-block info-border">
                <div class="column-container">
                  <span class="column-item muted-text">Average</span>
                  <span class="column-item stat-time"
                    >{formatTimeAlt(avg)}s</span
                  >
                </div>
              </div>

              <div class="info-block info-border">
                <div class="highlight-glyph">
                  {minmax.max.glyph}
                </div>
                <div class="column-container">
                  <span class="column-item muted-text">Slowest</span>
                  <span class="column-item stat-time"
                    >{formatTimeAlt(minmax.max.time_spent)}s</span
                  >
                </div>
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>

  <HelperModal bind:is_open={show_help} {instructions} />

  <BottomBar>
    <Button
      href="setup"
      on:click={() => {
        quiz.reset();
      }}
      selected={true}
      title="Setup"
    >
      <span class="button-content">
        <span class="button-text"> Setup </span>
        <span class="material-symbols-rounded icon">tune</span>
      </span>
    </Button>

    <Button
      href="play"
      on:click={() => {
        quiz.reset();
      }}
      selected={true}
      title="Play again"
    >
      <span class="button-content">
        <span class="button-text"> Play Again </span>
        <span class="material-symbols-rounded icon">refresh</span>
      </span>
    </Button>
  </BottomBar>
</div>

<style lang="postcss">
  .contents {
    overflow: hidden;
    display: grid;

    height: 100dvh;

    width: 100%;

    grid-template-rows: auto 1fr auto;
  }

  .header-container {
    padding: 0.5rem;
    background-color: var(--background-contrast);
  }

  .summary-contents {
    width: 100%;

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    overflow-y: auto;
  }

  .time {
    font-size: 2rem;
  }
  .time-text-container {
    align-items: center;
    display: flex;
  }

  .glyphs-container-title {
    padding-left: 1em;
    padding-bottom: 0.5em;
    width: 100%;
    justify-content: left;
  }

  .item-container {
    display: flex;
    position: relative;
  }

  .glyph-container {
    min-width: 2.4em;
    min-height: 1.8em;
    box-sizing: border-box;
    text-align: center;
    color: var(--text-color-light);
  }

  .glyph {
    margin: auto;
    cursor: default;
    color: inherit;
    position: relative;
    white-space: nowrap; /* Prevent line breaks */
  }

  .stats-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    max-width: 40rem;
    padding: 1em;
    gap: 1em;
  }

  .info-container {
    position: relative;
    border-radius: 1rem;
    margin: auto;
    height: auto;
    display: flex;
  }

  .info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
  }

  .info-block {
    padding: 1rem;
    display: flex;
    gap: 1rem;

    background-color: var(--dark-button-color);
    background-color: transparent;
  }

  .info-block::before {
    content: attr(data-label);
    position: absolute;
    top: -0.7em;
    left: 0.9em;
    background-color: var(--background-color);
    padding: 0 0.35em;
    font-size: 0.8rem;
    font-weight: 600;
  }

  .info-border {
    border: 2px var(--dark-button-color) solid;
    border-radius: 1rem;
  }

  .highlight-glyph {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
    white-space: nowrap;
    line-height: 1;

    height: 100%;

    padding: 0;
    margin: 0;
  }

  .column-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .column-item {
    display: flex;
    margin: 0 auto;
  }

  .stat-time {
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    .button-text {
      display: none;
    }
  }

  .button-content {
    display: flex;
    gap: 0.3em;
    height: 100%;
    vertical-align: middle;
    justify-content: center;
    margin: auto;
  }
  .icon {
    display: flex;
    margin: auto;
    font-size: 1.2em;
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
