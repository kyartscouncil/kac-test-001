<template>
	<header>
		<nav class="topnav">
			<h1>
				<router-link to="/">Kentucky Crafted Market</router-link>
			</h1>
			<i @click="toggleMobileNav" class="bx bx-menu icon" :class="{ 'icon-active': mobileNav }"></i>
			<ul v-show="mobileNav" class="dropdown-nav">
				<li><router-link to="/" @click="toggleMobileNav">Home</router-link></li>
				<li><router-link to="/info" @click="toggleMobileNav">Market Info</router-link></li>
				<li><router-link to="/exhibitors" @click="toggleMobileNav">Exhibitor List</router-link></li>
				<li><router-link to="/map" @click="toggleMobileNav">Map</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'navigation',
		data() {
			return {
				scrollPosition: null,
				mobile: true,
				mobileNav: false,
				windowWidth: null,
			};
		},
		methods: {
			toggleMobileNav() {
				this.mobileNav = !this.mobileNav;
			},
			close(e) {
				if (!this.$el.contains(e.target)) {
					this.mobileNav = false;
				}
			},
		},
		mounted() {
			document.addEventListener('click', this.close);
		},
		beforeDestroy() {
			document.removeEventListener('click', this.close);
		},
	};
</script>

<style scoped>
	h1 {
		font-size: 16px;
	}

	header {
		width: 100%;
		background: var(--header-bg);
		position: sticky;
		top: 0;
	}

	nav {
		width: 90%;
		padding: 12px 0;
		margin: 0 auto;
	}

	a {
		color: black;
		text-decoration: none;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		text-transform: uppercase;
		padding: 10px 0;
		border-bottom: 1px solid black;
	}

	.icon {
		position: absolute;
		top: 20px;
		right: 20px;
	}

	i {
		cursor: pointer;
		font-size: 24px;
		transition: 0.8s ease all;
	}

	.icon-active {
		transform: rotate(180deg);
	}

	.dropdown-nav {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
	}
</style>
