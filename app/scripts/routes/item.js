App.ItemRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('item')
  },

  actions: {
    deleteItem: function(item){
        item.destroyRecord();
      }
    }
})
