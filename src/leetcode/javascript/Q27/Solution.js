/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var dup = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            dup++;
            nums[i] = null;
        }
    }

    var nullNum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === null) {
            nullNum++;
        } else if (nullNum > 0) {
            nums[i - nullNum] = nums[i];
            nums[i] = null;
        }
    }

    return nums.length - dup;
};