<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import BottomBar from "$lib/components/BottomBar.svelte";
  import Config from "$/lib/components/setup/Config.svelte";
  import Preview from "$/lib/components/setup/Preview.svelte";
  import ColourPalette from "$/lib/components/ColourPalette.svelte";

  import { formatTime } from "$/lib/utils";
  import { onMount } from "svelte";
  import { quiz } from "$/lib/stores/quiz";
  import { game_config } from "$/lib/stores/game-config";
  import { settings, toggleStopwatch } from "$/lib/stores/settings";
  import { high_scores } from "$/lib/stores/scores";

  let is_loading = true;

  $: configuration = $game_config.id;
  $: high_score = $high_scores[configuration];
  $: show_pronunciations = ["greek", "cyrillic"].includes(
    $game_config?.path[0]
  );

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

<div class="contents">
  <div class="top-bar">
    <div class="title-container">
      <a href="/" class="title">glyph-glyph</a>
    </div>
    <span class="palette"><ColourPalette /></span>
  </div>
  {#if !is_loading}
    <div class="config-container">
      <Config />
      {#if $game_config.is_valid}
        <Preview {show_pronunciations} />
      {/if}
    </div>
  {/if}

  <BottomBar>
    <div class="stopwatch-section">
      <Button
        on:click={() => {
          toggleStopwatch();
        }}
        selected={$settings.using_stopwatch}
        title="Turn stopwatch {$settings.using_stopwatch ? 'off' : 'on'}"
      >
        <span class="button-content">
          <span class="button-text"> Use Stopwatch </span>
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
        <span class="button-content">
          <span class="button-text"> Start </span>
          <span class="material-symbols-rounded icon">arrow_forward </span>
        </span>
      </Button>
    {:else}
      <Button style="disactivated">
        <span class="button-content">
          <span class="button-text"> Start </span>
          <span class="material-symbols-rounded icon">arrow_forward </span>
        </span>
      </Button>
    {/if}
  </BottomBar>
</div>

<style lang="postcss">
  .contents {
    overflow: hidden;
    display: grid;

    height: 100dvh;

    grid-template-rows: auto 1fr auto;
  }

  .middle-content {
    overflow-y: auto;
    flex-grow: 1;
    overflow: auto;
    min-height: 2em;
  }
  .config-container {
    overflow-x: hidden;
    overflow-y: auto;

    flex: 1;

    padding-bottom: 6em;
  }
  .stopwatch-section {
    position: relative;
    display: flex;
    gap: 1em;

    white-space: nowrap; /* prevent line breaks */
  }

  @media (max-width: 680px) or (max-height: 680px) {
    .button-text {
      display: none;
    }
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
    content: "High score";
    position: absolute;
    top: -0.8em;
    left: 0.15em;
    background-color: var(--background-contrast);
    padding: 0 0.4em;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--dark-button-color-selected);
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

  .wrapper {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    position: relative;
    overflow-y: hidden;
    padding-bottom: 6em;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center top;

    top: 0;
    left: 0;

    flex-shrink: 0;
  }
  .title-container {
    display: flex;
    padding: 0.2rem;

    align-items: start;
  }
</style>
