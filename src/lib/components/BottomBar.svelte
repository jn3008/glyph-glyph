<script lang="ts">
  export let style: "normal" | "glass" = "normal";
  export let justify_content: "space-between" | "right" | "center" | "left" =
    "space-between";
</script>

<div class="bottom-bar {style}" style="justify-content: {justify_content};">
  <slot />
</div>

<style lang="scss">
  .bottom-bar {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    // max-width: 100%;
    width: 100vw;
    gap: 1em;
    background-color: var(--background-contrast);
    display: flex;
    align-items: center;
    z-index: 100;
    box-shadow: 0 -2px 50px rgba(128, 128, 128, 0.1);

    padding: 1em;
  }

  .bottom-bar.glass {
    background: var(--background-contrast-alpha);
    backdrop-filter: blur(10px);
  }
</style>
