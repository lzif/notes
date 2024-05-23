<script lang="ts">
  import "../app.css";
  import DarkModeToogle from "$lib/components/DarkModeToogle.svelte"
</script>

<DarkModeToogle/>
<slot/>

<style>
:global(body) {
  color: var(--onBackground);
  background-color: var(--background);
}
</style>
