App.ItemController = Ember.ObjectController.extend({
  // You'd probably want to debounce this so you aren't
  // constantly writing to the store... (in your example)
  // Ember.run.debounce(this, func, 500);
  //
  actions: {
    applyChanges: function(item) {
      this.get('model').save(function(item){
        item.save();
      });
    }
  }


    // e.g this.get('model').save(function(item) { ... })");
  //   alert("persist changes to item: "+ this.get("model.id"));
  // }.observes("quantity")
});
