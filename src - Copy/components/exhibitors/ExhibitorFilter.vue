<template>
	<base-card>
		<h2>Filter by Medium</h2>
		<span class="filter-option">
			<input type="checkbox" id="painting" checked @change="setFilter" />
			<label for="painting">painting</label>
		</span>
		<span class="filter-option">
			<input type="checkbox" id="sculpture" checked @change="setFilter" />
			<label for="sculpture">sculpture</label>
		</span>
		<span class="filter-option">
			<input type="checkbox" id="fiber" checked @change="setFilter" />
			<label for="fiber">fiber</label>
		</span>
	</base-card>
</template>

<script>
	export default {
		emits: ['change-filter'],
		data() {
			return {
				filters: {
					painting: true,
					sculpture: true,
					fiber: true,
				},
			};
		},
		methods: {
			setFilter(event) {
				const inputId = event.target.id;
				const isActive = event.target.checked;
				const updatedFilters = {
					...this.filters,
					[inputId]: isActive,
				};
				this.filters = updatedFilters;
				this.$emit('change-filter', updatedFilters);
			},
		},
	};
</script>

<style scoped>
	h2 {
		margin: 0.5rem 0;
	}

	.filter-option {
		margin-right: 1rem;
	}

	.filter-option label,
	.filter-option input {
		vertical-align: middle;
	}

	.filter-option label {
		margin-left: 0.25rem;
	}

	.filter-option.active label {
		font-weight: bold;
	}
</style>
