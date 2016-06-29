/* 153. Find Minimum in Rotated Sorted Array 
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array
/**
 * @param {number[]} nums
 * @return {number}
 */
 //Accepted solution with 116 ms runtime
var findMin = function(nums) {
    var low=0;
		var high=nums.length-1;

		if(nums[low] < nums[high]) return nums[low];
		while(low<high-1)
		{
			var mid= Math.floor((low+high)/2);
			if(nums[low] >nums[mid])
				high = mid;
			else
				low=mid;
		}

		if(nums[low] < nums[high]) return nums[low];
		else
			return nums[high];
};