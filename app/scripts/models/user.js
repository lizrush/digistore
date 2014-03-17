App.User = DS.Model.extend({
  customer_name: DS.attr('string'),
  email: DS.attr('string'),
  zipcode: DS.attr('string'),
  expdate: DS.attr('date'),
  ccv: DS.attr('string'),
  ccnumber: DS.attr('string'),
  admin: DS.attr('boolean')
});

App.Order.FIXTURES = [
  {
    id: 1,
    customer_name: "Liz Rush",
    email: 'liz.m.rush@gmail.com',
    zipcode: '98112',
    expdate: '',
    ccv: '123',
    ccnumber: '1234567890123456',
    admin: true
  },

  {
    id: 2,
    customer_name: "non-admin user",
    email: 'liz.m.rush+admin@gmail.com',
    zipcode: '98112',
    expdate: '',
    ccv: '123',
    ccnumber: '1234567890123456',
    admin: true
  }
]
