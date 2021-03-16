import mostCommonWord from './819. Most Common Word';

test('Most Common Word', () => {
  expect(
    mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
      'hit',
    ])
  ).toEqual('ball');
});
