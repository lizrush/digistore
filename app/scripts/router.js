App.Router.map(function(){
  this.route("home", { path: "/" });
  this.resource('cart', { path: ':cart_id'});
  this.resource("products", function () {
    this.resource("product", { path: ":product_id" })
  });
});
