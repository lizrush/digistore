App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('product', params.product_id)
  },

  actions: {
    addToCart: function (product) {
      var cart = this.modelFor('application');

      var item = this.store.createRecord('item', {
        quantity: 1,
        currentprice: product.get('price'),
        product: product,
        cart: cart
      });
      // cart.get('items').then(function(items) {
      //   items.pushObject(item);
      // });
      cart.save();
      item.save();

    this.transitionTo('cart');
    }
  }

});
