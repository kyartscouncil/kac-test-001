export default {
	exhibitors(state) {
		return state.exhibitors;
	},
	hasExhibitors(state) {
		return state.exhibitors && state.exhibitors.length > 0;
	},
};
