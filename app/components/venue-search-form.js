import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    venueLookup() {
      var params = {location: this.get('location')};
      this.sendAction('venueLookup', params);
    }
  }
});
