// return Array of Array of integers
var findSubsequences = function(nums) {
        var rst =[];
        if (nums == null || nums.length == 0){
            return rst;
        }    
        dfs(rst, [], 0, nums, -101);
        return rst;
    };
    
    var dfs = function(rst,  path , idx, nums, pre){
        if (path.length >= 2){
            rst.push(path);
        }
        if (idx == nums.length){
            return;
        }
        var set = new Set();
        for (var i = idx; i < nums.length; i++){
            if (set.has(nums[i])){
                continue;
            }
            set.add(nums[i]);
            if (nums[i] >= pre){
                path.push(nums[i]);
                dfs(rst, path, i + 1, nums, nums[i]);
                path.splice(path.length - 1,1);
            }
        }
    };