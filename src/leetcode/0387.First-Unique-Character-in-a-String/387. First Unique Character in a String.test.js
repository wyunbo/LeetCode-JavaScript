import firstUniqChar from './387. First Unique Character in a String';

describe('First Unique Character in a String', () => {
  const testCases = [
    ['leetcode', 0],
    ['loveleetcode', 2],
    ['aaa', -1],
  ];

  testCases.forEach(([s, expected], index) => {
    it(`should find the first unique character in the string, ${index}`, () => {
      const actual = firstUniqChar(s);
      expect(actual).toEqual(expected);
    });
  });
});
