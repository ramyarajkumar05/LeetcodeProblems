/**
 * @param {number[]} nums
 * @return {number[]}
 */
 // Greedy algorithm - Time O(n) Space O(n). Avoids creating extra arrays.
var productExceptSelf = function(nums) {
    var res = [];
    if(nums == null || nums.length == 0)return nums;
    if(nums.length == 1) return [1];
    res[0] = 1;
    for(var i=1;i<nums.length;i++){
        res[i] = res[i-1] * nums[i-1];
    }
    var right = 1;
    for(var i=nums.length-1; i>=0; i--){
        res[i] = res[i]*right;
        right = right * nums[i];
    }
    return res;
};

// Creates 3 arrays in total. 1 for Products with Before Index, 1 for after index, and 1 for the result.
var productExceptSelf1 = function(a){
    var before = [];
    before[0] = 1;
    var after = [];
    after[a.length-1] = 1;
    var result = [];
    for(var i=1; i<a.length; i++){
        before[i] = a[i-1] * before[i-1];
    }
    for(var i=a.length-2; i>=0; i--){
        after[i] = a[i+1] * after[i+1];
    }
    for(var i=0;i<a.length;i++){
        result[i] = before[i] * after[i];
    }
    return result;
};