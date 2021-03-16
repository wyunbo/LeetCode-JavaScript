const lengthOfLongestSubstring = (s) => {
  if (s.length === 0) {
    return 0;
  }
  const map = new Map();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      j = Math.max(j, map.get(s[i]) + 1);
    }
    max = Math.max(max, i - j + 1);
    map.set(s[i], i);
  }
  return max;
};

const lengthOfLongestSubstringSet = (s) => {
  if (s.length === 0) {
    return 0;
  }
  const set = new Set();
  let max = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[j]);
      j++;
    }
    set.add(s[i]);
    max = Math.max(max, set.size);
  }
  return max;
};

export { lengthOfLongestSubstring, lengthOfLongestSubstringSet };
