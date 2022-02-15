import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	state() {
		return {
			exhibitors: [
				{
					id: 'e1',
					businessName: 'Art by Max',
					firstName: 'Maximilian',
					lastName: 'Schwarzmüller',
					medium: ['Sculpture', 'Wood'],
					city: 'Lexington',
					state: 'KY',
					phone: '859-555-1111',
					email: 'ms@aol.com',
					businessUrl: 'www.ms.net',
					description:
						"I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
					boothNumber: 101,
				},
				{
					id: 'e2',
					businessName: 'Renaissance Portraits',
					firstName: 'Julie',
					lastName: 'Jones',
					medium: ['Drawing', 'Painting'],
					city: 'Owensboro',
					state: 'KY',
					phone: '859-555-2222',
					email: 'jj@aol.com',
					businessUrl: 'www.jj.net',
					description:
						'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
					boothNumber: 102,
				},
			],
		};
	},
	mutations,
	actions,
	getters,
};
