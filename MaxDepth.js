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
var maxDepth = function(node) {
    var lh;
	var rh;
	if(node!==null){
	if(node.left===null && node.right===null) 
		{
			//map[JSON.stringify(node)]=0;
			//console.log(node.val +" "+JSON.stringify(node));
			return 1;
		}}
	if(node!==null)
	{
		if(node.left!==null)
		{
			lh=maxDepth(node.left); 
		}
		else
		{
			lh=1;
		}
		if(node.right!==null)
		{
			rh=maxDepth(node.right);			
		}
		else
		{
			rh=1;
		}
	}
	else{
	    return 0;
	}
//	map[JSON.stringify(node)]=1+Math.max(lh,rh);
	//console.log(node.val +" "+JSON.stringify(node));
	return 1+Math.max(lh,rh);
};