<script lang="ts">
  import {
    game_config,
    updateGameConfigAtDepth,
    getModesAtDepth,
    getModesLabel,
    selectConfigAtDepth,
  } from "$/lib/stores/game-config";
  import { configurations } from "$/lib/glyph-configurations";
  import Button from "$lib/components/Button.svelte";

  $: selected_path = $game_config?.path;
  $: selected_alphabet = selected_path[0];
  let visible_depth: number = 10; // for animating the selection containers as they appear
  $: setTimeout(() => {
    visible_depth = selected_path.length;
  }, 1);
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
          class="option-groups"
          class:grouped={getModesAtDepth(selected_path.slice(0, depth)).some(
            (option) => option.group,
          )}
        >
          {#each [...new Set(getModesAtDepth(selected_path.slice(0, depth)).map((option) => option.group || getModesLabel(selected_path.slice(0, depth))))] as group}
            <div
              class="sub-selection-container {depth <= visible_depth
                ? 'visible'
                : ''}"
              data-label={group}
            >
              <div class="sub-selection">
                {#each getModesAtDepth(selected_path.slice(0, depth)).filter((option) => (option.group || getModesLabel(selected_path.slice(0, depth))) === group) as option}
                  <Button
                    on:click={() => selectConfigAtDepth(option.key, depth)}
                    selected={selected_path[depth] === option.key}
                    title="Select {group}: {option.label}"
                  >
                    {option.label}
                  </Button>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  .option-groups {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1em;
    align-self: center;
    max-width: 100%;
  }

  .option-groups.grouped {
    border: 2px solid var(--dark-button-color);
    border-radius: 1.75em;
    padding: 1.25em 1em 1em;
  }

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
    margin: 0;
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
    font-size: 0.9rem;
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
    width: 100%;
  }
</style>
