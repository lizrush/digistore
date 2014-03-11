App.Product = DS.Model.extend({
  name: DS.attr("string"),
  price: DS.attr("integer"),
  description: DS.attr("string"),
  image: DS.attr("string"),
  avatar: DS.attr("string"),
})

App.Product.FIXTURES = [
  {
    id: 1,
    name: "Thing 1",
    price: "1000",
    image: "http://placekitten.com/759/600",
    avatar: "http://placekitten.com/49/50",
    description: "This is the product description for thing 1.",
  },

  {
    id: 2,
    name: "Thing 2",
    price: "2500",
    image: "http://placekitten.com/800/600",
    avatar: "http://placekitten.com/50/50",
    description: "This is the product description for thing 2.",
  }
]
