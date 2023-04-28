/**
 * URL: https://leetcode.com/problems/largest-number-at-least-twice-of-others/
 */

  /**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  let max = 0, maxIndex = -1;
  nums.forEach((num, index) => {
    if (num > max) {
      max = num;
      maxIndex = index;
    }
  })

  const isDominant = nums.every((num) => {
    return num === max || max >= num * 2;
  });

  return isDominant ? maxIndex : -1;
};

export default dominantIndex;
