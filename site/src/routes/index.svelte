<script>
	import { Blurb, Hero, Section } from "@sveltejs/site-kit";
	import Example from "./_components/Example.svelte";
	// import Lazy from '../components/Lazy.svelte';

	// TODO this causes a Sapper CSS bug...
	// function loadReplWidget() {
	// 	console.log('lazy loading');
	// 	return import('../components/Repl/ReplWidget.svelte').then(mod => mod.default);
	// }
</script>

<svelte:head>
	<title>Svelte • Cybernetically enhanced web apps</title>

	<meta name="twitter:title" content="Svelte" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<Hero
	title="SVELTE"
	tagline="Why Svelte is AWESOME"
	logotype="svelte-logotype.svg"
/>

<Blurb>
	<a href="blog/write-less-code" slot="one">
		<h2>Write less code</h2>
		<p>
			Build boilerplate-free components using languages you already know — HTML,
			CSS and JavaScript
		</p>
	</a>

	<a href="blog/virtual-dom-is-pure-overhead" slot="two">
		<h2>No virtual DOM</h2>
		<p>
			Svelte compiles your code to tiny, framework-less vanilla JS — your app
			starts fast and stays fast
		</p>
	</a>

	<a href="blog/svelte-3-rethinking-reactivity" slot="three">
		<h2>Truly reactive</h2>
		<p>
			No more complex state management libraries — Svelte brings reactivity to
			JavaScript itself
		</p>
	</a>
</Blurb>

<div class="examples">
	<Example id="hello-world">
		<p>Svelte components are built on top of HTML. Just add data.</p>
	</Example>

	<Example id="nested-components">
		<p>
			CSS is component-scoped by default — no more style collisions or
			specificity wars. Or you can <a href="/blog/svelte-css-in-js"
				>use your favourite CSS-in-JS library</a
			>.
		</p>
	</Example>

	<Example id="reactive-assignments">
		<p>
			Trigger efficient, granular updates by assigning to local variables. The
			compiler does the rest.
		</p>
	</Example>

	<Example id="svg-transitions">
		<p>
			Build beautiful UIs with a powerful, performant transition engine built
			right into the framework.
		</p>
	</Example>
</div>

<style>
	/* darken text for accessibility */
	/* TODO does this belong elsewhere? */
	:global(.back-light) {
		--text: hsl(36, 3%, 44%);
	}

	.examples {
		background: var(--second);
		color: white;
		overflow: hidden;
	}
</style>
