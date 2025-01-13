<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import BottomBar from "$lib/components/BottomBar.svelte";
  import Config from "$/lib/components/setup/Config.svelte";
  import Preview from "$/lib/components/setup/Preview.svelte";
  import ColourPalette from "$/lib/components/ColourPalette.svelte";
  import HelperModal from "$/lib/components/HelperModal.svelte";

  import { formatTime } from "$/lib/utils";
  import { onMount } from "svelte";
  import { quiz } from "$/lib/stores/quiz";
  import { game_config } from "$/lib/stores/game-config";
  import { settings, toggleStopwatch } from "$/lib/stores/settings";
  import { times_store } from "$/lib/stores/times";

  let is_loading = true;
  let show_help = false;

  $: stopwatch_enabled = $settings.stopwatch_enabled;

  $: configuration = $game_config.id;
  $: high_score = $times_store.best_times[configuration];
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

  const instructions: string = `Learn an alphabet or test your knowledge by choosing your 
  game configuration.\n\nOnce a configuration is valid, a preview of the set of glyphs will appear;
   hover/tap on a glyph to see its answer (romanisation/name).\n\nWhen you're ready press "Start".`;
</script>

<svelte:head>
  <title>Setup · glyph-glyph</title>
</svelte:head>

<div class="contents">
  <div class="top-bar">
    <div class="title-container">
      <a href="/" class="title">glyph-glyph</a>
      <Button
        style="small-icon"
        on:click={() => (show_help = !show_help)}
        title="Help"
      >
        <span class="material-symbols-rounded small-icon">help</span>
      </Button>
    </div>
    <span class="palette"><ColourPalette /></span>
  </div>
  {#if !is_loading}
    <div class="config-container">
      <div class="config-title-container">
        <div class="content-width config-title">
          <span class="config-title-text">Choose your configuration</span>
        </div>
      </div>
      <Config />
      {#if $game_config.is_valid}
        <Preview {show_pronunciations} />
      {/if}
    </div>
  {/if}

  <HelperModal bind:is_open={show_help} {instructions} />

  <BottomBar>
    <div class="stopwatch-section">
      <Button
        on:click={() => {
          toggleStopwatch();
        }}
        selected={stopwatch_enabled}
        title="Turn stopwatch {stopwatch_enabled ? 'off' : 'on'}"
      >
        <span class="button-content">
          <span class="button-text"> Use Stopwatch </span>
          <span class="material-symbols-rounded icon">timer</span>
        </span>
      </Button>

      {#if $game_config.is_valid && stopwatch_enabled}
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
      <Button active={false}>
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

  .config-title {
    display: flex;
    white-space: nowrap;
  }
  .config-title-text {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--dark-button-text-color);
  }

  .config-title-container {
    padding: 0.25rem 0.5rem;
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

  @media (max-width: 680px) {
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

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center top;

    top: 0;
    left: 0;

    flex-shrink: 0;
  }

  .title {
    padding: 0.2rem;
  }

  .title-container {
    display: flex;
    height: 100%;

    align-items: start;
  }

  .small-icon {
    font-size: 1.5rem;
    padding: 0.2rem;
    margin: 0;
  }
</style>
