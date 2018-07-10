/**
 * @param {number[]} nums
 * @return {number}
 */

var arrayNesting = function(nums) { 
    var count = 0;
    for(var i = 0; i< nums.length; i++){
        var result = [];
        count = Math.max(count, getVal(nums, i, result));
    }
    return count;
};

var getVal = function(nums, index, result){
    var val = nums[index];
    if(!result.includes(val)){
        result.push(val);
        getVal(nums,val,result);
    }
    return result.length;
}