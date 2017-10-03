import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    venueLookup(params) {
      this.transitionTo('venue-result', params.location);
    }
  }

});
