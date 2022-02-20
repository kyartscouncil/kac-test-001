<template>
	<section>
		<exhibitor-filter v-if="false" @change-filter="setFilters"></exhibitor-filter>
	</section>
	<section>
			<div v-if="false" class="controls">
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
	</section>
</template>

<script>
	import ExhibitorItem from '../../components/exhibitors/ExhibitorItem.vue';
	import ExhibitorFilter from '../../components/exhibitors/ExhibitorFilter.vue';

	export default {
		components: {
			ExhibitorItem,
			ExhibitorFilter,
		},
		data() {
			return {
				activeFilters: {
					painting: true,
					sculpture: true,
					fiber: true,
				},
			};
		},
		computed: {
			filteredExhibitors() {
				const exhibitors = this.$store.getters['exhibitors/exhibitors'];
				return exhibitors.filter((exhibitor) => {
					if (this.activeFilters.painting && exhibitor.media.includes('painting')) {
						return true;
					}
					if (this.activeFilters.sculpture && exhibitor.media.includes('sculpture')) {
						return true;
					}
					if (this.activeFilters.fiber && exhibitor.media.includes('fiber')) {
						return true;
					}
					return false;
				});
			},
			hasExhibitors() {
				return this.$store.getters['exhibitors/hasExhibitors'];
			},
		},
		methods: {
			setFilters(updatedFilters) {
				this.activeFilters = updatedFilters;
			},
		},
	};
</script>

<style scoped>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		column-gap: 1rem;
	}

	.controls {
		display: flex;
		justify-content: space-between;
	}
</style>
