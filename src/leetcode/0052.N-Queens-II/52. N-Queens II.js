/**
 *
 * @param {number} n
 * @return {number}
 */
const totalNQueens = (n) => {
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
  const backtracking = (n, row, columns) => {
    if (row === n) {
      count++;
      return;
    }
    for (let i = 0; i < n; i++) {
      columns[row] = i;
      if (isValid(row, columns)) {
        backtracking(n, row + 1, columns);
      }
    }
  };
  let count = 0;
  backtracking(n, 0, []);
  return count;
};

export default totalNQueens;
