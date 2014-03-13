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
          currentprice: product.get('price'),
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
  }

});
