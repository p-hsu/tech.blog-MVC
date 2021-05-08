const { User } = require('../models');

const userData = [
  {
    first_name: 'Bob',
    last_name: 'Belcher',
    user_name: 'burgerDaddy',
    email: 'bburger-dad@email.com',
    password: 123456789
  },
  {
    first_name: 'Archer',
    last_name: 'Sterling',
    user_name: 'topDawg',
    email: 'deadliest-spy@email.com',
    password: 098765432
  },
  {
    first_name: 'Carl',
    last_name: 'Quahog',
    user_name: 'miniMart',
    email: 'carl-mart@email.com',
    password: 096096096
  },
  {
    first_name: 'Jon',
    last_name: 'Benjamin',
    user_name: 'theHammer',
    email: 'harry-jb@email.com',
    password: 135792468
  },
];

const seedUsers= () => User.bulkCreate(userData);

module.exports = seedUsers;