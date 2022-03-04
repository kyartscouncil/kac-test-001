<template>
	<span class="badge" :class="type">
		{{ text }}
	</span>
</template>

<script>
	export default {
		props: ['type', 'title'],
		computed: {
			text() {
				return this.title.toLowerCase();
			},
		},
	};
</script>

<style scoped>
	.badge {
		background-color: rgba(155, 225, 155, .95);
		color: #252525;
		border-radius: 30px;
		padding: 0.35rem 1rem 0.45rem 1rem;
		display: inline-block;
		margin: .5rem 0.5rem .5rem 0rem;
		margin-right: 0.5rem;
	}
</style>
