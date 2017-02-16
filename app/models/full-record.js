import DS from "ember-data";

export default DS.Model.extend({
	title: DS.attr('string'),
	publishDate: DS.attr('date'),
	published: DS.attr('boolean'),
	startDate: DS.attr('date'),
	finishDate: DS.attr('date'),
	originUrl: DS.attr('string'),
	speakers: DS.attr(),
	heroes: DS.attr(),
	geoSubjects: DS.attr(),
	youtubeLink: DS.attr('string'),
	textLink: DS.attr('string'),
	audioLink: DS.attr('string'),
	yandexLink: DS.attr('string')
});
