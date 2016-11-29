/*Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? */
/**
 * @param {number[]} nums
 * @return {number}
 */
 // Accepted in 98ms
var singleNumber = function(nums) {
    var map={};
    for(var i=0;i<nums.length;i++){
        if(map[nums[i]] == null)
        map[nums[i]] = 1;
        else
        map[nums[i]]=2;
    }
    for(var key in map){
        if(map[key] == 1)
        return parseInt(key);
    }
    
};