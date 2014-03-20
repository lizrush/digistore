App.ProductController = Ember.ObjectController.extend({
  needs: 'cart',

  actions: {
    addToCart: function (product) {
      var cart = this.get('controllers.cart');
      var cartModel = cart.get('model');
      var item = this.store.createRecord('item', {
        quantity: 1,
        currentprice: product.get('price'),
        product_name: product.get('name'),
        product_avatar: product.get('avatar'),
        product_id: product.get('id'),
        cart: cartModel
      });
  
      cartModel.save().then(function(){
        item.save();
      });

    this.transitionToRoute('cart', cartModel);
    }
  }
})
