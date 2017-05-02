/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for (i = 0; i < nums.length; i++) {
        var other = target - nums[i];
        if (map[other] !== undefined && map[other] !== i) {
            return [i, map[other]];
        }
    }
    return null;
};