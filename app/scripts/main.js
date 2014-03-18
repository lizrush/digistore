var App = Ember.Application.create({});

App.Store = DS.Store.extend({
  adapter: DS.RESTAdapter.extend({
    host: "http://localhost:3000"
  })
});

App.Store2 = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});
