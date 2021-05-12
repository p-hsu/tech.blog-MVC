const { User } = require('../models');

const userData = [
  {
    first_name: 'Bob',
    last_name: 'Belcher',
    user_name: 'burgerDaddy',
    email: 'bburger-dad@email.com',
    password: 'burg3rsrul3'
  },
  {
    first_name: 'Archer',
    last_name: 'Sterling',
    user_name: 'topDawg',
    email: 'deadliest-spy@email.com',
    password: 'd@ngerZ0ne'
  },
  {
    first_name: 'Carl',
    last_name: 'Quahog',
    user_name: 'miniMart',
    email: 'carl-mart@email.com',
    password: 'id0ntkn0w'
  },
  {
    first_name: 'Jon',
    last_name: 'Benjamin',
    user_name: 'theHammer',
    email: 'harry-jb@email.com',
    password: 'v0ice@ct0r'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;