App.AdminRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('product')
  },

  actions: {
    productDelete: function(product){
      debugger
      product.deleteRecord();
      product.save();
    }
  }
});
