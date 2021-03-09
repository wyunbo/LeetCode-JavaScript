import isValid from './20. Valid Parentheses';

describe('Valid parentheses', () => {
  const testCases = [
    ['()[]{}', true],
    ['([)]', false],
  ];
  testCases.forEach((testCase, index) => {
    it(`Test case ${index}`, () => {
      expect(isValid(testCase[0])).toEqual(testCase[1]);
    });
  });
});
