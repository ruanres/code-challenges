/**
 * URL: https://leetcode.com/problems/plus-one/
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
