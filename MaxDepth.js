/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {number}
 */
 //Accepted in 115ms
var getHeight = function(node){
    if(node == null) return 0;
    var lh;
	var rh;	
	if(node.left===null && node.right===null) return 1;
    lh = getHeight(node.left);
    rh = getHeight(node.right);		
	return 1+Math.max(lh,rh);
};