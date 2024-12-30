<script lang="ts">
  export let style: "" = "";
  export let justify_content: "space-between" | "right" | "center" | "left" =
    "space-between";
</script>

<div class="bottom-bar {style}" style="justify-content: {justify_content};">
  <slot />
</div>

<style lang="scss">
  .bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: auto;
    gap: 1em;
    background-color: var(--background-contrast);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    z-index: 100;
    box-shadow: 0 -2px 50px rgba(128, 128, 128, 0.1);

    padding: 1em;
  }
</style>
