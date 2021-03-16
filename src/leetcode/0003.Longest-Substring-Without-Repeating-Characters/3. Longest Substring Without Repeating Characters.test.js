import {
  lengthOfLongestSubstring,
  lengthOfLongestSubstringSet,
} from './3. Longest Substring Without Repeating Characters';

describe('Longest Substring', () => {
  it('Use Map', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
  });
  it('Use Set', () => {
    expect(lengthOfLongestSubstringSet('abcabcbb')).toEqual(3);
  });
});
