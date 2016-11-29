// Accepted in 112ms
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {boolean}
 */
var isSymmetric= function(node){
var invertedTree = null;

if(node===null) return true;

if(node.left === null && node.right===null) return true;
if(node.left === null && node.right !==null ) return false;

if(node.left !== null && node.right ===null) return false;

if(node.left.val !== node.right.val) 	return false;

if(node.left!==null){
invertedTree = invertTree(node.left);


return isSameTree(invertedTree, node.right);

}

};
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
}

var invertTree = function(node) {
    if(node===null) return node;
var temp = node.right;
node.right=node.left;
node.left=temp;
invertTree(node.left);
invertTree(node.right);
return node;
}