App.ItemAdapter = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});

App.Item = DS.Model.extend({
  product: DS.belongsTo('product'),
  currentprice: DS.attr('number'),
  quantity: DS.attr('number'),
  subtotal: function(){
    return this.get('quantity') * this.get('currentprice')
  }.property('quantity', 'currentprice')
})
