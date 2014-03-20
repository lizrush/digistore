App.Router.map(function(){
  this.route('home', { path: '/' });

  this.route('cart', {path: 'cart/:cart_id'});

  this.resource('products', function () {
    this.resource('product', { path: ':product_id' });
  });

  this.resource('orders', function(){
    this.resource('order', { path: ':order_id' });
  });

  this.resource("admin", function () {
    this.resource("productEdit", { path: ":product_id"});
    this.resource("productNew", {path: "products/new"} );
  });
});
