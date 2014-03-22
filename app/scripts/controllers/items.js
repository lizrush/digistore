App.ItemsController = Ember.ArrayController.extend({
  proxy: {},

  actions: {
    checkout: function(){
      this.set('checkout', true)
    }
  }
})

