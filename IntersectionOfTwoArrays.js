/*
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 // Accepted in 92ms
var intersection = function(nums1, nums2) {
   var map={};
    for(var i=0;i<nums1.length;i++){
    	if(map[nums1[i]] == null)
    		map[nums1[i]] = 1;
    	else
    		map[nums1[i]] = map[nums1[i]]+1;
    }
    nums1=[];
    for(var j=0;j<nums2.length;j++){
    	if(map[nums2[j]]!=null && map[nums2[j]]!==0)
    	{
   		   		delete map[""+nums2[j]+""];
    		
    			nums1.push(nums2[j]);
    		
    		
    	}
    }
    return nums1;
};