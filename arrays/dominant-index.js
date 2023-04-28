/**
 * URL: https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1147/
 * Description: 
 * You are given an integer array nums where the largest integer is unique.
  Determine whether the largest element in the array is at least twice as much as every other number in the array. 
  If it is, return the index of the largest element, or return -1 otherwise.
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
