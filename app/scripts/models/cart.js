App.CartAdapter = DS.LSAdapter.extend({
  namespace: 'kittyimages'
});

App.Cart = DS.Model.extend({

// fix this
//   total: function(){
//     var items = this.store.find('item').then(function(items){
//       debugger
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


//     var sum = 0
//     return this.store.find('item').then(function(items){
//       var prices = items.map(function(item){
//         return item.get('subtotal')
//       });

//     sum = prices.reduce(function(previousValue, currentValue){
//       return previousValue + currentValue
//     }, 0);
//     return sum
//     });
//    return sum
//   }.property('items.@each.subtotal')
// });
