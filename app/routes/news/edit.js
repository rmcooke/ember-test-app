import Ember from 'ember';

export default Ember.Route.extend({
	publishDate:Date,
	startDate:Date,
	endDateDate:Date,
	model(params) {
		return this.get('store').findRecord('FullRecord', params["news_id"]);
	},
	setupController: function(controller, model) {
		this._super(controller, model);
		controller.set('data', model);
	},
	actions:{
		save:function (model) {
			console.log(model);
		}
	}
});
