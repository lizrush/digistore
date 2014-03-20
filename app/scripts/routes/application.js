App.ApplicationRoute = Em.Route.extend({

  beforeModel: function() {
    if (typeof(localStorage.cartId) === "undefined") {
      var cart = this.store.createRecord('cart');

      cart.save();

      this.controllerFor('cart').set('model', cart);
      localStorage.cartId = cart.get('id');
    }
  }
});
