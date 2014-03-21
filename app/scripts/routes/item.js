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

    acceptChanges: function(quantity){
      console.log(quantity)
      debugger
      var item = this.store.find('item')
      item.set('quantity', quantity)
      item.save()
    },

    submitorder: function(proxy){
      var order = this.store.createRecord('order', proxy);
      var self = this;
      order.save().then(function (order){
          alert('itworked')
          self.transitionTo('order', order.id);
        },
        function (error){
          order.deleteRecord();
          alert(error)
        }
      );
    }
  }
});
