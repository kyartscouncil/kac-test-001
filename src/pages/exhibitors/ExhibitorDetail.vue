<template>
	<section>
		<base-card>
			<h4>Booth #: {{ boothNumber }}</h4>
			<h2>{{ businessName }}</h2>
			<h3>{{ fullName }}</h3>
			<base-badge v-for="medium in media" :key="medium" :type="medium" :title="medium"></base-badge>
			<p>{{ description }}</p>
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
			businessName() {
				return this.selectedExhibitor.businessName;
			},
			fullName() {
				return this.selectedExhibitor.firstName + ' ' + this.selectedExhibitor.lastName;
			},
			media() {
				return this.selectedExhibitor.media;
			},
			boothNumber() {
				return this.selectedExhibitor.boothNumber;
			},
			description() {
				return this.selectedExhibitor.description;
			},
		},
		created() {
			this.selectedExhibitor = this.$store.getters['exhibitors/exhibitors'].find(
				(exhibitor) => exhibitor.id === this.id
			);
		},
	};
</script>
