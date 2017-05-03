/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    var a = nums[0];
    var dup = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === a) {
            dup++;
            nums[i] = null;
        } else {
            a = nums[i];
        }
    }
    var nullNum = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] === null) {
            nullNum++;
        } else if (nullNum > 0) {
            nums[j - nullNum] = nums[j];
            nums[j] = null;
        }
    }

    return nums.length - dup;
};