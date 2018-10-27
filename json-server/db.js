const faker = require('faker');

module.exports = () => {
  const data = {
    users: [],
  };
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
    });
  }
  return data;
};
