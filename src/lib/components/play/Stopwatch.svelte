<script lang="ts">
  import { onMount } from "svelte";
  import { roundToDecimalPlaces, formatTime } from "$/lib/utils";

  export let elapsed_time: number = 0;
  export let is_paused: boolean = true;
  export let is_disabled: boolean = false;
  export let best_time: number = -1;

  // colour of the stopwatch's time
  export let time_style: "normal" | "incorrect" | "record-set" | "inactive" =
    "normal";

  let timer_interval: number | null = null;

  onMount(() => {
    return () => {
      stopTimer();
    };
  });

  export function startTimer() {
    is_paused = false;
    if (!timer_interval) {
      timer_interval = setInterval(() => {
        elapsed_time += 0.1;
        elapsed_time = roundToDecimalPlaces(elapsed_time, 2);
      }, 100);
    }
  }

  export function stopTimer() {
    is_paused = true;
    if (timer_interval) {
      clearInterval(timer_interval);
      timer_interval = null;
    }
  }

  export function resetTimer() {
    stopTimer();
    elapsed_time = 0;
  }
</script>

<div class="stopwatch">
  <span class="time {time_style}">
    {#if is_disabled}--:--.-{:else}{formatTime(elapsed_time)}{/if}s
  </span>
  {#if best_time < 0}
    <span class="best-time not-set"> best: --:--.-s</span>
  {:else}
    <span class="best-time">
      best: {formatTime(best_time)}s
    </span>
  {/if}
</div>

<style>
  .stopwatch {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: right;
    margin: 0 0.7rem;
  }

  .time {
    font-size: 2rem;
    display: flex;
    font-weight: 400;
    justify-content: right;
    align-items: right;
  }

  .time.record-set {
    color: hsl(180, 40%, 50%);
  }

  .time.incorrect {
    color: var(--highlight-color);
  }

  .time.inactive {
    color: var(--text-color-light);
  }

  .best-time {
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    position: relative;

    justify-content: right;
    align-items: right;
  }

  .best-time.not-set {
    color: var(--text-color-light);
  }
</style>
