App.CartController = Ember.ObjectController.extend({
  actions: {
    checkout: function(){
      this.set('checkout', true)
    },

    submitorder: function(){

    }
  }
})
