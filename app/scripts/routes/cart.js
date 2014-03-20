App.CartRoute = Ember.Route.extend({

  model: function (params) {
    return this.store.find('cart', localStorage.cartId);
    // return this.modelFor('application');
  },

  actions: {
    submitorder: function(proxy){
      var order = this.store.createRecord('order', proxy);
      var self = this;
      order.save().then(
        function (order){
          alert('itworked')
          self.transitionTo('order', order.id);
        },
        function (error){
          order.deleteRecord();
          alert(error)
        }
      )
    }
  }

});
