/**
 * Definition for a binary tree node. */
 function TreeNode(val) {
    this.val = val;
      this.left = this.right = null;
  }

  var execute = function(){

 var three = new TreeNode(3);
 var nine = new TreeNode(9);
 var twenty = new TreeNode(20);
 var fifteen = new TreeNode(15);
 var seven = new TreeNode(7);
 three.left = nine;
 three.right = twenty;
 twenty.left = fifteen;
 twenty.right = seven;
 return minDepth(three);
  };
 
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root == null) return 0;
    if(root.left == null && root.right == null) return 1;
    
    if(root.left !=null)
        var lh = minDepth(root.left);
    else
        var lh = Number.MAX_VALUE;
    
    if(root.right !=null)
        var rh = minDepth(root.right);
    else
        var rh = Number.MAX_VALUE;
    console.log(1 + Math.min(lh,rh));
    return 1 + Math.min(lh,rh);
}