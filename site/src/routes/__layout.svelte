<script>
	import "@sveltejs/site-kit/base.css";
	import { setContext } from "svelte";
	import { page, navigating, session } from "$app/stores";
	import { Icon, Icons, Nav, NavItem } from "@sveltejs/site-kit";
	import PreloadingIndicator from "../components/PreloadingIndicator.svelte";

	export let segment;

	setContext("app", {
		login: () => {
			const login_window = window.open(
				`${window.location.origin}/auth/login`,
				"login",
				"width=600,height=400"
			);

			window.addEventListener("message", function handler(event) {
				login_window.close();
				window.removeEventListener("message", handler);
				$session.user = event.data.user;
			});
		},

		logout: async () => {
			const r = await fetch(`/auth/logout`, {
				credentials: "include",
			});

			if (r.ok) $session.user = null;
		},
	});
</script>

<Icons />

{#if $navigating && $navigating.to}
	<PreloadingIndicator />
{/if}

<main>
	<slot />
</main>

<style>
	:global(body) {
		--nav-h: 0rem;
		--prime: #6ea644;
		--second: #414141;
		--flash: #a4c339;
	}
	main {
		position: relative;
		margin: 0 auto;
		/* padding: var(--nav-h) var(--side-nav) 0 var(--side-nav); */
		padding: var(--nav-h) 0 0 0;
		overflow-x: hidden;
	}
</style>
