/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 // Accepted in 102 ms
var invertTree = function(node) {
    if(node===null) return node;
var temp = node.right;
node.right=node.left;
node.left=temp;
invertTree(node.left);
invertTree(node.right);
return node;
}
