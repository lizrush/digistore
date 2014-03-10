App.Cart = DS.Model.extend({
  items: DS.hasMany('item'),
  order: DS.belongsTo('order')
})
