App.ModalView = Em.View.extend({
  layout: Em.Handlebars.compile("{{yield}}<div class=modal-backdrop></div>"),

  didInsertElement: function() {
    App.animateModalOpen();

    $('body').on('keyup.modal', function(event) {
      if (event.keyCode === 27) this.get('controller').send('closeModal');
    }.bind(this));

  },

  willDestroyElement: function() {
    $('body').off('keyup.modal');
  }
});


// figureout promise shit
App.animateModalClose = function() {
  var promise = new Ember.RSVP.Promise();

  $('.modal.in').removeClass('in');
  $('.modal-backdrop.in').removeClass('in');

  setTimeout(function() {
    promise.resolve();
  }, 500);

  return promise;
};

App.animateModalOpen = function() {
  $('.modal').addClass('in');
  $('.modal-backdrop').addClass('in');

  setTimeout(function() {
    promise.resolve();
  }, 500);

  return promise;
};


App.CartModalView = App.ModalView.extend({});
