/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength1 = function(nums) {
    var pos = 0;
    var count = 0;
    var len=0; var maxlen = 0; 
    for(var i=0; i< nums.length; i++){
        count = 0; pos=i; len = 0;
        for(var j=i; j<nums.length; j++){            
            if(nums[j] == 1) count++;
            if(nums[j] == 0) count--;
            if(count == 0){                
                len = len + (j-pos+1); 
                pos=j+1; 
                count = 0;               
            }
        }
         maxlen = Math.max(maxlen, len);               
    }
    return maxlen;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums){
    var map={};
    var count = 0;
    if(nums.length < 2) return 0;
    var pos = 1, i=0;

    while(i<nums.length){
        if(map[nums[i]] == null) map[nums[i]] = 1;
        else map[nums[i]] = map[nums[i]] + 1;

        if(map[0] == map[1]){
            count = map[0] + map[1];
        }

        i++;
    }

    while(pos < nums.length-1){
        if(nums[pos-1] ==0) map[0] = map[0] -1;
        else map[1] = map[1] - 1;

        if(map[0] == map[1])
            count = Math.max(count, map[0] + map[1]);

        pos++;
    }

    return count;
}