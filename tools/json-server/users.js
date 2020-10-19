

module.exports = function users(faker, count) {
  const usersList = [];
  for (let i = 0; i < count; i++) {
    usersList.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      jobTitle: faker.name.jobTitle(),
      image: faker.image.avatar(),
    });
  }
  return usersList;
};
