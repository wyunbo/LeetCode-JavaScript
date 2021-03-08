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

export default nSum;
