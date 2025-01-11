<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  let restart_animation_playing = false;

  export let menu_event: (input_string: string) => void; // a callback passed from the parent

  export let is_keyboard_open: boolean;
  export let auto_submit: boolean;
  export let show_help: boolean;
</script>

<section class="menu" class:keyboard-open={is_keyboard_open}>
  <div class="button-container">
    <a href="setup" class="button" title="Go back">
      <span class="material-symbols-rounded menu-icon">arrow_back</span>
    </a>
  </div>

  <!-- <button
		type="button"
		class="button tilt"
		title="Open game settings"
		on:click={() => {
			OPEN SETTINGS
		}}
	>
		<span class="tilt-animation-container material-symbols-rounded menu-icon">settings</span>
	</button> -->

  <div class="button-container" class:activated={auto_submit}>
    <button
      type="button"
      class="button"
      title="Toggle auto-submit"
      on:click={() => {
        menu_event("toggle-auto-submit");
      }}
    >
      <span class="material-symbols-rounded reset-animation-container menu-icon"
        >keyboard_double_arrow_up</span
      >
    </button>
  </div>

  <div
    class="button-container tilt"
    class:reset-animation-playing={restart_animation_playing}
  >
    <Button
      style="menu-icon"
      title="Restart game"
      on:click={() => {
        menu_event("restart");
        restart_animation_playing = true;
      }}
    >
      <span class="tilt-animation-container">
        <span
          class="material-symbols-rounded reset-animation-container menu-icon flipped"
          on:animationend={() => {
            restart_animation_playing = false;
          }}>refresh</span
        >
      </span>
    </Button>
  </div>

  <div class="button-container">
    <Button
      style="menu-icon"
      on:click={() => (show_help = !show_help)}
      title="Help"
    >
      <span class="material-symbols-rounded menu-icon">help</span>
    </Button>
  </div>
</section>

<style lang="postcss">
  .menu-icon {
    display: flex;
    font-size: 1em;
    text-align: center;
  }

  .menu {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    gap: 0.75em;
  }

  .menu.keyboard-open {
    margin-top: 0.5em;
  }

  .menu > * {
    margin: 0;
    /* margin-left: 0.75em; */

    &:first-child {
      margin-left: 0 !important;
    }
  }

  .button-container {
    background-color: transparent;
    border-radius: 50%;
    color: var(--accent-color);
    transition: all 125ms var(--ease-out-better);
  }

  .button-container.activated {
    background-color: var(--dark-button-color-selected);
    color: var(--dark-button-text-color-selected);
  }

  .button {
    all: initial;
    display: flex;
    font-size: 2.5em;
    margin-left: 0.25em;
    margin: 0;
    padding: 0.175em;
    border-radius: 50%;
    transition:
      transform 50ms var(--standard-curve),
      color 125ms var(--ease-out-better),
      background-color 125ms var(--ease-out-better),
      border-color 125ms var(--standard-curve);
    color: inherit;

    &:focus-visible {
      outline: none;
      color: var(--text-color-on-accent-color);
      background-color: var(--accent-color);
    }
    &:active {
      transform: translateY(8%) scale(110%, 90%);
    }
  }

  .button span {
    /* aspect-ratio: 1 / 1; */
    cursor: pointer;
    display: flex;
  }

  /* .button.tilt { */
  .tilt {
    & .tilt-animation-container {
      transition: transform 150ms var(--standard-curve);
    }
    &:hover .tilt-animation-container {
      transform: rotate(-60deg);
    }
  }

  @keyframes counter-clockwise-turn {
    from {
      transform: scaleX(-1) rotate(0deg);
    }
    to {
      transform: scaleX(-1) rotate(360deg);
    }
  }

  /* .button.reset-animation-playing .reset-animation-container { */
  .reset-animation-playing .reset-animation-container {
    animation: 500ms counter-clockwise-turn var(--standard-curve);
  }

  button.tilt:hover {
    cursor: pointer;
  }

  .flipped {
    transform: scaleX(-1);
  }
</style>
