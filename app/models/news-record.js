import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  publishDate: DS.attr('date'),
  published: DS.attr('boolean'),
  onCalendar: DS.attr('boolean'),
  speakers: DS.attr('boolean'),
  geo: DS.attr('boolean'),
  heroes: DS.attr('boolean'),
  hasYoutube: DS.attr('boolean'),
  hasText: DS.attr('boolean'),
  hasAudio: DS.attr('boolean'),
  hasYandex: DS.attr('boolean')
});
