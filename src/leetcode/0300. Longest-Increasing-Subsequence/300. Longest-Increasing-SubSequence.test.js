import lengthOfLIS from './300. Longest-Increasing-SubSequence';

test('Longest increasing subsequence', () => {
  const received = [10, 9, 2, 5, 3, 7, 101, 18];
  const expected = 4;
  expect(lengthOfLIS(received)).toEqual(expected);
});
