<script lang="ts">
  import { dictionary } from "$lib/stores/dictionary";
  import { getAnswers, isSilent } from "$lib/answer";

  $: glyphs = $dictionary;
</script>

<div class="glyphs-container">
  {#each glyphs as glyph}
    <div class="preview-item">
      <div
        class="glyph-container"
        data-answer={isSilent(glyph) ? "Silent" : getAnswers(glyph).join(" / ")}
      >
        <span class="glyph">{glyph}</span>
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  .glyphs-container {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 95vw;
    gap: 0.2em;
    margin: 0 auto;
    padding: 1em;
    position: relative;
  }

  .preview-item {
    display: flex;
    position: relative;
  }

  .glyph-container {
    min-width: 2.4em;
    box-sizing: border-box;
    text-align: center;
    color: var(--text-color-light);
  }

  .glyph {
    margin: auto;
    cursor: default;
    color: inherit;
    position: relative;
  }

  .glyph-container:hover {
    font-weight: 600;
    color: var(--text-color);
  }

  .glyph-container::after {
    content: attr(data-answer);
    display: inline-flex;

    position: absolute;
    white-space: nowrap; /* Prevent line breaks */
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--background-contrast);
    color: var(--text-color);
    padding: 0.3rem 0.6rem;
    overflow: visible;
    border-radius: 0.5rem;
    font-size: 1.8rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.1s ease-in-out;
    z-index: 3;
  }
  .glyph-container:hover::after {
    opacity: 1;
  }
</style>
