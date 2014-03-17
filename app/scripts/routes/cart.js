App.CartRoute = Ember.Route.extend({

  model: function (params) {
    return this.store.find("cart", localStorage.cartId);
  },


  actions: {
    deleteItem: function(item){
      this.store.find('cart', 1).then(function(cart){
        cart.get('items').then(function(items){
          items.removeObject(item);
        });
        item.destroyRecord();
      });
    },

    submitorder: function(proxy){
      var order = this.store.createRecord('order', proxy);
      var self = this;
      order.save().then(
        function (order) {
          alert('itworked')
          self.transitionTo('order', order.id);
        },
        function (error) {
          order.deleteRecord();
          alert(error)
        }
      )
    }
  }

});
