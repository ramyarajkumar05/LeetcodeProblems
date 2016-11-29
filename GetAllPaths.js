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