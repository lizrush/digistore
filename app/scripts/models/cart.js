App.Cart = DS.Model.extend({
  items: DS.hasMany('item'),
  order: DS.belongsTo('order')
})


App.Cart.FIXTURES = [
  {
    id: 1,
    items: [1, 2],
    order: 1
  },
]
