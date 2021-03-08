const fourSum = (nums, target) => {
  let res = [];
  const len = nums.length;
  if (len > 3) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
      for (let j = i + 1; j < len - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue;
        }
        let lo = j + 1,
          hi = len - 1;
        while (lo < hi) {
          let sum = nums[i] + nums[j] + nums[lo] + nums[hi];
          if (sum === target) {
            res.push([nums[i], nums[j], nums[lo], nums[hi]]);
            while (lo < hi && nums[lo] === nums[lo + 1]) lo++;
            while (lo < hi && nums[hi] === nums[hi - 1]) hi--;
            hi--;
            lo++;
          } else if (sum < target) {
            lo++;
          } else {
            hi--;
          }
        }
      }
    }
  }
  return res;
};

export default fourSum;
