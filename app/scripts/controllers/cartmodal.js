App.CartModalController = Em.ObjectController.extend({
  edit: function(record) {
    record.on('didUpdate', this, function() {
      this.send('closeModal');
    });

    this.set('model', record);
  },

  save: function() {
    this.get('model.transaction').commit();
  }
});
