/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
  const n = s.length;
  for (let left = 0, right = n - 1; left < right; left++, right--) {
    [s[left], s[right]] = [s[right], s[left]];
  }
  return s;
};

export default reverseString;
