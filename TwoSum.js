/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
UPDATE (2016/2/13):
The return format had been changed to zero-based indices. Please read the above updated description carefully.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //Accepted solution with 116 ms runtime
var twoSum = function(nums, target) {
    var list=[];
	var map={};
	if(nums==null || nums.length <=0)return list;
	for(var i=0;i<nums.length;i++)
	{
		if(map[target-nums[i]]==null)
			map[nums[i]]=i;
		else{
			list[0] = map[target-nums[i]];
			list[1] = i;
		}
	}
	return list;
};
