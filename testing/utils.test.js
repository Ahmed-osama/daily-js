

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

// toBe is for permitive types

test('user should be ahmed osama', () => {
  expect(utils.creatUser()).toEqual({
    firstName: 'Ahmed',
    lastName: 'Osama',
  });
});

test('should be under 1600', () => {
  const load1 = 600;
  const load2 = 700;
  expect(load1 + load2).toBeLessThanOrEqual(1500);
});
test('should be under 1600', () => {
  const load1 = 600;
  const load2 = 700;
  expect(load1 + load2).toBeGreaterThan(1000);
});
test('there is no I in team', () => {
  expect('team').not.toMatch(/i/);
});
teamtest('there is no I in team', () => {
  expect('team').toMatch(/team/);
});
