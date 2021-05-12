/**
 * Generate Parentheses
 *
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * For example, given n = 3, a solution set is:
 *
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const backtracking = (left, right, solution) => {
    if (left === n && right === n) {
      results.push(solution);
      return;
    }
    if (left < n) {
      backtracking(left + 1, right, solution + '(');
    }
    if (right < left) {
      backtracking(left, right + 1, solution + ')');
    }
  };
  const results = [];
  backtracking(0, 0, '');
  return results;
};

export default generateParenthesis;
