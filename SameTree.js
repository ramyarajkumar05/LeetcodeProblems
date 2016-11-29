/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} a
 * @param {TreeNode} b
 * @return {boolean}
 */

// Accepted in 89ms
var isSameTree = function(a,b){
	var left;
	var right;
	if(a===null && b===null) return true;
	
	if((a===null && b!==null) || (a!==null && b===null ) || ( a!==null &b!==null && a.val!==b.val)) return false;


	if((a.left===null && b.left!==null) || (a.left!==null && b.left ===null)) return false;
	left = isSameTree(a.left,b.left);
	if(!left) return false;

	if((a.right===null && b.right!==null) || (a.right!==null && b.right ===null)) return false;
	right = isSameTree(a.right,b.right);
	return right;
};
