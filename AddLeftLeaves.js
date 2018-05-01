/**
 * Definition for a binary tree node. */
 function TreeNode(val) {
    this.val = val;
      this.left = this.right = null;
  }

  var execute1 = function(){

 var three = new TreeNode(3);
 var nine = new TreeNode(9);
 var twenty = new TreeNode(20);
 var fifteen = new TreeNode(15);
 var seven = new TreeNode(7);
 var six = new TreeNode(6);
 three.left = nine;
 three.right = twenty;
 twenty.left = fifteen;
 fifteen.left = six;
 twenty.right = seven;
 //console.log(sumOfLeftLeaves(three));
 return sumOfLeftLeaves(three);
  };
 
var sumOfLeft = function(root){

    var sum = 0;
    var result = addAllLeftNodes(sum,root);
    return result;
};
var addAllLeftNodes = function(sum,root) {
    if(root == null) return 0;    
    if(root.left != null){
        sum += root.left.val;
        //console.log(root.left.val);
       sum= addAllLeftNodes(sum,root.left);
    }
     if(root.right != null){        
        sum=addAllLeftNodes(sum,root.right);
    }
    

    return sum;
}


var sumOfLeftLeaves = function(root) {
  var l = 0; var r = 0;
    if(root == null || (root.left == null && root.right == null)) return 0;    
    if(root.left != null){
        if(root.left.left == null && root.left.right == null)
            l= root.left.val;
        else
            l = sumOfLeftLeaves(root.left);
    }
     if(root.right != null){        
        r = sumOfLeftLeaves(root.right);
    }
    
    return l+r;
}