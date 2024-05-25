<script lang="ts">
  import "../app.css";
  import Nav from "$lib/components/navigation/Nav.svelte";
  import FAB from "$lib/components/common/FAB.svelte";
  import { onMount } from "svelte";
  import { createToast } from "$lib/utils/toast";
  onMount(() => {});
</script>

<Nav />
<slot />

<FAB />
