App.ManageOrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find("order");
  }
});
