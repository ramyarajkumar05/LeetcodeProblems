/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 // Time Complexity - O(n^2)
 // Space O(1)
var subarraySum1 = function(nums, k) {
    var sum = 0;
    var count = 0;
    for(var i=0; i<nums.length; i++){
        sum=0;
        for(var j=i; j<nums.length; j++){
            sum += nums[j];
            if(sum == k)
                count++;
        }
    }
    return count;
};

// Time Complexity O(n)
// Space complexity O(1)
var subarraySum = function(nums, k) {
   var map={};
    map[0] = 1;
    var sum=0;
    var count = 0;
    for(var i=0; i<nums.length;i++){
        sum+=nums[i];
        
        if(map[sum-k] != null)
            count += map[sum-k];
        
        if(map[sum] == null) map[sum] = 1;
        else map[sum] = map[sum] + 1;
    }
    return count;
};