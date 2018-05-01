/**
 * @param {number[]} nums
 * @return {number}
 */

 // Binary Search
 // Time Complexity - O(logn)
 // Space complexity - O(1)
var singleNonDuplicate = function(nums) {    
         
    var low = 0;
    var high = nums.length -1;  
    var mid;    
    while(low < high){
        mid = (low+high)/2;
        if(mid%2 == 1) mid--; 
        if(nums[mid] != nums[mid + 1]) high = mid;
        else
            low = mid+2;
    }
    return nums[low];    
};
