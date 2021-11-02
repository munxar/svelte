import { cubicIn } from "svelte/easing";

export function expand(node, params) {
	const { delay = 0, duration = 400, easing = cubicIn } = params;

	const w = parseFloat(getComputedStyle(node).strokeWidth);

	return {
		delay,
		duration,
		easing,
		css: (t) => `stroke-width: ${t * w}`,
	};
}
