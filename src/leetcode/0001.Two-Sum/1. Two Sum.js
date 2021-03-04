const twoSum = (nums, target) => {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];
    if (another in numMap) {
      return [numMap[another], i];
    }
    numMap[nums[i]] = i;
  }
  return null;
};

export default twoSum;
