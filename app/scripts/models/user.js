App.User = DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  zipcode: DS.attr('string'),
  expdate: DS.attr('date'),
  ccv: DS.attr('string'),
  ccnumber: DS.attr('string'),
  admin: DS.attr('boolean')
});

// App.User.FIXTURES = [
//   {
//     id: 1,
//     username: "Liz Rush",
//     email: 'liz.m.rush@gmail.com',
//     zipcode: '98112',
//     expdate: '',
//     ccv: '123',
//     ccnumber: '1234567890123456',
//     admin: true
//   },

//   {
//     id: 2,
//     username: "non-admin user",
//     email: 'liz.m.rush+admin@gmail.com',
//     zipcode: '98112',
//     expdate: '',
//     ccv: '123',
//     ccnumber: '1234567890123456',
//     admin: true
//   }
// ]
