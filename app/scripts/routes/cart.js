App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", params.cart_id);
  },

});
