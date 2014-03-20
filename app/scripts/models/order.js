App.Order = DS.Model.extend({
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  status: DS.attr('string'),
  zipcode: DS.attr('string'),
  expdate: DS.attr('date'),
  ccv: DS.attr('string'),
  ccnumber: DS.attr('string')
});
