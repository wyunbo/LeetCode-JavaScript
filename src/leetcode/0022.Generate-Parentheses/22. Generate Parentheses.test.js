import generateParenthesis from './22. Generate Parentheses';

describe('Generate Parentheses', () => {
  it('n=1', () => {
    expect(generateParenthesis(1)).toEqual(['()']);
  });
  it('n=2', () => {
    expect(generateParenthesis(2)).toEqual(['(())', '()()']);
  });
  it('n=3', () => {
    expect(generateParenthesis(3)).toEqual([
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()',
    ]);
  });
});
