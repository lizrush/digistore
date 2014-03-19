App.CartAdapter = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});

App.Cart = DS.Model.extend({

// fix this
//   total: function(){
//     debugger
//     var items = this.store.find('item').then(function(items){
//       var price = items.map(function(item){
//           return item.get('subtotal')
//         }
//         });
//       var sum = prices.reduce(function(previousValue, currentValue){
//         return previousValue + currentValue
//       }, 0);
//       return sum
//     }.property('items.@each.subtotal')
});

