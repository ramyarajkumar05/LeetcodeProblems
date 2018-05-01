/**
Given a Binary Search Tree and a target number, 
return true if there exist two elements in the BST such that their sum is equal to the given target.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
// Solution 1
var findTarget = function(root, k) { 
var map = {};
return helper(root, k , map);
};
var helper = function(root, k, map){
    if(root == null) return false;
     if(map[k-root.val] !== null && map[k-root.val] !== undefined) return true;
    else map[root.val] = 1;
   return helper(root.left, k, map)|| helper(root.right, k, map);  
}

// Solution 2
    var findTarget = function(root,k) {
        var nums = [];
        inorder(root, nums);
        var low=0;
        var high = nums.length-1;
        while(low< high){
            if(nums[low] + nums[high] == k)return true;
            else if(nums[low] + nums[high] < k) low++;
            else high--;
        }
        return false;
    }
    
    var inorder = function(root, nums){
        if(root == null)return;
        inorder(root.left, nums);
        nums.push(root.val);
        inorder(root.right, nums);
    }