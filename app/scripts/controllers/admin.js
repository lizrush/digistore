App.AdminController = Ember.ObjectController.extend({
  actions: {
    manageOrders: function(){
      this.set('manageOrders', true);
    }
  }
});
