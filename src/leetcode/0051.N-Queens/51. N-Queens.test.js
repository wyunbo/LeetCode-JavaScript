import solveNQueens from './51. N-Queens';

test('N Queens', () => {
  expect(solveNQueens(4)).toEqual([
    [
      '.Q..', // Solution 1
      '...Q',
      'Q...',
      '..Q.',
    ],

    [
      '..Q.', // Solution 2
      'Q...',
      '...Q',
      '.Q..',
    ],
  ]);
});
