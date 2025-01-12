<script lang="ts">
  import { isCorrectAnswer } from "$/lib/answer";
  import { settings } from "$/lib/stores/settings";

  export let onSubmit: (input_string: string) => void; // A callback passed from the parent

  export let input = "";
  export let current_glyph: string;
  export let input_element: HTMLInputElement;

  const WHITESPACE = /^\s+$/;

  let blocked = false;
  let shake_animation_is_playing = false;

  function handleSubmit() {
    const is_correct = isCorrectAnswer(input, current_glyph);

    if (!is_correct) {
      if (blocked) return;
      shake_animation_is_playing = true;
    }

    onSubmit(input);

    input = ""; // empty the input field
  }

  function isCompositionEvent(event: InputEvent) {
    const composingInputTypes = [
      "insertCompositionText",
      "deleteCompositionText",
    ];

    return event.isComposing || composingInputTypes.includes(event.inputType);
  }

  function handleInput(in_event: Event) {
    const event = in_event as InputEvent & { currentTarget: HTMLInputElement };

    if (isCompositionEvent(event)) return;
    if (!current_glyph) return;
    if (event.data === null) return; // control key was pressed

    // remove any excess spaces from string
    input = input.trim();

    if (WHITESPACE.test(event.data)) {
      // space was pressed
      handleSubmit();
      return;
    }

    if (isCorrectAnswer(input, current_glyph) && $settings.auto_submit)
      handleSubmit();
  }
</script>

<form
  class="answer-input content-width"
  class:shake-animation-playing={shake_animation_is_playing}
  on:submit|preventDefault={handleSubmit}
  on:animationend={() => (shake_animation_is_playing = false)}
>
  <input
    type="text"
    class="text-field"
    bind:value={input}
    on:input={handleInput}
    placeholder="type here..."
    autocapitalize="none"
    autocomplete="off"
    autocorrect="off"
    spellcheck={false}
    bind:this={input_element}
  />
</form>

<style lang="postcss">
  .answer-input {
    display: flex;
    width: 100%;
    position: relative;
    background-color: var(--background-input);
    border-bottom: 1px solid var(--border-input);
    border-radius: 9999px;
    margin: 0 auto;
    font-size: 1.4em;
  }

  .text-field {
    margin: 0;
    width: 100%;
    text-align: center;
    height: 2.5em;
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--text-color-low-contrast);
    }
  }

  .button {
    color: inherit;
    background: none;
    margin: 0;
    border: 0;
    padding: 0;
    font-size: 1.75em;
    width: 1.5em;
    height: 100%;

    position: absolute;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:focus-visible {
      outline: var(--focus-color) solid 3px;
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    20%,
    60% {
      transform: translateX(-10px);
    }
    40%,
    80% {
      transform: translateX(10px);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .shake-animation-playing {
      animation-name: shake;
      animation-duration: 300ms;
    }
  }
</style>
