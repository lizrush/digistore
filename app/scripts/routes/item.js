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
      debugger
      var item = this.store.find('item', id).then(function(item){
        item.set('quantity', quantity)
        item.save()
      })
    }
  }
});
