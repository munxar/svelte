<!-- FIXME sometimes it adds a trailing slash when landing -->
<script context="module">
	export async function load({ fetch }) {
		const sections = await fetch(`examples.json`).then((r) => r.json());
		const title_by_slug = sections.reduce((acc, { examples }) => {
			examples.forEach(({ slug, title }) => {
				acc[slug] = title;
			});

			return acc;
		}, {});

		return {
			props: {
				sections,
				title_by_slug,
			},
		};
	}
</script>

<script>
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	import Repl from "@sveltejs/svelte-repl";

	import ScreenToggle from "../../components/ScreenToggle.svelte";
	import {
		mapbox_setup, // see site/content/examples/15-context/00-context-api
		rollupUrl,
		svelteUrl,
	} from "../../config";
	import { process_example } from "../../utils/examples";
	import { getFragment } from "@sveltejs/site-kit/utils/navigation";
	import TableOfContents from "./_TableOfContents.svelte";

	export let sections;
	export let title_by_slug;

	let active_slug;
	let width;
	let offset = 1;
	let repl;
	let isLoading = false;
	const cache = {};

	function showExampleCodeOnChange() {
		offset = 1;
	}

	$: title = title_by_slug[active_slug] || "";
	$: first_slug = sections[0].examples[0].slug;
	$: mobile = width < 768; // note: same as per media query below
	$: replOrientation = mobile || width > 768 ? "columns" : "rows";
	$: if (repl && active_slug) {
		if (active_slug in cache) {
			repl.set({ components: cache[active_slug] });
			showExampleCodeOnChange();
		} else {
			isLoading = true;
			fetch(`examples/${active_slug}.json`)
				.then(async (response) => {
					if (response.ok) {
						const { files } = await response.json();
						return process_example(files);
					}
				})
				.then((components) => {
					cache[active_slug] = components;
					repl.set({ components });
					showExampleCodeOnChange();
					isLoading = false;
				})
				.catch(() => {
					isLoading = false;
				});
		}
	}

	onMount(() => {
		const onhashchange = () => {
			active_slug = getFragment();
		};
		window.addEventListener("hashchange", onhashchange, false);

		const fragment = getFragment();
		if (fragment) {
			active_slug = fragment;
		} else {
			active_slug = first_slug;
			goto(`examples#${active_slug}`);
		}

		return () => {
			window.removeEventListener("hashchange", onhashchange, false);
		};
	});
</script>

<svelte:head>
	<title>{title} {title ? "•" : ""} LiipConf Examples</title>

	<meta name="twitter:title" content="Svelte examples" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Interactive example Svelte apps" />
</svelte:head>

<h1 class="visually-hidden">Examples</h1>
<div class="examples-container" bind:clientWidth={width}>
	<div class="viewport">
		<div class="repl-container" class:loading={isLoading}>
			<Repl
				bind:this={repl}
				workersUrl="workers"
				{svelteUrl}
				{rollupUrl}
				orientation={replOrientation}
				fixed={mobile}
				relaxed
				injectedJS={mapbox_setup}
			/>
		</div>
		<TableOfContents {sections} active_section={active_slug} {isLoading} />
	</div>
</div>

<style>
	.examples-container {
		position: relative;
		height: calc(100vh - var(--nav-h));
		overflow: hidden;

		box-sizing: border-box;
	}

	.viewport {
		display: grid;
		height: 100%;
		grid-template-rows: auto max-content;
		transition: transform 0.3s;
		grid-auto-rows: 100%;
	}

	.repl-container.loading {
		opacity: 0.6;
	}

	/* temp fix for #2499 and #2550 while waiting for a fix for https://github.com/sveltejs/svelte-repl/issues/8 */

	.repl-container :global(.tab-content),
	.repl-container :global(.tab-content.visible) {
		pointer-events: all;
		opacity: 1;
	}
	.repl-container :global(.tab-content) {
		visibility: hidden;
	}
	.repl-container :global(.tab-content.visible) {
		visibility: visible;
	}

	@media (min-width: 768px) {
		.examples-container {
			padding: 0;
			height: 100vh;
		}

		.viewport {
			width: 100%;
			height: 100%;
			transition: none;
		}
	}
</style>
