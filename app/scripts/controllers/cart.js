App.CartController = Ember.ObjectController.extend({
  actions: {
    checkout: function(){
      this.set('checkout', true)
    },

    submitorder: function(){
      var order = this.store.createRecord('order', fromproxystuff);
      var self = this;
      order.save().then(
        function (order) {
          self.transitionTo(order, order.get('id'));
        },
        function (error) {
          order.deleteRecord();
          alert(error)
        }
      )
    }
  }
})

