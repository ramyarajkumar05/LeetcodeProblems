//673. Number of Longest Increasing Subsequence
/*Given an unsorted array of integers, find the number of longest increasing subsequence.

Example 1:
Input: [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].
*/
var findNumberOfLIS = function(nums) {
    
     if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;
   var LIS = [];
    var count = [];
    var max_len = 0;
    var res = 0;  
    
    
    for(var i=0; i<nums.length; i++){  
        LIS[i] = 1;
        count[i] = 1;
        
        var j = 0;        
        while(j!=i){
            if(nums[j] < nums[i]){
                
                if(LIS[i] == LIS[j]+1){
                	count[i] += count[j]; 
                    
                }
                
                else if(LIS[j]+1 > LIS[i]){
                	LIS[i] = LIS[j]+1;
                  	count[i] = count[j];                    
                } 
                
            } 
             
            j++;
        } 
        if(max_len == LIS[i])
            res += count[i];
        
        else if(max_len < LIS[i]){
            max_len = LIS[i];
            res = count[i];
        }
    } 
   
  return res;
};

////////////////////////


