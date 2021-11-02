<script>
	import { Blurb, Section } from "@sveltejs/site-kit";
	import Backdrop from "./_components/Backdrop.svelte";
	import Example from "./_components/Example.svelte";
	import Hero from "./_components/Hero.svelte";
</script>

<svelte:head>
	<title>LiipConf 2021 • Why Svelte is AWESOME</title>

	<meta name="twitter:title" content="Svelte" />
	<meta name="twitter:description" content="Cybernetically enhanced web apps" />
	<meta name="Description" content="Cybernetically enhanced web apps" />
</svelte:head>

<Backdrop />

<Hero
	title="LiipConf - 2021"
	tagline="Why Svelte is AWESOME"
	description="Sascha Aeppli | Developer @ TeamFusion.Liip.ZH.Suisse.Earth"
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

<div class="to-examples">
	<div class="pills">
		<a class="pill blue" href="https://reactjs.org">
			<h2>Blue Pill</h2>
		</a>
		<a class="pill red" href="/examples#hello-world">
			<h2>Red Pill</h2>
		</a>
	</div>
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
	.to-examples {
		display: flex;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}
	.pills {
		display: flex;
	}

	.pill {
		padding: 1rem 3rem;
		border-radius: 3rem;
		margin: 1rem;
		border: 4px solid black;
		opacity: 80%;
	}
	.pill:hover {
		opacity: 100%;
		transition: transform linear 200ms;
		transform: scale(1.1);
	}
	.pill h2 {
		color: #f7f7f5;
	}
	.red {
		background-color: #c02e00;
		border-color: #d33301;
	}
	.blue {
		background-color: #0d4bb1;
		border-color: #195ccd;
	}
</style>
