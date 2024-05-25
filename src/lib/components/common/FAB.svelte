<script lang="ts">
  import { fly } from "svelte/transition";

  let showButtons = false;
</script>

<button
  on:click={() => (showButtons = !showButtons)}
  class="fixed bottom-5 right-5 bg-primary rounded-full p-4 shadow-lg focus:outline-none z-49 transition duration-300 ease-in-out"
>
  <svg
    class={`w-6 h-6 transition-all ${showButtons ? "rotate-45" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    ></path>
  </svg>
</button>

{#if showButtons}
  <div
    transition:fly={{ y: 10, duration: 300 }}
    class="fixed bottom-20 right-5 space-x-2 z-40 flex flex-col"
  >
    <button
      class="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-700"
      >New Note</button
    >
    <button
      class="bg-purple-500 text-white rounded-md px-4 py-2 hover:bg-purple-700"
      >New Todo</button
    >
  </div>
{/if}
