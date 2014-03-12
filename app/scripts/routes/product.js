App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('product', params.product_id)
  },

  actions: {
    addToCart: function (product) {
      var store = this.store
      store.find('cart', 1).then(function(cart) {
        var item = store.createRecord('item', {
          quantity: 1,
          price: product.get('currentprice'),
          product: product,
          cart: cart
        });
        cart.get('items').then(function(items) {
          items.pushObject(item);
        })
        item.save();
      });
      this.transitionTo('cart')
    }
  },

  // setupController: function(controller, model) {
  //   this.controllerFor('cart').set('model', this.store.find('cart', 1));
  //   controller.set('model', model);
  // }
});
