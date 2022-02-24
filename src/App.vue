<template>
	<section>
		<the-header @closeMenu="toggleMobileNav"></the-header>
		<router-view></router-view>
	</section>
</template>

<script>
	import TheHeader from './components/layout/TheHeader.vue';

	export default {
		components: {
			TheHeader,
		},
	};
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
	@import url('style/style.css');
	@import url('https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css');
	* {
		box-sizing: border-box;
	}
	html {
		font-family: 'Roboto', sans-serif;
	}
	body {
		margin: 0;
	}
</style>
