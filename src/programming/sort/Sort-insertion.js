const insertionSort = nums => {
  for (let i = 0, j, current; i < nums.length; i++) {
    current = nums[i];
    for (j = i - 1; j >= 0 && nums[j] > current; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = current;
  }
  return nums;
};
console.log(insertionSort([6, 5, 4, 2, 10, 7]));
