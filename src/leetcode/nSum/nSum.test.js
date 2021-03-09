import { nSum, nSum2 } from './nSum';

describe('n Sum', () => {
  it('Solution 1', () => {
    expect(nSum([1, 2, 3, 4, 5], 4, 12)).toEqual([1, 2, 4, 5]);
  });
  it('Solution 2', () => {
    expect(nSum2([1, 2, 3, 4, 5], 4, 12)).toEqual([1, 2, 4, 5]);
  });
});
