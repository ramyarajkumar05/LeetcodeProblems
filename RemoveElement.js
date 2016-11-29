/*Given an array and a value, remove all instances of that value in place and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:
Given input array nums = [3,2,2,3], val = 3

Your function should return length = 2, with the first two elements of nums being 2.*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 // Accepted in leetcode 144ms
var removeElement = function(nums, val) {
    var start = 0;
    var counter=0;
var end=nums.length-1;
while(start<=end){
	if(nums[start] === val){
		nums.splice(start,1);
		nums.splice(end,0,val);
		end--;
		counter++;
	}
	else
		start++;
}

nums.splice(nums.length-counter,counter);
};