App.ApplicationRoute = Em.Route.extend({
  actions: {
    openModal: function(modal) {
      this.render(modal, {
        into: 'application',
        outlet: 'modal'
      });
    },

    closeModal: function() {
      return this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
