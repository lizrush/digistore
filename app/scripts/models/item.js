App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  currentprice: DS.attr('integer'),
  quantity: DS.attr('string'),
  cart: DS.belongsTo('cart')
})
