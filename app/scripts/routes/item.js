App.OutOfFocusInput = Ember.View.extend({
  tagName: 'input',
  attributeBindings: ['value', 'data-id'],
  change: function(event) {
    var id = $(event.currentTarget).data('id')
    debugger
    this.store.find(item, id)
  }
});

App.ItemRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('item')
  },

  actions: {
    deleteItem: function(item){
        item.destroyRecord();
      },

      // this does not work, get help
    acceptChanges: function(quantity){
      console.log(quantity)
      debugger
      var item = this.store.find('item')
      item.set('quantity', quantity)
      item.save()
    },

    submitorder: function(proxy){
       var self = this;
       // create all items in api
       var items = self.store.find('item').then(function(items){
          items.forEach(function(item){
            debugger
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
            debugger
            console.log('it didnt work');
            alert(error.responseText)
          }
        );
      });
    }
  }
});
