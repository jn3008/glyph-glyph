<script lang="ts">
  let restart_animation_playing = false;

  export let menu_event: (input_string: string) => void; // a callback passed from the parent
</script>

<section class="menu">
  <a href="setup" class="button" title="Go back">
    <span class="material-symbols-rounded menu-icon">arrow_back</span>
  </a>

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

  <button
    type="button"
    class="button tilt"
    class:reset-animation-playing={restart_animation_playing}
    title="Restart game"
    on:click={() => {
      menu_event("restart");
      restart_animation_playing = true;
    }}
  >
    <span class="tilt-animation-container">
      <span
        class="material-symbols-rounded reset-animation-container menu-icon"
        on:animationend={() => {
          restart_animation_playing = false;
        }}>refresh</span
      >
    </span>
  </button>
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
    margin-top: 3em;
  }

  .menu > * {
    margin: 0;
    margin-left: 0.75em;

    &:first-child {
      margin-left: 0 !important;
    }
  }

  .button {
    all: initial;
    display: flex;
    font-size: 2.5em;
    margin-left: 0.25em;
    padding: 0.175em;
    border-radius: 50%;
    transition:
      transform 50ms var(--standard-curve),
      color 125ms var(--standard-curve),
      background-color 125ms var(--standard-curve),
      border-color 125ms var(--standard-curve);
    color: var(--accent-color);

    &:focus-visible {
      outline: none;
      color: var(--text-color-on-accent-color);
      background-color: var(--accent-color);
    }
    &:active {
      transform: translateY(8%) scale(110%, 90%);
    }
  }

  .button[href] {
    cursor: pointer;
  }

  .button span {
    display: flex;
  }

  .button.tilt {
    & .tilt-animation-container {
      transition: transform 150ms var(--standard-curve);
    }
    &:hover .tilt-animation-container {
      transform: rotate(60deg);
    }
  }

  @keyframes counter-clockwise-turn {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .button.reset-animation-playing .reset-animation-container {
    animation: 500ms counter-clockwise-turn var(--standard-curve);
  }

  button.tilt:hover {
    cursor: pointer;
  }
</style>
