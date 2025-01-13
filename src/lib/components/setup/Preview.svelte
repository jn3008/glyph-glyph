<script lang="ts">
  import { glyphs_list } from "$/lib/stores/glyphs";
  import { getAnswers, isSilent } from "$lib/answer";
  import { getIPA, getPronunciations } from "$lib/pronunciations";

  $: glyphs = $glyphs_list;

  export let show_pronunciations: boolean;

  let hovered_glyph: string | null = null;
  let pronunciations: string | null = null;

  function onHover(glyph: string) {
    hovered_glyph = glyph;
    pronunciations = getPronunciations(hovered_glyph); // with bold markers
  }

  $: pronunciations_shown = pronunciations != null && pronunciations.length > 0;
</script>

<div class="preview-container">
  <div>
    <div class="preview-title">Glyphs to test:</div>
    <div class="glyphs-container">
      {#each glyphs as glyph}
        <div class="preview-item">
          <div
            class="glyph-container"
            on:mouseenter={() => {
              onHover(glyph);
            }}
            on:mouseleave={() => {
              hovered_glyph = pronunciations = null;
            }}
            role="tooltip"
          >
            <span class="glyph">{glyph}</span>

            {#if hovered_glyph == glyph}
              <span class="glyph-tooltip">
                {isSilent(glyph) ? "Silent" : getAnswers(glyph).join(" / ")}
                <span class="ipa-style">{getIPA(glyph)}</span>
              </span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
  {#if show_pronunciations}
    <div class="pronunciations-container">
      <span class="pronunciations" class:is-active={pronunciations_shown}>
        {@html pronunciations}</span
      >
    </div>
  {/if}
</div>

<style lang="postcss">
  .preview-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* max-width: 95vw; */
    position: relative;
    margin-bottom: 5em;

    gap: 1em;

    padding: 1em;
    max-width: 40rem;
  }
  .pronunciations-container {
    display: flex;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
    font-size: 1em;
    min-height: 3em;
    background-color: transparent;
    border: 2px solid var(--dark-button-color);
    border-radius: 1rem;
    width: 100%;

    margin: 0 auto;
    position: relative;

    padding: 0.6rem 1rem;
    top: 100%;
    margin: 0.5em;
  }
  .pronunciations-container::before {
    content: "Pronunciation";
    position: absolute;
    top: -0.8em;
    left: 0.8em;
    background-color: var(--background-color);
    padding: 0 0.5em;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--dark-button-color);
  }
  .pronunciations {
    margin: auto;
    transform: scaleY(0);
    opacity: 0;
    color: var(--dark-button-text-color-selected);

    transition: all 0.3s ease;
  }
  .pronunciations.is-active {
    opacity: 1;
    transform: scaleY(1);
  }

  .ipa-style {
    color: var(--text-color-light);
    font-family: "Noto Sans";
    font-weight: 500;

    display: flex;
    display: block;
    margin: auto;
    font-size: 60%;
  }

  .preview-item {
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

  .glyph-container:hover {
    font-weight: 600;
    color: var(--text-color);
  }

  .glyph-container:hover::after {
    opacity: 1;
  }

  .preview-title {
    color: var(--accent-color);

    padding: 0 1em;
    width: 100%;
    justify-content: left;
  }
</style>
