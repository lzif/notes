<script lang="ts">
  import DarkModeToogle from "./DarkModeToggle.svelte";
  import { updateTheme } from "tailwind-material-colors/lib/updateTheme.esm";
  import { onMount } from "svelte";
  import Modal from "../modals/Modal.svelte";
  import { createToast, deleteToast } from "$lib/utils/toast";
  let color: string;
  let showModal = false;
  const changeThemeColor = async () => {
    localStorage.setItem("color-theme", color);
    updateTheme(
      {
        primary: color,
      },
      "class",
    );
  };
  onMount(() => {
    const colorTheme = localStorage.getItem("color-theme");
    if (colorTheme) {
      color = colorTheme;
      changeThemeColor();
      deleteToast("change-theme");
    }
  });
</script>

<button
  on:click={() => (showModal = true)}
  class="material-symbols-outlined text-primary"
>
  palette
</button>

<Modal bind:showModal>
  <h2 class="m-2 text-lg font-bold px-2" slot="header">Preference</h2>
  <table class="w-full table-auto">
    <tr>
      <td class="px-4 py-2">Theme Mode</td>
      <td class="px-4 py-2 text-center"><DarkModeToogle type="info" /></td>
    </tr>
    <tr>
      <td class="px-4 py-2">Theme Color</td>
      <td class="px-4 py-2 text-center"
        ><input
          type="color"
          bind:value={color}
          on:change={changeThemeColor}
        /></td
      >
    </tr>
  </table>
</Modal>
