<template>
	<section class="container grid-primary">
		<div>
			<h1>Market Info</h1>
		</div>
		<div>
			<h2>Hours</h2>
			<p>The Kentucky Crafted Market is open to the public during the following hours:</p>

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
			<p>Parking at the Kentucky Horse Park is $5 per vehicle per entry, unless stated otherwise.</p>
		</div>
		<div>
			<h2>Accessible Parking</h2>
			<p>
				Parking accommodations for guests with disabilities are available in the Kentucky Horse Park parking lots
				and labeled with signage.
			</p>
		</div>
		<div>
			<h2>Information Desk</h2>
			<p>
				The information desk is located near the front doors of the Alltech Arena. For questions about the
				facilities, the show or market exhibitors, please talk with staff at the information desk.
			</p>
		</div>
		<div>
			<h2>Accessibility Services</h2>
			<p>
				A limited number of wheelchairs are available at the information desk for checkout with a valid I.D. and
				credit card number.
			</p>
			<p>All restrooms on the grounds are wheelchair accessible, and ramps give access to all buildings.</p>
		</div>
		<div>
			<h2>Food Services</h2>
			<p>
				The concessions stations are located at the front of the exhibit hall and will be open during show hours.
				There are a number of restaurants located within driving distance of the Kentucky Horse Park in Lexington
				and Georgetown. See the information desk for recommendations.
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
