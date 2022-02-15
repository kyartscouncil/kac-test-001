<template>
	<section>
		<h2>Filter</h2>
	</section>
	<section>
		<base-card>
			<div class="controls">
				<base-button mode="outline">Shuffle</base-button>
			</div>
			<ul v-if="hasExhibitors">
				<exhibitor-item
					v-for="exhibitor in filteredExhibitors"
					:key="exhibitor.id"
					:id="exhibitor.id"
					:business-name="exhibitor.businessName"
					:first-name="exhibitor.firstName"
					:last-name="exhibitor.lastName"
					:booth-number="exhibitor.boothNumber"
					:media="exhibitor.media"
				></exhibitor-item>
			</ul>
			<h3 v-else>No exhibitors found.</h3>
		</base-card>
	</section>
</template>

<script>
	import ExhibitorItem from '../../components/exhibitors/ExhibitorItem.vue';

	export default {
		components: {
			ExhibitorItem,
		},
		computed: {
			filteredExhibitors() {
				return this.$store.getters['exhibitors/exhibitors'];
			},
			hasExhibitors() {
				return this.$store.getters['exhibitors/hasExhibitors'];
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.controls {
		display: flex;
		justify-content: space-between;
	}
</style>
