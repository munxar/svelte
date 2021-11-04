<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	export let sections = [];
	export let active_section = null;
	export let isLoading = false;

	$: examples = sections.reduce((arr, s) => {
		s.examples = s.examples.map((e) => {
			e.section = s;

			return e;
		});
		return arr.concat(s.examples);
	}, []);
	$: example = examples.find((e) => e.slug === active_section) || {};
	$: index = examples.indexOf(example);
	$: hasPrev = index > 0;
	$: hasNext = index < examples.length - 1;
	$: nextLink = `${$page.path}#${examples[index + 1]?.slug}`;
	$: prevLink = `${$page.path}#${examples[index - 1]?.slug}`;

	function toPage(index) {
		if (index >= 0 && index < examples.length) {
			location.hash = examples[index].slug;
		}
	}

	function prev() {
		if (hasPrev) {
			toPage(index - 1);
		}
	}

	function next() {
		if (hasNext) {
			toPage(index + 1);
		}
	}

	const keydown = (e) => {
		if (e.altKey && e.shiftKey) {
			if (e.code === "ArrowLeft" && hasPrev) {
				prev();
			}
			if (e.code === "ArrowRight" && hasNext) {
				next();
			}
		}
	};
</script>

<svelte:window on:keydown={keydown} />

<nav>
	<div class="title">
		{example.section?.title} / {example.title}
	</div>
	<div class="pager">
		<input
			min="1"
			max={examples.length}
			type="number"
			value={index + 1}
			on:input={(e) => toPage(e.target.value - 1)}
		/>
		/ {examples.length}
	</div>
</nav>

<style>
	nav {
		display: flex;
	}
	.title {
		flex: 1;
		padding-left: 1rem;
	}
	.pager {
		padding-right: 1rem;
	}
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	input {
		border: none;
		outline: none;
		text-align: right;
		width: 3rem;
		color: var(--text);
		font-family: var(--font);
		font-size: inherit;
	}
	button:hover {
		color: black;
	}
</style>
