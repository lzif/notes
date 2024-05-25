<script lang="ts">
  import { fly } from "svelte/transition"; // Import the fade transition
  import Portal from "../navigation/Portal.svelte";
  export let showModal: boolean; // boolean

  let dialog: HTMLDialogElement;

  $: if (dialog && showModal) dialog.showModal();
</script>

<Portal target="body">
  <div
    class={`opacity-0 h-full inset-0 duration-[400ms] ease-[cubic-bezier(0 , 0, 0, 1)] w-full -z-50 overflow-auto fixed left-0 top-0 flex items-center ju stify-center`}
  >
    <button
      on:click={() => dialog.close()}
      class="z-40 overflow-auto fixed bg-black opacity-50"
    />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <dialog
      bind:this={dialog}
      on:close={() => (showModal = false)}
      on:click|self={() => dialog.close()}
      class={`z-50 flex flex-col w-11/12 sm:w-[480px] rounded-xl bg-surface-container transition duration-300 transform ${showModal ? "opacity-100 transform-[scale(100%)]" : "opacity-0 transform-[scale(95%)]"}`}
    >
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click|stopPropagation
        class="divide-y divide-inherit divide-outline"
      >
        <h2>
          <slot name="header" />
        </h2>
        <div>
          <slot class="m-2" />
        </div>
        <!-- svelte-ignore a11y-autofocus -->
        <div>
          <button
            class="m-2 bg-error float-right py-2 px-3 rounded-lg"
            on:click={() => dialog.close()}>Close</button
          >
        </div>
      </div>
    </dialog>
  </div>
</Portal>
