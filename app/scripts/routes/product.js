App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find("product", params.product_id);
  },

  actions: {
    addToCart: function(product){
      var store = this.store;

      var item = store.createRecord('item', {
          product: product,
          quantity: 1,
          currentprice: this.currentprice
        });

      store.find('cart', 1).then(function(cart) {
        item.set('cart', cart);
        debugger
        this.items.pushObjects(item)
      });

      this.transitionTo('cart');
    }
  }
});
