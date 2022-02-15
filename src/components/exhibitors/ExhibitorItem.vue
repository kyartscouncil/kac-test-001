<template>
	<li>
		<h4>Booth #: {{ boothNumber }}</h4>
		<h2>{{ businessName }}</h2>
		<h3>{{ fullName }}</h3>
		<div>
			<base-badge v-for="medium in media" :key="medium" :type="medium" :title="medium"></base-badge>
		</div>
		<div class="actions">
			<base-button mode="outline" link :to="exhibitorDetailsLink">View Details</base-button>
		</div>
	</li>
</template>

<script>
	export default {
		props: ['id', 'businessName', 'firstName', 'lastName', 'boothNumber', 'media'],
		computed: {
			fullName() {
				return this.firstName + ' ' + this.lastName;
			},
			exhibitorDetailsLink() {
				return this.$route.path + '/' + this.id;
			},
		},
	};
</script>

<style scoped>
	li {
		margin: 1rem 0;
		border: 1px solid #424242;
		border-radius: 12px;
		padding: 1rem;
	}

	h2 {
		font-size: 2rem;
	}

	h3 {
		font-size: 1.5rem;
	}

	h2,
	h3,
	h4 {
		margin: 0.5rem 0;
	}

	div {
		margin: 0.5rem 0;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
	}

	.float-right {
		float: right;
	}
</style>
