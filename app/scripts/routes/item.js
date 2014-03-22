App.ItemRoute = Ember.Route.extend({
  model: function (item) {
    debugger
    return this.store.find('item', item)
  },

  actions: {
    deleteItem: function(item){
        item.destroyRecord();
      },

      // this does not work, get help
    acceptChanges: function(quantity){
      console.log(quantity)
      var id = $(event.currentTarget).data('id')
      debugger
      var item = this.store.find('item', id).then(function(item){
        item.set('quantity', quantity)
        item.save()
      })

    },

    submitorder: function(proxy){
       var self = this;
       // create all items in api
       var items = self.store.find('item').then(function(items){
          items.forEach(function(item){
           self.store.createRecord('orderItem', item.toJSON()).save();
         })
       });

       var order = this.store.createRecord('order', proxy);

      self.store.find('item').then(function(items){
        order.set('status', 'pending');
        order.set('total', '10000');
        order.save().then(
          function(order){
            self.transitionTo("order", order)
          },
          function(error){
            console.log('it didnt work');
            alert(error.responseText)
          }
        );
      });
    }
  }
});
