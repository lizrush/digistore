App.CartRoute = Ember.Route.extend({

  model: function (params) {
    return this.modelFor('application');
  },

  actions: {
    deleteItem: function(item){
        item.destroyRecord();
      },

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
