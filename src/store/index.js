import { createStore } from 'vuex';

import exhibitorsModule from './modules/exhibitors/index.js';

const store = createStore({
	modules: {
		exhibitors: exhibitorsModule,
	},
});

export default store;
