App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  currentprice: DS.attr('number'),
  quantity: DS.attr('number'),
  cart: DS.belongsTo('cart'),
  subtotal: function(){
    return this.get('quantity') * this.get('currentprice')
  }.property('quantity', 'currentprice')
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
