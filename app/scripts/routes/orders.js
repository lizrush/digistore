App.OrdersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('order');
  },

  actions: {
    update: function(order){
      if(order.get('status') == "pending"){
        order.set('status', 'paid');
        order.save()
      } else if (order.get('status') == 'canceled'){
        alert('canceled')
      } else {
        alert('paid')
      }
    }
  }
})
