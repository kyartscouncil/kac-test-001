<template>
	<section>
		<base-card>
			<base-button @click="goBack" class="back-button" mode="outline">Back</base-button>
			<h4>Booth #: {{ boothNumber }}</h4>
			<h2>{{ businessName }}</h2>
			<h3>{{ fullName }}</h3>
			<div>
				<p>{{ fullLocation }}</p>
				<p>{{ fullPhone }}</p>
				<base-button mode="outline"><a :href="businessUrl" target="_blank">Website</a></base-button>
				<base-button mode="outline"
					><a :href="emailLink" target="_blank">{{ email }}</a></base-button
				>
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
		methods: {
			goBack() {
				return this.$router.go(-1);
			},
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
				return (
					this.selectedExhibitor.phone.slice(0, 3) +
					'-' +
					this.selectedExhibitor.phone.slice(3, 6) +
					'-' +
					this.selectedExhibitor.phone.slice(6)
				);
			},
			email() {
				return this.selectedExhibitor.email;
			},
			emailLink() {
				return 'mailto:' + this.selectedExhibitor.email;
			},
			businessUrl() {
				return 'https://' + this.selectedExhibitor.businessUrl;
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
	section {
		margin: 1rem;
	}

	p {
		margin: 0.25rem 0rem;
	}

	a {
		text-decoration: none;
	}

	.back-button {
		float: right;
	}
</style>
