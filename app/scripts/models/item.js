App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  currentprice: DS.attr('integer'),
  quantity: DS.attr('integer'),
  cart: DS.belongsTo('cart')
})


App.Item.FIXTURES = [
  {
    id: 1,
    product: 1,
    currentprice: 1000,
    quantity: 2,
    cart: 1
  },

  {
    id: 2,
    product: 2,
    currentprice: 2500,
    quantity: 1,
    cart: 1
  }
]
