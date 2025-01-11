<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import Dialog from "$lib/components/Dialog.svelte";
  export let instructions: string = "Default instructions";

  export let is_open = false;

  function closeHelper() {
    is_open = false;
  }

  onMount(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeHelper();
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  });

  // function handleDialogClose() {
  //   console.log("Dialog closed");
  // }
</script>

<Dialog bind:open={is_open} title="Help">
  <p>{@html instructions.replace(/\n/g, "<br>")}</p>
</Dialog>

<style>
</style>
