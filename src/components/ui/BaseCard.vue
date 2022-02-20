<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<style scoped>
	.card {
		border-radius: 12px;
		border: 1px solid black;
		padding: 1.5rem;
		margin: 0rem auto;
		max-width: 40rem;
	}
</style>
