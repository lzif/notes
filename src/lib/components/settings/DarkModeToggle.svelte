<script lang="ts">
  import Sun from "./Sun.svelte";
  import Moon from "./Moon.svelte";
  import { browser } from "$app/environment";
  import { THEMES } from "$lib/config";
  let theme = "";

  export let type: "icon" | "info" = "icon";

  if (browser) {
    theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }

  function set_theme(theme: string) {
    if (!Object.values(THEMES).includes(theme)) return;
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark");
  }

  function toggle_theme(): void {
    theme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    set_theme(theme);
  }
  $: Info = theme === "dark" ? "Dark" : "Light";
  $: Icon = theme === "dark" ? Sun : Moon;
</script>

<button on:click={toggle_theme}>
  {#if type === "info"}
    {Info}
  {:else}
    <Icon />
  {/if}
</button>
