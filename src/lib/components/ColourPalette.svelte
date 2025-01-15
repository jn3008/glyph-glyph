<script lang="ts">
  import {
    settings,
    theme_appearances,
    theme_colours,
  } from "$/lib/stores/settings";
  import { appearance as appearance_store } from "$/lib/stores/appearance";
  import type { ThemeAppearance, ThemeColour } from "$/lib/stores/settings";

  import Button from "$lib/components/Button.svelte";

  $: theme_colour = $settings.colour;

  let palette_drawer_open: boolean = false;

  const setThemeAppearance = (appearance: ThemeAppearance) => {
    $settings.appearance = appearance;
  };
  const setThemeColour = (colour: ThemeColour) => {
    $settings.colour = colour;
  };
</script>

<div class="palette-container">
  <div class="palette-drawer-contents" class:open={palette_drawer_open}>
    <div class="palette">
      {#each theme_appearances as appearance}
        {#if $settings.appearance !== appearance}
          <div class="button-container">
            <button
              type="button"
              class="color-button appearance"
              aria-label={`Set theme appearance to ${appearance}`}
              on:click={() => setThemeAppearance(appearance as ThemeAppearance)}
            >
              <span class="material-symbols-rounded icon">
                {#if appearance === "auto"}
                  brightness_auto
                {:else if appearance === "dark"}
                  dark_mode
                {:else}
                  light_mode
                {/if}
              </span>
            </button>
          </div>
        {/if}
      {/each}
    </div>
    <div class="palette colours">
      {#each theme_colours as colour}
        <div class="button-container">
          <button
            type="button"
            class="color-button {$appearance_store}-theme-{colour} {colour ===
            theme_colour
              ? 'active'
              : ''}"
            aria-label={`Set theme colour to ${colour}`}
            title={`Pick ${colour}`}
            on:click={() => setThemeColour(colour as ThemeColour)}
          ></button>
        </div>
      {/each}
    </div>
  </div>

  <Button
    style="small-icon"
    on:click={() => (palette_drawer_open = !palette_drawer_open)}
    title="{palette_drawer_open ? 'Close' : 'Open'} palette"
  >
    <span class="material-symbols-rounded palette-icon"> palette </span>
  </Button>
</div>

<style>
  .palette-container {
    height: 100%;
    gap: 0;

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    /* justify-content: end;  */
  }

  .palette-drawer-contents {
    gap: 1em;
    transform: scaleX(0);

    transform-origin: right;

    opacity: 0;
    transition:
      transform 0.3s ease-out,
      opacity 0.3s ease-out;

    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto minmax(4em, 16em);
  }
  .palette-drawer-contents.open {
    opacity: 1;
    transform: scaleX(1);
  }
  .icon {
    font-size: 1rem;
    color: inherit;
    margin: auto;
  }

  .palette {
    position: relative;
    display: flex;
    z-index: 1000;
  }

  .palette.colours {
    display: grid;

    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fit, 1fr);
    justify-content: stretch;
    max-width: 16em;
    min-width: 4em;
    width: 100%;
  }

  .color-button {
    width: 100%;
    height: 0.3em;
    background-color: var(--light-button-color);
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-out;
    z-index: 1;
    display: flex;

    justify-content: center;

    padding: 0;

    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;

    overflow: hidden;
    color: inherit;
  }

  .button-container {
    display: flex;
    height: 100%;
    background-color: none;

    transition: all 0.3s ease;
    pointer-events: all;
    cursor: pointer;
    z-index: 0;

    color: transparent;
  }

  .button-container:hover .color-button {
    height: 100%;
    border-radius: 0;

    color: var(--text-color);
  }

  @media (max-width: 768px) {
    /* on mobile, have all palette colours already popped out */
    .color-button {
      height: 100% !important;
      border-radius: 0 !important;
      color: var(--text-color) !important;
    }
  }

  .appearance {
    background-color: var(--dark-button-color-selected);
  }

  .palette-icon {
    font-size: 1.5rem;
    padding: 0.2rem;
    margin: 0;
  }
</style>
