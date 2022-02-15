<template>
	<section>Filter</section>
	<section>
		<div class="controls">
			<button>Shuffle</button>
		</div>
		<ul v-if="hasExhibitors">
			<li v-for="exhibitor in filteredExhibitors" :key="exhibitor.id">{{ exhibitor.firstName }}</li>
		</ul>
		<h3 v-else>No exhibitors found.</h3>
	</section>
</template>

<script>
	export default {
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
