App.CartRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("cart", 1);
  },

  actions: {
    show: function(cart) {
      this.controllerFor('cart.modal').show(cart);
      this.send('openModal', 'cart.modal');
    }
  }

});

