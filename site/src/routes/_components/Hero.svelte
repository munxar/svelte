<script>
	export let title;
	export let tagline;
	export let description;
	export let sub;	
</script>

<section class="hero">
	
	<h1 class="logotype">{title}</h1>
	
	<h2>{tagline}</h2>
	
	<h3>{description}</h3>	
	
	<h3>{sub}</h3>
	
</section>	

<style>
	.hero {
		position: relative;
		margin: 0rem auto;
		padding: 0 var(--side-nav);
		max-width: 120rem;
		height: 100vh;
	}
	h3 {
		margin-top: 2rem;
	}
	h3,
	h2,
	h1 {
		color: var(--text);
	}

	.hero {
		margin: 10rem auto;
	}

	.hero h3,
	.hero h2,
	.logotype {
		position: relative;
		left: 1.6rem;
	}

	.logotype {
		height: 4rem;
	}

	@media (min-width: 640px) {
		.logotype {
			height: 6rem;
		}
	}

	@media (min-width: 800px) {
		.hero {
			margin: 15rem auto;
		}

		.hero h3,
		.hero h2,		
		.logotype {
			left: 3rem;
		}
	}
</style>
