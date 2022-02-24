import { createRouter, createWebHistory } from 'vue-router';

import MarketWelcome from './pages/information/MarketWelcome.vue';
import EventInfo from './pages/information/EventInfo.vue';
import MapView from './pages/information/MapView.vue';
import ExhibitorsList from './pages/exhibitors/ExhibitorsList.vue';
import ExhibitorDetail from './pages/exhibitors/ExhibitorDetail.vue';
import ExhibitorIndex from './pages/exhibitors/ExhibitorIndex.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/welcome' },
		{ path: '/welcome', component: MarketWelcome },
		{ path: '/info', component: EventInfo },
		{ path: '/map', component: MapView },
		{ path: '/exhibitors', component: ExhibitorsList },
		{ path: '/exhibitors/:id', component: ExhibitorDetail, props: true },
		{ path: '/exhibitor-index', component: ExhibitorIndex, props: true },
		{ path: '/:notFound(.*)', component: NotFound },
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { left: 0, top: 0 };
		}
	},
});

export default router;
