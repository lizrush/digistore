App.Order = DS.Model.extend({
  cart: DS.belongsTo('cart', {async: true }),
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
  zipcode: DS.attr('string'),
  expdate: DS.attr('date'),
  ccv: DS.attr('string'),
  ccnumber: DS.attr('string')
});
