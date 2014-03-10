App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("integer"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  category: DS.attr("string")
})

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Thing 1",
    price: "1000",
    image: "http://upload.wikimedia.org/wikipedia/commons/b/b3/Chrysanthemum_sp.jpg",
    description: "This is the product description for thing 1.",
    category: "a"
  }, {
    id: 2,
    name: "Thing 2",
    price: "2500",
    image: "http://upload.wikimedia.org/wikipedia/commons/archive/f/f4/20070921095637%21Camellia_sasanqua1JAM343.jpg",
    description: "This is the product description for thing 2.",
    category: "b"
  }
]
