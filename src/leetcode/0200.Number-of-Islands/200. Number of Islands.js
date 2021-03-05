const numIslands = (grid) => {
  if (!grid || grid.length === 0) {
    return 0;
  }
  const m = grid.length;
  const n = grid[0].length;
  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        dfs(grid, m, n, i, j);
        res++;
      }
    }
  }
  return res;
};
const dfs = (grid, m, n, x, y) => {
  if (!isSafe(grid, m, n, x, y)) {
    return;
  }
  grid[x][y] = '0';
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  for (let i = 0; i < 4; i++) {
    dfs(grid, m, n, x + dx[i], y + dy[i]);
  }
};
const bfs = (grid, m, n, x, y) => {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const queue = [[x, y]];
  grid[x][y] = '0';
  while (queue.length > 0) {
    const p = queue.shift();
    for (let i = 0; i < 4; i++) {
      const px = p[0] + dx[i];
      const py = p[1] + dy[i];
      if (isSafe(grid, m, n, px, py)) {
        queue.push([px, py]);
        grid[px][py] = '0';
      }
    }
  }
};
const isSafe = (grid, m, n, x, y) => {
  return !(x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === '0');
};

export default numIslands;
