App.ItemController = Ember.ArrayController.extend({
  proxy: {},

  actions: {
    checkout: function(){
      this.set('checkout', true)
    }
  }
})

