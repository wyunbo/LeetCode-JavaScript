/**
 *
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = (n) => {
  const results = [];
  backtracking(n, 0, [], results);
  return results;
};
const formatResult = (columns) => {
  const n = columns.length;
  const result = [];
  for (let i = 0; i < n; i++) {
    const arr = Array(n).fill('.');
    arr[columns[i]] = 'Q';
    result.push(arr.join(''));
  }
  return result;
};
const isValid = (row, columns) => {
  for (let i = 0; i < row; i++) {
    if (columns[row] === columns[i]) {
      return false; // Two queens are in the same column;
    }
    if (row - i === Math.abs(columns[row] - columns[i])) {
      return false; // Two queens are in the same diagonal
    }
  }
  return true;
};
const backtracking = (n, row, columns, results) => {
  if (row === n) {
    results.push(formatResult(columns));
    return;
  }
  for (let i = 0; i < n; i++) {
    columns[row] = i;
    if (isValid(row, columns)) {
      backtracking(n, row + 1, columns, results);
    }
  }
};

export default solveNQueens;
