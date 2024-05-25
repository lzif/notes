<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { portal } from "../navigation/Portal.svelte";
  export let id: string;
  export let message: string;
  export let duration: number | undefined = undefined;

  const dispatch = createEventDispatcher();

  let visible = true;

  if (duration) {
    setTimeout(() => {
      visible = false;
      dispatch("close", { id }); // Kirim event 'close' dengan id toast
    }, duration);
  }
</script>

<!-- toast[data-toast-id -->
{#if visible}
  <div
    use:portal={"body"}
    class="toast fixed bottom-5 right-5 p-2 bg-surface-container"
    data-toast-id={id}
  >
    {message}
    {#if !duration}
      <button on:click={() => dispatch("close", { id })}>Close</button>
    {/if}
  </div>
{/if}
