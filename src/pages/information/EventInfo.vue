<template>
	<section class="container grid-primary">
		<div>
			<h1>Welcome to The Kentucky Crafted Market</h1>
		</div>

		<div>
			<h2>Location</h2>
			<p>Alltech Arena at the Kentucky Horse Park</p>
			<p>4089 Iron Works Pike</p>
			<p>Lexington, KY 40511</p>
		</div>

		<base-card>
			<div class="grid-secondary">
				<div>
					<h3>Trade Hours</h3>
					<p>Friday, March 11</p>
					<p>10 a.m. - 5 p.m.</p>
					<p><i>(Wholesale buyers with ID only)</i></p>
				</div>
				<div>
					<h3>Public Hours</h3>
					<p>Saturday, March 12</p>
					<p>10 a.m. - 5 p.m.</p>
				</div>
				<div>
					<h3>Public Hours</h3>
					<p>Sunday, March 13</p>
					<p>10 a.m. - 4 p.m.</p>
				</div>
			</div>
		</base-card>

		<div>
			<p>
				The Kentucky Arts Council reintroduces its annual show featuring the best visual and craft artists in the
				Commonwealth, The Kentucky Crafted Market. The 2022 event features more than 90 exhibitors,including
				artists, publishers and food vendors. There is no admission fee for this year’s show. Instead, the arts
				council encourages donations to the Team Western Kentucky Tornado Relief Fund. Visitors can make a cash
				donation on-site at the event or give online at the
				<a href="https://secure.kentucky.gov/formservices/finance/WKYrelief" target="_blank"
					>Team Western Kentucky Tornado Relief Fund site</a
				>.
			</p>
		</div>
	</section>
</template>

<style scoped>
	.container {
		margin: 0 auto;
		width: 90vw;
	}

	p {
		line-height: 1.5rem;
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
		grid-template-columns: 1fr 1fr 1fr;
		row-gap: 1rem;
		column-gap: 1rem;
	}
</style>
