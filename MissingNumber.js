/**
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example,
Given nums = [0, 1, 3] return 2.

Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?
 * @param {number[]} nums
 * @return {number}
 */
 // Accepted in leetcode 99ms
var missingNumber = function(nums) {
    var n = nums.length;
    var total = n*(n+1)/2;
    var sum=0;
    for(var i =0;i<n;i++){
     sum+=nums[i];   
    }
    return total-sum;
};