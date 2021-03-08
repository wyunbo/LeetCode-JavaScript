const threeSum = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let lo = i + 1;
    let hi = nums.length - 1;
    let target = -nums[i];
    while (lo < hi) {
      if (nums[lo] + nums[hi] === target) {
        res.push([nums[i], nums[lo], nums[hi]]);
        while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
        while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
        lo++;
        hi--;
      } else if (nums[lo] + nums[hi] > target) {
        hi--;
      } else {
        lo++;
      }
    }
  }
  return res;
};

export default threeSum;
