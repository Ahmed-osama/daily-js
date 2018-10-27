const faker = require('faker');

faker.setLocale = 'de';
const users = require('./users');

module.exports = () => {
  const data = {
    users: users(faker, 100),
  };

  return data;
};
