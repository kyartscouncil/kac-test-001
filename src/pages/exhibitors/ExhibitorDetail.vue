<template>
	<section>
		<base-card>
			<h4>Booth #: {{ boothNumber }}</h4>
			<h2>{{ businessName }}</h2>
			<h3>{{ fullName }}</h3>
			<div>
				<p>{{ fullLocation }}</p>
				<p>{{ fullPhone }}</p>
				<p>{{ email }}</p>
				<p>{{ businessUrl }}</p>
			</div>
			<base-badge v-for="medium in media" :key="medium" :type="medium" :title="medium"></base-badge>
		</base-card>
	</section>
</template>

<script>
	export default {
		props: ['id'],
		data() {
			return {
				selectedExhibitor: null,
			};
		},
		computed: {
			boothNumber() {
				return this.selectedExhibitor.boothNumber;
			},
			media() {
				return this.selectedExhibitor.media;
			},
			businessName() {
				return this.selectedExhibitor.businessName;
			},
			fullName() {
				return this.selectedExhibitor.firstName + ' ' + this.selectedExhibitor.lastName;
			},
			fullLocation() {
				return this.selectedExhibitor.city + ', ' + this.selectedExhibitor.state;
			},
			fullPhone() {
				return this.selectedExhibitor.phone.slice(0, 3) + '-' + this.selectedExhibitor.phone.slice(3, 6) + '-' + this.selectedExhibitor.phone.slice(6);
			},
			email() {
				return this.selectedExhibitor.email;
			},
			businessUrl() {
				return this.selectedExhibitor.businessUrl;
			},
		},
		created() {
			this.selectedExhibitor = this.$store.getters['exhibitors/exhibitors'].find(
				(exhibitor) => exhibitor.id === this.id
			);
		},
	};
</script>

<style scoped>
	div {
		margin: 1.5rem 0rem 2rem 0rem;
	}

	p {
		margin: 0.25rem 0rem;
	}
</style>
