import Ember from 'ember';
const names = ['Клим Жуков', 'Егор Яковлев', 'Юлин'];
const heroes = ['Владимир', 'Иван III', 'Ленин'];
export default Ember.Controller.extend({
	allSpeakers: names,
	allHeroes: heroes,
//	speakers:['Клим Жуков', 'Егор Яковлев'],
//	data: Ember.computed.alias('model'),
	actions: {
		speakerChanged(value){
			this.set("data.speakers", value);
		},
		heroesChanged(value){
			this.set("data.heroes", value);
		},
		subjectsChanged(value){
			this.set("data.geoSubjects", value);
		},
		updateFinishDate(value) {
			this.set("data.finishDate", value);
		},
		updateStartDate(value) {
			console.log(value);
			this.set("data.startDate", value);
		},
		save(model){
			model.save();
			this.transitionToRoute('news');
		}
	}
});
