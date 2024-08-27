/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    let frequencyMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (frequencyMap[nums[i]]) {
            count += frequencyMap[nums[i]];
            frequencyMap[nums[i]] += 1;
        } else {
            frequencyMap[nums[i]] = 1;
        }
    }

    return count;
};