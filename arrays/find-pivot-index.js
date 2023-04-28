/**
 * @param {number[]} nums
 * @return {number}
 */

function sum(nums, start, end) {
    if (start === end) return 0;
    return nums.slice(start, end).reduce((sum, num) => sum + num, 0);
}

var pivotIndex = function(nums) {
    let pivot = -1;
    let sumIsEqual = false;
    while(!sumIsEqual && pivot < nums.length - 1) {
        pivot++;
        const leftSum = sum(nums, 0, pivot);
        const rightSum = sum(nums, pivot+1, nums.length);
        sumIsEqual = leftSum === rightSum;
    }
    
    return sumIsEqual ? pivot : -1;
};

export default pivotIndex;