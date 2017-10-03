import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('venue-result', function () {
    this.route('venue', { path: 'venue/:venue'})
  });
});

export default Router;
