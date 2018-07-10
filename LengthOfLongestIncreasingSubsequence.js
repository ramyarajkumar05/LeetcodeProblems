/*
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 

*/
// Youtube video reference: https://www.bing.com/videos/search?q=longest+increasing+subsequence+video&view=detail&mid=754C157A54F514412A51754C157A54F514412A51&FORM=VIRE
var lengthOfLIS = function(nums) {
     if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;
   var LIS = [];
   // Initially have all the values in LIS array as 1.
    for(var index = 0; index<nums.length; index++){
        LIS[index] = 1;
    }
    
    for(var i=1; i<nums.length; i++){
        var j = 0;
        
        while(j!=i){
            if(nums[j] < nums[i]){
                LIS[i] = Math.max(LIS[i] , LIS[j]+1);
            }
            j++;
        }
    }
    // Get maximum in LIS array.
    var max = LIS[0];
    
    for(var i=0; i<LIS.length; i++){
        if(LIS[i] > max)
            max = LIS[i];
    }
    return max;
};