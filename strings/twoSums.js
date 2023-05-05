
var twoSum = function(nums, target) {
    const diffIndexes = {};
    for (let index = 0; index < nums.length; index++) {
      const num = nums[index];
      const diff = target - num;
      const complementaryIndex = diffIndexes[diff];
      if (complementaryIndex != undefined) {
        return [complementaryIndex, index];
      } else {
        diffIndexes[num] = index;
      }
    }
}

export default twoSum;
