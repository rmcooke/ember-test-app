import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    startLoading() {
      Ember.$.ajax({
        url: '/admin/api/searchNews',
      }).then(function() {
        console.log("searching started");
      });
    }
  }
});
