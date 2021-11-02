<script>
	import { Section } from "@sveltejs/site-kit";
	import ReplWidget from "../../components/Repl/ReplWidget.svelte";

	export let id;
</script>

<Section>
	<div class="example">
		<slot />

		<div class="repl-container">
			<ReplWidget example={id} />
		</div>
	</div>
</Section>

<style>
	.example {
		width: 100%;
	}

	.example :global(a) {
		color: inherit;
	}

	.example > :global(p) {
		margin: 4.4rem 2.4rem 2.4rem 0;
	}

	.repl-container {
		width: 100%;
		height: 420px;
		border-radius: var(--border-r);
		overflow: hidden;
	}

	@media (min-width: 920px) {
		.example {
			display: grid;
			grid-template-columns: 1fr 3fr;
			grid-gap: 0.5em;
			align-items: start;
		}
	}
</style>
