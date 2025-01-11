<script lang="ts">
  export let title: string = "";
  export let active: boolean = true;
  export let style: "" | "small-icon" | "menu-icon" = "";
  export let selected: boolean = false;

  export let href: string = "";
</script>

{#if !href}
  <button
    class="button {style}"
    class:disactivated={!active}
    on:click
    class:selected
    {title}
  >
    <div class="effect">
      <slot />
    </div>
  </button>
{:else}
  <a
    {href}
    class="button {style}"
    on:click
    data-sveltekit-prefetch
    class:selected
    {title}
  >
    <div class="effect">
      <slot />
    </div>
  </a>
{/if}

<style lang="postcss">
  .effect {
    display: flex;
  }

  .button {
    display: inline-block;
    transition: all 0.2s ease-in-out;
    border: none;
    border-bottom: 2px solid var(--border-input);
    border-radius: 0.25em;
    cursor: pointer;
    text-decoration: none;

    background-color: var(--dark-button-color);
    color: var(--dark-button-text-color);
    font-family: inherit;
    font-size: 1.4em;
    font-weight: 500;
    padding: 0.6rem 1rem;
    margin: 0;

    max-width: 50vw;
  }
  .button:hover {
    font-weight: 700;
  }
  .button.selected {
    background-color: var(--dark-button-color-selected);
    color: var(--dark-button-text-color-selected);
    font-weight: 700;
  }

  .button:not(.disactivated) {
    &:active > .effect {
      transform: translateY(5%) scale(105%, 90%);
      transition: transform 0.05s ease;
    }
  }

  .button.disactivated {
    cursor: default;
    pointer-events: none;
    background-color: var(--dark-button-disactivated-color);
    color: var(--dark-button-disactivated-text-color);
  }

  .button.small-icon {
    display: flex;

    background-color: transparent;
    border: none;
    color: var(--accent-color);

    margin: 0;
    padding: 0;

    border-radius: 50%;

    &:focus-visible {
      outline: none;
      color: var(--background-color);
      background-color: var(--accent-color);
    }
  }

  .button.menu-icon {
    all: initial;
    display: flex;
    font-size: 2.5em;
    margin-left: 0.25em;
    margin: 0;
    padding: 0.175em;
    border-radius: 50%;

    cursor: pointer;
    display: flex;
    transition:
      transform 50ms var(--ease-out-better),
      color 125ms var(--ease-out-better),
      background-color 125ms var(--ease-out-better),
      border-color 125ms var(--ease-out-better);
    color: inherit;

    &:focus-visible {
      outline: none;
      color: var(--text-color-on-accent-color);
      background-color: var(--accent-color);
    }
  }
</style>
