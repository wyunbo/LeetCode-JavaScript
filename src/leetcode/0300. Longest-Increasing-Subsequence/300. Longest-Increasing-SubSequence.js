const lengthOfLIS = (nums) => {
  const n = nums.length;
  const dp = [];
  let max = 0;
  for (let i = 0; i < n; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
      }
    }
    max = Math.max(dp[i], max);
  }
  return max;
};

export default lengthOfLIS;
