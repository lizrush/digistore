App.CartAdapter = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});

App.Cart = DS.Model.extend({

  items: DS.hasMany('item'),
  total: function(){
    var items = this.get('items');
    var prices = items.map(function(item){
      return item.get('subtotal')
    });
    var sum = prices.reduce(function(previousValue, currentValue){
      return previousValue + currentValue
    }, 0);
    return sum
  }.property('items.@each.subtotal')
});


// App.CartAdapter = DS.FixtureAdapter.extend();

// App.Cart.FIXTURES = [
//   {
//     id: "fixture-0",
//     items: [1, 2],
//     order: 1
//   },
// ]



