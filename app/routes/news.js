import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		page: {
			refreshModel: true
		}
	},
	model(params) {
		console.log(params);
		return this.get('store').query('NewsRecord', params);
	}
});
