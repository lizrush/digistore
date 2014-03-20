App.ProductRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('product', params.product_id)
  },

  actions: {
    addToCart: function (product) {
      this.store.get('item').then(function(item){
        return item.find(function(item){
          return item.get('item').get('id') === item.get('id')
        })
      }).then(function(item){
        if (item){
          item.incrementProperty('quantity');
          item.save();
        } else {
           var item = this.store.createRecord('item', {
                quantity: 1,
                currentprice: product.get('price'),
                product_name: product.get('name'),
                product_avatar: product.get('avatar'),
                product_id: product.get('id')
                });
            item.save();
        }
      })

    this.transitionTo('cart');
    }
  }

});
