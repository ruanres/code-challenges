/**
 * URL: https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1148/
 * Description: You are given a large integer represented as an integer array digits, 
 * where each digits[i] is the ith digit of the integer. The digits are ordered from most 
 * significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 * Increment the large integer by one and return the resulting array of digits.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const lastPosition = digits.length - 1;
  if (digits[lastPosition] < 9) {
    digits[lastPosition] += 1;
    return digits;
  }

  if (lastPosition == 0) {
    return [1,0];
  }

  return [...plusOne(digits.slice(0, lastPosition)), 0];
};

export default plusOne;
