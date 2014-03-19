App.CartAdapter = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});

App.Cart = DS.Model.extend({

// fix this
  total: function(){
    var sum = 0
   return this.store.find('item').then(function(items){

    var prices = items.map(function(item){
      return item.get('subtotal')
    });

    var sum = prices.reduce(function(previousValue, currentValue){
      return previousValue + currentValue
    }, 0);
    return sum
    });
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



