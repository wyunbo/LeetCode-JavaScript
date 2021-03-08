import threeSum from '../0015.3Sum/15. 3Sum';

const threeSumClosest = (nums, target) => {
  let res = 0;
  let diff = Number.MAX_SAFE_INTEGER;
  const len = nums.length;
  if (len > 2) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
      let lo = i + 1;
      let hi = len - 1;
      while (lo < hi) {
        const sum = nums[lo] + nums[hi] + nums[i];
        if (Math.abs(sum - target) < diff) {
          diff = Math.abs(sum - target);
          res = sum;
        }
        if (sum === target) {
          return res;
        } else if (sum > target) {
          hi--;
        } else {
          lo++;
        }
      }
    }
  }
  return res;
};

export default threeSumClosest;
