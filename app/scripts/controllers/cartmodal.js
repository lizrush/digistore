App.CartModalController = Ember.ObjectController.extend({
  show: function(record) {
    record.on('didUpdate', this, function() {
      this.send('closeModal');
    });

    this.set('model', record);
  },

});
