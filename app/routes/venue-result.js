import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function(params) {
    var CLIENT_ID = config.myCLIENT_ID;
    var CLIENT_SECRET = config.myCLIENT_SECRET;
    var url = 'https://api.foursquare.com/v2/venues/search?near='+params.location+'&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET+'&v=20171004';

      return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
});
