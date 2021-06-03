const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
const bubbleSort = nums => {
  let hasChange = true;
  for (let i = 0; i < nums.length - 1 && hasChange; i++) {
    hasChange = false;
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        hasChange = true;
      }
    }
  }
  return nums;
};

console.log(bubbleSort([10, 9, 2, 8, 5, 6, 7]));
