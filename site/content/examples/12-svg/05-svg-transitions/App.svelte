<script>	
	import { draw } from "svelte/transition";
	import { expand } from "./custom-transitions.js";
	import { liip } from "./shape.js";

	let visible = true;
</script>

{#if visible}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="-1 0 96 34"
		style="stroke: #6EA644; fill: none; stroke-width: 1;"
	>
		{#each liip as char, i}			
			<path
				in:draw={{ duration: 200, delay: 200 * i }}
				out:expand={{ delay: 200 * i }}
				d={char}
			/>			
		{/each}
	</svg>
{/if}

<label>
	<input type="checkbox" bind:checked={visible} />
	toggle me
</label>

<style>
	svg {
		width: 100%;
		height: 100%;
	}

	label {
		position: absolute;
		top: 1em;
		left: 1em;
	}
</style>
