import { bounceOut } from "svelte/easing";

export function expand(node, params) {
	const { delay = 0, duration = 400, easing = bounceOut } = params;

	const w = parseFloat(getComputedStyle(node).strokeWidth);

	return {
		delay,
		duration,
		easing,
		css: (t) => `stroke-width: ${t * w}; stroke: hsl(94, ${t * 42}%, 46%)`,
	};
}
