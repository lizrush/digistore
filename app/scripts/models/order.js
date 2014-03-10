App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart'),
  customername: DS.attr('string'),
  email: DS.attr('string'),
  transaction: DS.attr('string'),
  // transaction will be separate model later and has many
  status: DS.attr('string')
})
