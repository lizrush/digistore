var App = Ember.Application.create({});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
    host: "http://digistore-api.herokuapp.com"
  })
});

