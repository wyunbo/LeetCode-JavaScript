import findAnagrams from './438. Find All Anagrams in a String';

test('Find All Anagrams', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toEqual([0, 6]);
  expect(findAnagrams('abab', 'ab')).toEqual([0, 1, 2]);
});
