import { flat, flat2, flat3, flat4, flat6, flat7, flat8 } from './index';

const testCase = [
  1,
  2,
  3,
  4,
  [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
  5,
  //   'string',
  //   { name: '弹铁蛋同学' },
];
const result = [
  1,
  2,
  3,
  4,
  1,
  2,
  3,
  1,
  2,
  3,
  1,
  2,
  3,
  5,
  //   'string',
  //   { name: '弹铁蛋同学' },
];
test('Flat nested array', () => {
  expect(flat(testCase)).toEqual(result);
  expect(flat2(testCase)).toEqual(result);
  expect(flat3(testCase)).toEqual(result);
  expect(flat4(testCase, Infinity)).toEqual(result);
  expect(flat6(testCase, Infinity)).toEqual(result);
  expect(flat7(testCase)).toEqual(result);
  expect(flat8(testCase)).toEqual(result);
});
