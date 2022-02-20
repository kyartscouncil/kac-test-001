<template>
	<li>
		<base-card>
			<div class="actions">
				<base-button mode="outline" link :to="exhibitorDetailsLink">View Details</base-button>
			</div>
			<p>Booth #: {{ boothNumber }}</p>
			<h2>{{ businessName }}</h2>
			<h3>{{ fullName }}</h3>
			<div>
				<base-badge v-for="medium in media" :key="medium" :type="medium" :title="medium"></base-badge>
			</div>
		</base-card>
	</li>
</template>

<script>
	export default {
		props: [
			'id',
			'boothNumber',
			'media',
			'businessName',
			'firstName',
			'lastName',
			'city',
			'state',
			'phone',
			'email',
			'businessUrl',
		],
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

	.actions {
		float: right;
	}

	.float-right {
		float: right;
	}
</style>
