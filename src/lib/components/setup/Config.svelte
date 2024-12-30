<script lang="ts">
  import {
    game_config,
    updateGameConfigAtDepth,
  } from "$/lib/stores/game-config";
  import { configurations } from "$/lib/glyph-configurations";
  import Button from "$lib/components/Button.svelte";

  $: selected_path = $game_config?.path;
  $: selected_alphabet = selected_path[0];
  let visible_depth: number = 10; // for animating the selection containers as they appear
  $: setTimeout(() => {
    visible_depth = selected_path.length;
  }, 0);

  function getModesAtDepth(path: string[]) {
    let current = configurations;
    for (const key of path)
      current = current.find((mode) => mode.key === key)?.modes || [];
    return current;
  }

  function getModesLabel(path: string[]) {
    let current_modes = configurations;
    let label: string = "";

    for (let i = 0; i < path.length; i++) {
      const current_mode = current_modes.find((mode) => mode.key === path[i]);

      if (i === path.length - 1) label = current_mode?.modes_label || "";
      else current_modes = current_mode?.modes || [];
    }

    return label;
  }
</script>

<div>
  <div class="alphabet-selection-container">
    <div class="selection alphabet">
      {#each configurations as alphabet}
        <Button
          on:click={() => updateGameConfigAtDepth(alphabet.key, 0)}
          selected={selected_alphabet === alphabet.key}
          title="Select {alphabet.label}"
        >
          {alphabet.label}
        </Button>
      {/each}
    </div>
  </div>

  <div class="selections-container">
    {#each Array.from({ length: selected_path.length }, (_, i) => i + 1) as depth}
      {#if getModesAtDepth(selected_path.slice(0, depth)).length > 0}
        <div
          class="sub-selection-container {depth <= visible_depth
            ? 'visible'
            : ''}"
          data-label={getModesLabel(selected_path.slice(0, depth))}
        >
          <div class="sub-selection">
            {#each getModesAtDepth(selected_path.slice(0, depth)) as option}
              <Button
                on:click={() => updateGameConfigAtDepth(option.key, depth)}
                selected={selected_path[depth] === option.key}
                title="Select {option.label}"
              >
                {option.label}
              </Button>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  .selections-container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 1em;
    gap: 1em;
  }
  .sub-selection-container {
    position: relative;
    border: 2px solid var(--dark-button-color);
    border-radius: 1em;
    margin: auto;
    height: auto;
    display: flex;

    opacity: 0;
    transform: translateY(-3em);
    transition: 0.2s ease;
  }
  .sub-selection-container::before {
    content: attr(data-label);
    position: absolute;
    top: -0.8em;
    left: 0.8em;
    background-color: var(--background-color);
    padding: 0 0.5em;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--dark-button-color);
  }
  .sub-selection-container.visible::before,
  .sub-selection-container.visible {
    transform: scale(100%) translateX(0);
    opacity: 1;
  }
  .sub-selection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    padding: 1em;
  }
  .selection {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    padding: 1em;
  }
  .alphabet-selection-container {
    background-color: var(--background-contrast);
    width: 100vw;
  }
</style>
