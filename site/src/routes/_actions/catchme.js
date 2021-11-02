import { spring } from "svelte/motion";

export function catchme(node) {
	const offsetX = 180;
	const offsetY = 68;

	let coords = spring(
		{ x: window.innerWidth / 2 - offsetX, y: window.innerHeight / 2 },
		{
			stiffness: 0.1,
			damping: 0.25,
		}
	);
	let size = spring(1);

	coords.subscribe(({ x, y }) => {
		node.style.left = `${x}px`;
		node.style.top = `${y}px`;
	});
	size.subscribe((s) => {
		node.style.transform = `scale(${s})`;
	});

	let counter = 0;

	function handleMousedown(e) {
		e.preventDefault();
		counter++;

		const x = Math.floor((window.innerWidth - offsetX) * Math.random());
		const y = Math.floor((window.innerHeight - offsetY) * Math.random());

		coords.set({ x, y });
		if (counter > 10) {
			size.set(0);
		}
	}

	node.addEventListener("mouseenter", handleMousedown);

	return {
		destroy() {
			node.removeEventListener("mouseenter", handleMousedown);
		},
	};
}
