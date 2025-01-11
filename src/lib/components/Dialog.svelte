<script lang="ts">
  import Button from "$lib/components/Button.svelte";

  export let open = false;
  export let title: string = "Dialog Title";
  export let closeCallback: () => void = () => {}; // do nothing by default

  let dialog: HTMLDialogElement;

  $: if (open) {
    dialog?.showModal();
  } else {
    dialog?.close();
  }

  function handleClose() {
    open = false;
    if (closeCallback) closeCallback();
  }
</script>

<div class="modal-backdrop" aria-hidden="true" on:click={handleClose}>
  <dialog bind:this={dialog} on:close={handleClose}>
    <h2>{title}</h2>
    <slot />
    <Button on:click={handleClose} selected={true}>Close</Button>
  </dialog>
</div>

<style>
  dialog {
    border: none;
    border-radius: 0.5rem;
    padding: 20px;

    background-color: var(--background-color);
    border: 2px var(--dark-button-color) solid;
    color: var(--text-color);
  }

  dialog::backdrop {
    backdrop-filter: blur(10px);
    background: rgba(0, 0, 0, 0.3);
  }
</style>
