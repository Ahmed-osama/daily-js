const axios = require('axios');

const utils = {
  add: (a, b) => a + b,
  isNull: () => null,
  checkValue: x => x,
  creatUser: () => {
    const user = { firstName: 'Ahmed' };
    user.lastName = 'Osama';
    return user;
  },
  fetchuser: () => axios.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data).catch(err => 'error'),
  checkPalindrome: (inputString) => {
    if (inputString.length === 1) return true;
    numtype = inputString.length % 2;
    length = numtype == 0 ? inputString.length / 2 : (inputString.length - 1) / 2;
    addMe = numtype == 0 ? 0 : 1;
    half_1 = inputString.split('').slice(0, length);
    half_2 = inputString.split('').slice(length + addMe).reverse();

    return half_1.join() == half_2.join();
  },
};

module.exports = utils;
