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
		while(low<high)
		{
			var mid= Math.floor((low+high)/2);
			if(nums[low] >nums[mid])
				high = mid;
			else
				low=mid+1;
		}
		return nums[low];
};

// If there are duplicates in the array
var findMin = function(nums) {
  var low=0;
		var high=nums.length-1;
		if(nums[low] < nums[high]) return nums[low];
		while(low<high)
		{
			var mid= Math.floor((low+high)/2);
			if(nums[high] >nums[mid])
				high = mid;
			else if(nums[high] <nums[mid])
				low=mid+1;
            else
                high--; // Simply avoid the duplicate number
		}
			return nums[low];  
};