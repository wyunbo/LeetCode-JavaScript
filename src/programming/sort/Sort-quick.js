const swap = (nums, i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
const quickSort = nums => {
  sort(nums, 0, nums.length - 1);
  return nums;
};
const quickSelect = (nums, lo, hi, k) => {
  const p = Math.floor(Math.random() * (hi - lo + 1)) + lo;
  swap(nums, p, hi);
  const i = partition(nums, lo, hi);
  const m = hi - i + 1;
  if (m === k) return nums[i];
  if (m > k) return quickSelect(nums, i + 1, hi, k);
  return quickSelect(nums, lo, i - 1, k - m);
};
const findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};
const sort = (nums, lo, hi) => {
  if (lo >= hi) {
    return;
  }
  const pivot = partition(nums, lo, hi);
  sort(nums, lo, pivot - 1);
  sort(nums, pivot + 1, hi);
};
const partition = (nums, lo, hi) => {
  let i = lo,
    j;
  for (j = lo; j < hi; j++) {
    if (nums[j] < nums[hi]) {
      swap(nums, i++, j);
    }
  }
  swap(nums, i, j);
  return i;
};
console.log(quickSort([2, 1, 7, 9, 5, 8]));
console.log(findKthLargest([2, 1, 7, 9, 5, 8], 4));
