App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart'),
  customername: DS.attr('string'),
  email: DS.attr('string'),
  transaction: DS.attr('string'),
  status: DS.arrt('string')
})
