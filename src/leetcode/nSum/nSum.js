const nSum = (nums, n, target) => {
  const sumN = (nums, n, target, i, res) => {
    if (target === 0) {
      return res;
    }
    if (i === nums.length || n === 0 || target < 0) {
      return null;
    }
    return (
      sumN(nums, n - 1, target - nums[i], i + 1, res.concat(nums[i])) ||
      sumN(nums, n, target, i + 1, res)
    );
  };
  return sumN(nums, n, target, 0, []);
};

const nSum2 = (nums, n, target) => {
  let res = null;
  const decisions = [];
  const inner = (n, target, i) => {
    if (res) {
      return;
    }
    if (target === 0) {
      res = decisions.slice();
    }
    if (i === nums.length || n === 0 || target < 0) {
      return;
    }
    decisions.push(nums[i]);
    inner(n - 1, target - nums[i], i + 1);
    decisions.pop(nums[i]);
    inner(n, target, i + 1);
  };
  inner(n, target, 0);
  return res;
};

export { nSum, nSum2 };
