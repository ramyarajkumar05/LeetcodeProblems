/**
Given a binary tree and a sum, 
determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  var executePathsum = function(){
  	
 var five = new TreeNode(5);
 var four = new TreeNode(4);
 var eight = new TreeNode(8);
 var eleven = new TreeNode(11);
 var thirteen = new TreeNode(13);
 var four1 = new TreeNode(4);
 var seven = new TreeNode(7);
 var two = new TreeNode(2);
 var one = new TreeNode(1);
 five.left = four;
 five.right = eight;
 four.left = eleven;
 
 /*eleven.left = seven;
 eleven.right = two;
 eight.left = thirteen;
 eight.right=four1;
 four1.right=one;*/
return pathsum(five,20);
  };
var hasPathSum1 = function(root, sum) {
    if(root == null) return false;

    if(root.left == null && root.right == null)
        {
        		console.log(root.val);
        if( sum - root.val == 0)
            return true;
        else
            return false;
        }
    var l = false; r = false;
    if(root.left!=null){
         l= hasPathSum(root.left, sum-root.val);
         console.log(l);
    }
    if(l) return true; // This avoids calculating r because the path is already found. More efficient.
    if(root.right!=null){
    //	console.log("right not null "+sum-root.val);
         r= hasPathSum(root.right, sum-root.val);
    }
    return r;
};

var pathsum = function(node,sum){
	var total = 0;
	return hasPathSum(node,sum, total);
}

var hasPathSum = function(root, sum, total) {
    if(root == null) return false;
    total += root.val;
    console.log("Current: " + root.val + " ; Sum: " + sum + " ; Total : " + total);
    if(total > sum) return false;
    if(root.left == null && root.right == null)
        return (sum == total);

    return hasPathSum(root.left, sum, total) || hasPathSum(root.right, sum, total);
}