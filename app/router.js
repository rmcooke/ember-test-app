import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news', function() {
    this.route('edit', {path:"/:news_id"});
  });
});

export default Router;
