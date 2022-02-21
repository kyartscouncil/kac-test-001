<template>
	<section class="container grid-primary">
		<div>
			<h1>Market Info</h1>
		</div>
		<div>
			<h2>Dates</h2>

			<div class="grid-secondary">
				<div>
					<h3>Saturday, March 12</h3>
					<p>10 a.m. - 5 p.m.</p>
				</div>
				<div>
					<h3>Sunday, March 13</h3>
					<p>10 a.m. - 4 p.m.</p>
				</div>
			</div>
		</div>
		<div>
			<h2>Location</h2>
			<p>Alltech Arena at the Kentucky Horse Park</p>
			<p>4089 Iron Works Pike</p>
			<p>Lexington, KY 40511</p>
		</div>
		<div>
			<h2>Parking</h2>
			<p>Parking at the Kentucky Horse Park is $5 per vehicle per entry, unless otherwise stated.</p>
			<p>
				Parking accommodations for guests with disabilities are available in the Kentucky Horse Park parking lots
				and labeled with signaged.
			</p>
		</div>
	</section>
</template>

<style scoped>
	.container {
		margin: 0 auto;
		width: 90vw;
	}

	section {
		margin: 1rem auto;
		padding: 1rem 0;
	}
	.grid-primary {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 1rem;
		column-gap: 1rem;
	}
	.grid-secondary {
		display: grid;
		grid-template-columns: 1fr 1fr;
		row-gap: 1rem;
		column-gap: 1rem;
	}
</style>
