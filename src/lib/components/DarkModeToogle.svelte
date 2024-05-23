<script lang="ts">
	import Sun from './Sun.svelte';
	import Moon from './Moon.svelte';
	import { browser } from '$app/environment';
	import { THEMES } from '$lib/config';
	let theme = '';

	if (browser) {
		theme = window.document.documentElement.getAttribute('data-theme')!;
	}

	function set_theme(theme: string) {
		if (!Object.values(THEMES).includes(theme)) return;
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}

	function toggle_theme(): void {
		theme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
		set_theme(theme);
	}
</script>

<button on:click={toggle_theme}>
	{#if theme === 'dark'}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
