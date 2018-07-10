/*Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory? */
/**
 * @param {number[]} nums
 * @return {number}
 */
 // Accepted in 98ms
var singleNumber1 = function(nums) {
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

// O(n) time solution using XOR operator with O(1) space
// A XOR A = 0 and also XOR is commutative. 
var singleNumber= function(nums) {
    var result = 0;
    for (var i = 0; i<nums.length; i++)
    {
        result ^=nums[i];
    }
    return result;
}