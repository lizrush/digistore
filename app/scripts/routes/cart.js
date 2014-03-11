App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", params.cart_id);
  },

  events: {
    edit: function(widget) {
      this.controllerFor('cart.modal').edit(cart);
      this.send('openModal', 'cart.modal');
    }
  }

});

