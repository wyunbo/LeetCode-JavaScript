const maxSubArray = (nums) => {
  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
    return nums[0];
  }
  let local = nums[0];
  let res = nums[0];
  for (let i = 1; i < len; i++) {
    local = Math.max(nums[i] + local, nums[i]);
    res = Math.max(res, local);
  }
  return res;
};

export default maxSubArray;
