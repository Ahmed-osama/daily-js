

const utils = require('./utils');

test('ads 2 + 2 to equal 4', () => {
  expect(utils.add(2, 2)).toBe(4);
});
test('ads 2 + 2 to not equal 4', () => {
  expect(utils.add(2, 2)).not.toBe(5);
});

test('SHould be null ', () => {
  expect(utils.isNull()).toBeNull();
});

test('SHould be null ', () => {
  expect(utils.isNull()).toBeFalsy();
});

test('SHould be the same ', () => {
  expect(utils.checkValue('')).toBeFalsy();
});

test('SHould be the same ', () => {
  expect(utils.checkValue(' ')).toBeTruthy();
});
