<script>
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	export let sections = [];
	export let active_section = null;
	export let isLoading = false;

	$: examples = sections.reduce((arr, s) => {
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
		{example.title}
	</div>
	<div>
		<button on:click={prev} href={prevLink}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					d="M6.3 12 18.8.9c.2-.2.2-.5 0-.7-.2-.2-.5-.2-.7 0l-13 11.5s-.1.2-.1.3.1.3.2.4l13 11.5c.1.1.2.1.3.1.1 0 .3-.1.4-.2.2-.2.2-.5 0-.7L6.3 12z"
				/>
			</svg>
		</button>
		<input
			min="1"
			max={examples.length}
			type="number"
			value={index + 1}
			on:input={(e) => toPage(e.target.value - 1)}
		/>
		/ {examples.length}

		<button on:click={next} href={nextLink}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 24 24"
				fill="currentColor"
			>
				<path
					xmlns="http://www.w3.org/2000/svg"
					d="M18.8 11.6 5.8.1c-.2-.2-.5-.1-.7.1-.2.2-.1.5.1.7L17.7 12 5.2 23.1c-.2.2-.2.5 0 .7 0 .1.2.2.3.2.1 0 .2 0 .3-.1l13-11.5c.1-.1.2-.2.2-.4s-.1-.3-.2-.4z"
				/>
			</svg>
		</button>
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
	button {
		height: 12px;
		color: var(--prime);
		padding: 0;
		margin: 0;
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
