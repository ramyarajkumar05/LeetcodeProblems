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
 // Accepted in 142ms
var map={};
var isBalanced = function(node) {
	var lh;
	var rh;
	var left;
	if(node!==null){
    if(node.left===null&&node.right===null) return true;

    if(node.left!==null){
    	if(map[node.left.val] === null)
    		lh=getHeight(node.left);
    	else
    		lh=map[node.left.val];
    }
    else
    	lh=-1;

    if(node.right!==null){
    	if(map[node.right.val]===null)
    		rh=getHeight(node.right);
    	else
    		rh=map[node.right.val];

    }
    else
    	rh=-1;

    if(Math.abs(lh-rh)>1) return false;
    left=isBalanced(node.left);
    if(!left) return false;
    return isBalanced(node.right);}
    else
    return true;
};


var getHeight=function(node){
	var lh;
	var rh;
	if(node.left===null && node.right===null) 
		{
			map[JSON.stringify(node)]=0;
			//console.log(node.val +" "+JSON.stringify(node));
			return 0;
		}
	if(node!==null)
	{
		if(node.left!==null)
		{
			lh=getHeight(node.left); 
		}
		else
		{
			lh=0;
		}
		if(node.right!==null)
		{
			rh=getHeight(node.right);			
		}
		else
		{
			rh=0;
		}
	}
	map[JSON.stringify(node)]=1+Math.max(lh,rh);
	//console.log(node.val +" "+JSON.stringify(node));
	return 1+Math.max(lh,rh);
}
var execute= function(){
	var node1=new TreeNode(1);
	var node2=new TreeNode(1);
	var node3=new TreeNode(3);
	/*var node4=new TreeNode(4);
	var node5=new TreeNode(5);
	var node6=new TreeNode(6);
	var node7=new TreeNode(7);
	var node8=new TreeNode(8);*/

	node1.left=node2;
	node1.right=node3;

	/*node2.left=node4;
	node2.right=node5;
	node4.left=node6;
	node6.left=node7;
	node7.right=node8;*/
	var ht=getHeight(node1);
	console.log("sssss"+map[JSON.stringify(node1)]);
	console.log(map[JSON.stringify(node2)]);
	console.log(map[JSON.stringify(node3)]);
	console.log("This tree is "+ht);
}
