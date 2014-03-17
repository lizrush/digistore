App.ApplicationRoute = Em.Route.extend({
  beforeModel: function() {
    if (typeof(localStorage.cartId) == "undefined") {
      var cart = this.store.createRecord('cart')
      localStorage.cartId = cart.get('id')
    }
  }
});
