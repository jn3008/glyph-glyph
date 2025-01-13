<script context="module" lang="ts">
  import type { SvelteComponent } from "svelte";
  export type TimeStyle = "normal" | "incorrect" | "record-set" | "inactive";

  export interface StopwatchProps {
    is_enabled: boolean;
    component?: SvelteComponent;
    is_inactive?: boolean;
    elapsed_time?: number;
    best_time?: number;
    new_record_set?: boolean;
    time_style?: TimeStyle;
  }
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { roundToDecimalPlaces, formatTime } from "$/lib/utils";

  export let elapsed_time: number = 0;
  export let is_inactive: boolean = false;
  export let best_time: number = -1;

  // colour of the stopwatch's time
  export let time_style: TimeStyle = "normal";

  let start_time: number | null = null;
  let timer_interval: number | null = null;

  onMount(() => {
    return () => {
      stopTimer();
    };
  });

  export function startTimer() {
    start_time = Date.now(); //  - (elapsed_time * 1000); // <- for when we want to pause and start

    timer_interval = setInterval(() => {
      updateTime();
    }, 100);
  }

  export function updateTime() {
    if (start_time !== null) {
      const now = Date.now();
      elapsed_time = roundToDecimalPlaces((now - start_time) / 1000, 2);
    } else {
      console.log("start_time is null");
    }
  }

  export function stopTimer() {
    if (timer_interval) {
      clearInterval(timer_interval);
      timer_interval = null;
    }
  }

  export function resetTimer() {
    stopTimer();
    elapsed_time = 0;
    start_time = null;
  }

  export function hasStarted() {
    return start_time !== null;
  }
</script>

<div class="stopwatch">
  <span
    class="time {time_style} nowrap"
    class:incorrect-color={time_style == "incorrect"}
    class:new-best-color={time_style == "record-set"}
  >
    {#if is_inactive}--:--.-{:else}{formatTime(elapsed_time)}{/if}s
  </span>
  {#if best_time < 0}
    <span class="best-time not-set"> best: --:--.-s</span>
  {:else}
    <span class="best-time">
      best: <span class="nowrap">{formatTime(best_time)}s</span>
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

    min-width: fit-content; /* Prevents breaking due to container size */
  }

  .time {
    font-size: 2rem;
    display: flex;
    font-weight: 400;
    justify-content: right;
    align-items: right;
  }

  .time.record-set {
    color: var(--new-best-time-color);
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
