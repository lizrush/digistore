App.ItemsController = Ember.ArrayController.extend({
   cartTotal: function() {
    return this.get('content').reduce(function(total, item) {
      return total + item.get('total');
    }, 0);
  }.property("content.@each.total"),

  proxy: {},

  actions: {
    checkout: function(){
      this.set('checkout', true)
    },

      // this does not work, get help
    acceptChanges: function(quantity){
      var self = this;
      console.log(quantity)
      var item = this.store.find('item', item).then(function(item){
        debugger
        item.set('quantity', quantity)
        item.save().then(
          function(order){
            self.transitionTo('items')
          },
          function(error){
            console.log('it didnt work');
            alert(error.responseText)
          }
        );
      })
    }
  }
})
