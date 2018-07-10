/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 // Accepted in 145ms

 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  var executeGetAllPaths = function(){    
 var five = new TreeNode(5); 
 var two = new TreeNode(2);
 var one = new TreeNode(1);
 var three = new TreeNode(3);
 one.left = two;
 one.right=three;
 two.right = five;
return binaryTreePaths(one);
  };
var binaryTreePaths = function(node) {
    var la=[];
 	var ra=[];
 	var leafArray=[]; 	

 	if(node!==null)
 	{
 	    if(node.left===null && node.right===null)
 	{
 		leafArray.push(node.val+"");
 		return leafArray;
 	}

 	if(node.left!==null){
 		la=binaryTreePaths(node.left);
 		for(var i=0;i<la.length;i++){
 			la[i]=node.val+"->"+la[i];
 		}
 	}
if(node.right!==null){
 		ra=binaryTreePaths(node.right);
 		for(var j=0;j<ra.length;j++){
 			ra[j]=node.val+"->"+ra[j];
 		}
 	}
 	}
return la.concat(ra);
};