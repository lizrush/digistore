App.CartController = Ember.ObjectController.extend({
  proxy: {},

  actions: {
    checkout: function(){
      this.set('checkout', true)
    }
  }
})
