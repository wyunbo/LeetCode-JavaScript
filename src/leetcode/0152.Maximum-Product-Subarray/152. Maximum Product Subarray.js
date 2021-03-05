const maxProduct = (nums) => {
  let max = nums[0];
  let min = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [max, min] = [min, max];
    }
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    res = Math.max(res, max);
  }
  return res;
};

export default maxProduct;
