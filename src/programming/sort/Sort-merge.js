const mergeSort = nums => {
  const len = nums.length;
  if (len < 2) {
    return nums;
  }
  let mid = len >> 1,
    left = nums.slice(0, mid),
    right = nums.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};
const merge = (left, right) => {
  const res = [];
  let l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      res.push(left[l]);
      l++;
    } else {
      res.push(right[r]);
      r++;
    }
  }
  return res.concat(left.slice(l)).concat(right.slice(r));
};
console.log(mergeSort([10, 9, 2, 8, 5, 6, 7]));
