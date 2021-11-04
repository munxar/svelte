<script>
	import { Stringer } from "./Stringer";

	let s = new Stringer("World");
</script>

<h1>Hello {s}!</h1>

<button
	on:click={() => {
		s.reverse();
		s = s;
	}}
>
	reverse
</button>
