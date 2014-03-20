App.ItemSerializer = DS.LSSerializer.extend();
App.ItemAdapter = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});

App.Item = DS.Model.extend({
  product_id: DS.attr('string'),
  product_name: DS.attr('string'),
  product_avatar: DS.attr('string'),
  currentprice: DS.attr('number'),
  quantity: DS.attr('number'),

  cart: DS.belongsTo('cart'),

  subtotal: function(){
    return this.get('quantity') * this.get('currentprice')
  }.property('quantity', 'currentprice')
})


// {"cart":{"records":{"l5s84":{"id":"l5s84","items":["npga8","u6g2m"]}}},"item":{"records":{"npga8":{"id":"npga8","product_id":"3","product_name":"Thing 3","product_avatar":"http:placekitten.com/51/50","currentprice":200,"quantity":1,"cart":"l5s84"},"u6g2m":{"id":"u6g2m","product_id":"2","product_name":"Thing 2","product_avatar":"http:placekitten.com/50/50","currentprice":2500,"quantity":1,"cart":"l5s84"}}}}
