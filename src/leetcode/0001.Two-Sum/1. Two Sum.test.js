import twoSum from './1. Two Sum';

test('Two Sum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  expect(twoSum([0, 8, 3, 4, 2], 11)).toStrictEqual([1, 2]);
});
