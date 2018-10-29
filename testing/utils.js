const utils = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: x => x,
  creatUser: () => {
    const user = { firstName: 'Ahmed' };
    user.lastName = 'Osama';
    return user;
  },
};

module.exports = utils;
